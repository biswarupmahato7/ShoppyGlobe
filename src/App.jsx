// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  
  )
}

export default App
