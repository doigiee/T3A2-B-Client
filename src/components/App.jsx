import React, { useState } from "react"
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
// import signIn from "./Auth"

import AuthRoute from "./AuthRoute"


function App() {
  
  const [ user, setUser ] = useState()
  const authenticated = user != null;
  
  const login = ({ email, password }) => setUser(signIn({ email, password }))
  const logout = () => setUser(null)

  const users = [
    { email: "kim@test.com", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
  ]
  const signIn = ({ email, password }) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  }

  // const JoinWrapper = () => {
  //   const { id } = useParams()
  // }

  // const [ user, setUser ] = useState()
  // const authenticated = user != null;


  return (
  <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/our_services' element={<OurServices />} />
        <Route path='/send_inquiry' element={<SendInquiry />} />
        <Route path='/login' element={<LoginController authenticated={authenticated}/>} />
        <Route path='/join' element={<JoinController />} />
        <Route element={<AuthRoute authenticated={authenticated}/>}>
          <Route path='/my_account' element={<MyAccount user={user} />} /> 
          <Route path='/bookings' element={<Booking />} /> 
        </Route>
        {/* <Route 
          path='/login' 
          element={(props) => {
            <LoginController 
            authenticated={authenticated} 
            {...props}/>
          }}/> */}
        {/* <AuthRoute/> */}
        {/* <Route path='/my_account' element={(props) => {
          authenticated ? (<MyAccount authenticated={authenticated}/>) : (<Navigate replace to="/login"/>)}}></Route> */}
        {/* <AuthRoute 
          authenticated={authenticated} 
          path="/my_account" 
          element={(props) => {
            <MyAccount user={ user } { ...props } />
          }}/> */}
        {/* need auth */}
        {/* need auth */}
      </Routes>
    <Footer />
  </>
  )
}

export default App
