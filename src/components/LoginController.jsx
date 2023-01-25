import React from 'react'
import { Link } from 'react-router-dom'
import dog from '../assets/dog_login.png'



const Login = () => {
  return (
    <>
      <h2 className='heading' id="login-heading">Login</h2>
      <input className="login-input" type="text" name="email" placeholder='Email'/>
      <input className="login-input" type="password" placeholder="Password"/>
      <Link to="/" className="btn shadow-btm login-btn">LOGIN</Link>
      <Link id='forgot-password'>Forgot password?</Link>
    </>
  )
}



const Join = () => {
  return (
    <>
      <h2 className='heading' id="login-heading">Create my account</h2>
      <input className="login-input" type="text" name="email" placeholder='Email'/>
      <input className="login-input" type="text" name="first_name" placeholder='First name'/>
      <input className="login-input" type="text" name="last_name" placeholder='Last name'/>
      <input className="login-input" type="tel" name="contact" placeholder='Contact'/>
      <input className="login-input" type="password" placeholder="Password" />
      <input className="login-input" type="password" placeholder="Password" />
      <Link to="/" className="btn shadow-btm login-btn">CREATE MY ACCOUNT</Link>
      <span className="agreement">By creating an account,<br/> you agree to our Terms & conditions and Privacy notice on how we manage your personal information.</span>
    </>
  )
}









const LoginController = () => {



  return (
    <section id="login-bg" className='flex j-c-center a-i-center'>
      <div id="login-container" className='flex column a-i-center shadow-btm'>
        <img id='login-dog' src={dog} />
        <form id='login-form' className='flex column j-c-center a-i-center' > 
          {/* <Login /> */}
          <Join />

        </form>
      </div>
    </section>
  )
}

export default LoginController