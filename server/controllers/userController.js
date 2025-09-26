import { Webhook } from 'svix'
import userModel from '../models/userModel.js'


// API controller function to manage clerk user with database.
// API endpoint:- http://localhost:4000/api/user/webhooks

const clerkWebHooks = async (req, res) => {
   try{

    // Create a svix instance with clerk webhook secret.
    const whook = new Webhook (process.env.CLERK_WEBHOOK_SECRET)

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    })

    const {data, type} = req.body

    switch(type) {
      case "user.created" : {
        
        
        const userData = {
        clerkId: data.id,
        email: data.email_addresses[0].email_address,
        firstName: data.first_name,
        lastName: data.last_name,
        photo: data.image_url
        }
        await userModel.create(userData)
        console.log("Data added")
        res.json({})

        break;
      }
      case "user.updated": {

        const userData = {
        email: data.email_addresses[0].email_address,
        firstName: data.first_name,
        lastName: data.last_name,
        photo: data.image_url
        }
        await userModel.findOneAndUpdate({clerkId: data.id}, userData)
        console.log("Data updated")
        res.json({})

        break;
      }
      case "user.deleted": {

        await userModel.findOneAndDelete({clerkId: data.id})
        console.log("Data deleted")
        res.json({})

        break;
      }
    }

   } catch (error) {
    console.log(error.message)
    res.json({success:false, message: error.message})
   }
}



// API controller function to get user available credits data

const userCredits = async (req, res) => {
  try {


    const { clerkId } = req.body

    const userData = await userModel.findOne({clerkId})

    res.json({success: true, credits: userData.creditBalance })

  } catch(error) {

    console.log(error.message)
    res.json({success:false, message: error.message})
  }
}

export { clerkWebHooks, userCredits }