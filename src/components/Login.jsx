import React, { useState, useMemo, useEffect } from 'react'
import { Link, Navigate, Route, useLocation, useNavigate } from 'react-router-dom'
import dog from '../assets/dog_login.png'
import { useUserContext } from './UserContext'



const Login = ({ email, password, loggingIn, setEmail, setPassword }) => {
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
          required
          onChange={({ target: { value } }) => setEmail(value)}
      />
      <input 
          value={password} 
          className="login-input" 
          type="password" 
          placeholder="Password"
          required
          onChange={({ target: { value } }) => setPassword(value)}
          />
      <Link onClick={loggingIn}><h3 className="btn login-btn">LOGIN</h3></Link>
      <Link className='sub-desc'>Forgot password?</Link>
    </>
  )
}

const LoginController = () => {
  

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  // const [ users, setUsers ] = useState([])
  const { user, setUser } = useUserContext()

  const nav = useNavigate()

  // useEffect(() => {
  //   async function getUsers() {
  //     const res = await fetch('http://url')
  //     const data = await res.json()
  //     setUsers(data)
  //   }
  //   getUsers()
  // }, [])

  const users = [
    { email: "kim@test.com", password: "123", firstName: "Kim" },
    { email: "lee@test.com", password: "456", firstName: "Lee" },
    { email: "park@test.com", password: "789", firstName: "Park" },
  ]
  
  const loggingIn = (evt) => {
    evt.preventDefault()
    try {
      authCheck({ email, password })
      // .then((res) => setUser(res))
      // .then((res) => console.log(res))
      .then((res) => nav(`../my_account`, {
        replace: true,
        state: res
      }))
    } catch (e) {
      alert("Failed to login")
      setEmail('')
      setPassword('')
    }
  }

  // const login = ({ email, password }) => {
  //   setUser(signIn({ email, password }))
  //   console.log(user, "login function")
  //   return user
  // }

  // const signIn = ({ email, password }) => {
  //   const user = users.find(
  //     (user) => user.email === email && user.password === password
  //   );
  //   if (user === undefined) throw new Error();
  //   console.log(user, "signIn function")
  //   setUser(user)
  //   return user
  // }

  const authCheck = function({ email, password }) {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user === undefined) throw new Error();
      setUser(user)
      console.log(user, "signed in")
      resolve(user)
    }).catch((e) => alert(e.message))
  }



  
  return (
    <section id="login-bg" className='flex j-c-center a-i-center'>
      <div id="login-container" className='flex column a-i-center shadow-btm'>
        <img id='login-dog' src={dog} />
        <form id='login-form' className='flex column j-c-center a-i-center' > 
          <Login email={email} password={password} loggingIn={loggingIn} setEmail={setEmail} setPassword={setPassword}/>
        </form>
      </div>
    </section>
  )
}

export default LoginController