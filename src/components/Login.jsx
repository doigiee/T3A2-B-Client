import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dog from '../assets/dog_login.png'



const Login = () => {
  return (
    <>
        <h2 className='heading' id="login-heading">Login</h2>
        <Link to="/join" className='sub-desc'>New to PAWFUL? Join here</Link>
        <input className="login-input" type="email" name="email" placeholder='Email'/>
        <input className="login-input" type="password" placeholder="Password"/>
        <Link to="/my-account"><h3 className="btn login-btn">LOGIN</h3></Link>
        <Link className='sub-desc'>Forgot password?</Link>
    </>
  )
}



const LoginController = () => {


  return (
    <section id="login-bg" className='flex j-c-center a-i-center'>
      <div id="login-container" className='flex column a-i-center shadow-btm'>
        <img id='login-dog' src={dog} />
        <form id='login-form' className='flex column j-c-center a-i-center' > 
          <Login />
        </form>
      </div>
    </section>
  )
}

export default LoginController