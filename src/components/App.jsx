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



function App() {
  return (
  <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/our_services' element={<OurServices />} />
        <Route path='/send_inquiry' element={<SendInquiry />} />
        <Route path='/login' element={<LoginController />} />
        <Route path='/join' element={<JoinController />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/bookings' element={<Booking />} />
      </Routes>
    <Footer />
  </>
  )
}

export default App
