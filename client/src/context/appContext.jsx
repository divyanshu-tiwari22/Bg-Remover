import { createContext } from 'react'
import{ useAuth, useClerk, useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()

 
const AppContextProvider = (props) => {

   
  const [credit, setCredit ] = useState(false)
  const [image, setImage] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [resultImage, setResultImage] = useState(false)

  const backendURL = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate()  

  const { getToken } = useAuth()
  const { isSignedIn } = useUser()
  const { openSignIn } = useClerk()
  

   
  const loadCreditsData = async () => {
    try{
      const token = await getToken()
       
      const {data} = await axios.get(backendURL + "/api/user/credits", {headers: { token }})
      if(data.success) {
        setCredit(data.credits)
        console.log(data.credits)
      }
    } catch(error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeBg = async (image) => {
    try{

      if(!isSignedIn) {
        return openSignIn()
      }
      setImage(image)
      setResultImage(false)

      navigate('/result')

    } catch(error) {

      console.log(error)
      toast.error(error.message)

    }
  }

  const value = {
    credit, setCredit, loadCreditsData, backendURL, image, setImage, removeBg
  }

  return (
    <AppContext.Provider value={(value)}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider