import jwt from 'jsonwebtoken'

// Middleware function to decode jwt token to get clerkId

const authUser = async (req, res, next) => {
  try{

    const { token } = req.headers
    if(!token) {
      return res.json({success: false, message: "Not authorised, try again"})
    }

    const token_decode = jwt.decode(token)

    if (!token_decode) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
    
    req.user = { id: token_decode.sub };
    console.log("This is the output of the id in auth file" + req.user.id)

    next()

  } catch (error) {
    console.log(error.message)
    res.json({success: false, message: error.message })
  }
}

export default authUser