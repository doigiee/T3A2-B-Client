import React from "react"
import { UserContextProvider } from './UserContext'
import '../App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import AboutUs from './AboutUs'
import OurServices from './OurServices'
import SendInquiry from './SendInquiry'
import LoginController from './Login'
import JoinController from './Join'
import MyAccount from './MyAccount'
import Booking from './Booking'
import NotFound from "./NotFound"
import BookingUpdate from "./BookingUpdate"
import UpdateMyDetail from "./UpdateMyDetail"



function App() {

  return (
  <>
  <UserContextProvider>
    <Navbar/>
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
        <Route path='*' element={<NotFound />} /> 
      </Routes>
    <Footer />
  </UserContextProvider>
  </>
  )
}

export default App
