import '../App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
  <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

  </>
  )
}

export default App
