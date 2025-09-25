import { createContext } from 'react'
import{ useAuth } from '@clerk/clerk-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
const AppContextProvider = (props) => {

  // eslint-disable-next-line no-unused-vars, no-undef
  const [credit, setCredit ] = useState(false)

  const backendURL = import.meta.env.VITE_BACKEND_URL

  const { getToken } = useAuth()

  // eslint-disable-next-line no-unused-vars
  const loadCreditsData = async () => {
    try{
      const token = await getToken()
      // eslint-disable-next-line no-undef
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
  const value = {
    credit, setCredit, loadCreditsData, backendURL
  }

  return (
    <AppContext.Provider value={(value)}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider