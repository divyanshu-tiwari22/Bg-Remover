import { ClerkProvider, UserButton, useUser } from "@clerk/clerk-react";
import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk } from '@clerk/clerk-react'
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/appContext";

 
const Navbar = () => {
   
   
  const { openSignIn } = useClerk()
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, user } = useUser()
  // eslint-disable-next-line no-unused-vars
  const {credit, loadCreditsData } = useContext(AppContext)

  useEffect( () => {
    if(isSignedIn) {
      loadCreditsData()
    }
  })
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
    <Link to='/'>
      <img className='w-32 sm:w-44' src={assets.logo} alt='' /></Link>
      {
        isSignedIn
        ?<div>
          <UserButton />
        </div>
        :<button onClick={()=>openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
        Get started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt='' />
      </button>
      }
      
    </div>
  )
}

export default Navbar
