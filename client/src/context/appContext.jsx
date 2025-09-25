import { createContext } from 'react'
import{ useAuth } from '@clerk/clerk-react'
import { get } from 'mongoose'
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
const AppContextProvider = (props) => {

  const [credit, setCredit ] = useState(false)

  const backendURL = import.meta.env.VITE_BACKEND_URL

  const { getToken } = useAuth()

  const loadCreditsData = async () => {
    try{
      const token = await getToken()
      axios
    } catch(error) {

    }
  }
  const value = {

  }

  return (
    <AppContext.Provider value={(value)}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider