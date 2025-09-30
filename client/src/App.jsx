import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SignInButton } from '@clerk/clerk-react'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
    <ToastContainer position='botton-right' />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/result' element={<Result/>} />
      <Route path='/buy' element={<BuyCredit/>} />
    </Routes>
    <Footer/>
      
    </div>
  )
}

export default App
