import React, { useState } from 'react'
import { Link, Navigate, Route, useLocation } from 'react-router-dom'
import dog from '../assets/dog_login.png'




const LoginController = ({ authenticated }) => {
  
  const { state } = useLocation()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  // const [ user, setUser ] = useState()
  // const authenticated = user != null;

  // auth module example 
  // const users = [
  //   { email: "kim@test.com", password: "123", name: "Kim" },
  //   { email: "lee@test.com", password: "456", name: "Lee" },
  //   { email: "park@test.com", password: "789", name: "Park" },
  // ];
  
  // const signIn = ({ email, password }) => {
  //   const user = users.find(
  //     (user) => user.email === email && user.password === password
  //   );
  //   if (user === undefined) throw new Error();
  //   return user;
  // }

  // const login = ({ email, password }) => setUser(signIn({ email, password }))

  const Login = () => {
    return (
      <>
        <h2 className='heading' id="login-heading">Login</h2>
        <Link to="/join" className='sub-desc'>New to PAWFUL? Join here</Link>
        <input 
            value={email} 
            className="login-input" 
            type="email" 
            name="email" 
            placeholder='Email'
            onInput={({ target: { value } }) => setEmail(value)}
        />
        <input 
            value={password} 
            className="login-input" 
            type="password" 
            placeholder="Password"
            onChange={({ target: { value } }) => setPassword(value)}
            />
        <Link onClick={authCheck}><h3 className="btn login-btn">LOGIN</h3></Link>
        <Link className='sub-desc'>Forgot password?</Link>
      </>
    )
  }

  const authCheck = () => {
    try {
      login({ email, password }) // need to build auth check through jwt 
    } catch (e) {
      alert("Failed to login")
      setEmail('')
      setPassword('')
    }
  }

  const { from } = state || { from: { pathname: "/" }}

  if (authenticated) {
    return <Route path="/" element={<Navigate replace to={from} />} />
    // return <Redirect to={from} />
  }

  
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