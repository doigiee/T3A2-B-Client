import React, { useState, useMemo, useEffect } from 'react'
import { Link, Navigate, Route, useLocation, useNavigate } from 'react-router-dom'
import dog from '../assets/dog_login.png'



const Login = ({ email, password, authCheck, setEmail, setPassword }) => {
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
          onChange={({ target: { value } }) => setEmail(value)}
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

const LoginController = ({ authenticated }) => {
  

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  // const [ users, setUsers ] = useState([])
  const [ user, setUser ] = useState({})

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
    { email: "kim@test.com", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
  ]

  const authCheck = (evt) => {
    evt.preventDefault()
    try {
      loggingIn({ email, password })
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
  const logout = () => setUser(null)

  // const signIn = ({ email, password }) => {
  //   const user = users.find(
  //     (user) => user.email === email && user.password === password
  //   );
  //   if (user === undefined) throw new Error();
  //   console.log(user, "signIn function")
  //   setUser(user)
  //   return user
  // }

  const loggingIn = function({ email, password }) {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user === undefined) throw new Error();
      setUser(user)
      console.log(user, "signed in")
      resolve(user)
    })
  }



  
  return (
    <section id="login-bg" className='flex j-c-center a-i-center'>
      <div id="login-container" className='flex column a-i-center shadow-btm'>
        <img id='login-dog' src={dog} />
        <form id='login-form' className='flex column j-c-center a-i-center' > 
          <Login email={email} password={password} authCheck={authCheck} setEmail={setEmail} setPassword={setPassword}/>
        </form>
      </div>
    </section>
  )
}

export default LoginController