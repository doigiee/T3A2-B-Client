import React from 'react'
import { Link } from 'react-router-dom'
import MenuController from './Menu'

const Navbar = () => {
  return (
    <nav id="navbar" className="flex a-i-center j-c-sb">
      <Link id="logo" to="/">PAWFUL</Link>
      <MenuController />
    </nav>
  )
}

export default Navbar
