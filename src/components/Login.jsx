import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchURL } from './config'
import UserBoxController from './UserBoxController'
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
      <Link to="/send_inquiry"className='sub-desc'>Forgot password?</Link>
    </>
  )
}


const LoginController = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ users, setUsers ] = useState([])
  const { user, setUser } = useUserContext()

  const nav = useNavigate()

  useEffect(() => {
    if (user) {
      nav('/my_account')}
    console.log("Login page renders")
    async function getUsers() {
      const res = await fetch(fetchURL + '/users')
      const data = await res.json()
      setUsers(data)
    }
    getUsers()
  }, [])

  const loggingIn = async (evt) => {
    evt.preventDefault()
    try {
      await authCheck({ email, password })
    } catch {
      console.log(`Failed to login`)
      alert("Failed to login. Please try again")
      setEmail('')
      setPassword('')
    }
  }

  const authCheck = async function({ email, password }) {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user === undefined) {
        alert("Login failed. Please try again")
        throw new Error("Login failed")};
      setUser(user)
      setUser({
        ...user,
        password: ''
      })
      console.log("Login component", user)
      resolve(user)
      reject(err => console.log(err.message))
    }).then(() => {
      nav('../my_account')}).catch((e) => console.log(e.message))
  }

  return (
    <UserBoxController 
      children={
        <form id='login-form' className='flex column j-c-center a-i-center' > 
          <Login email={email} password={password} loggingIn={loggingIn} setEmail={setEmail} setPassword={setPassword}/>
        </form>
      } 
    />
  )
}

export default LoginController