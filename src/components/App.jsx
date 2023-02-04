<<<<<<< HEAD
import React, { useState } from "react"
=======
import React from "react"
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
import { UserContextProvider } from './UserContext'
import '../App.css'
import Navbar from './Navbar'
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import AboutUs from './AboutUs'
import OurServices from './OurServices'
import SendInquiry from './SendInquiry'
import LoginController from './Login'
import JoinController from './Join'
import MyAccount from './MyAccount'
import Booking from './Booking'
<<<<<<< HEAD
// import signIn from "./Auth"
=======
import NotFound from "./NotFound"
import BookingUpdate from "./BookingUpdate"
import UpdateMyDetail from "./UpdateMyDetail"
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d

import AuthRoute from "./AuthRoute"


function App() {

  return (
  <>
  <UserContextProvider>
    <Navbar/>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/our_services' element={<OurServices />} />
        <Route path='/send_inquiry' element={<SendInquiry />} />
        <Route path='/join' element={<JoinController />} />
        <Route path='/login' element={<LoginController />} />
        <Route path='/my_account' element={<MyAccount />} /> 
        <Route path='/bookings' element={<Booking />} /> 
      </Routes>
=======
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about_us' element={<AboutUs />} />
      <Route path='/our_services' element={<OurServices />} />
      <Route path='/send_inquiry' element={<SendInquiry />} />
      <Route path='/join' element={<JoinController />} />
      <Route path='/login' element={<LoginController />} />
      <Route path='/my_account' element={<MyAccount />} /> 
      <Route path='/my_account/update' element={<UpdateMyDetail />} /> 
      <Route path='/bookings' element={<Booking />} /> 
      <Route path='/bookings/update' element={<BookingUpdate />} /> 
      <Route path='/404' element={<NotFound />} /> 
      <Route path='https://pawful.netlify.app/404' element={<NotFound />} /> 
      <Route path='https://pawful.netlify.app/*' element={<NotFound />} /> 
      <Route path='*' element={<NotFound />} /> 
    </Routes>
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
    <Footer />
  </UserContextProvider>
  </>
  )
}

export default App
