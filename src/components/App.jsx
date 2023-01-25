import '../App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import AboutUs from './AboutUs'
import OurServices from './OurServices'

function App() {
  return (
  <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/our_services' element={<OurServices />} />
      </Routes>
    <Footer />
  </>
  )
}

export default App
