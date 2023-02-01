import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
      <Link to="/send_inquiry"className='sub-desc'>Forgot password?</Link>
    </>
  )
}

const LoginController = () => {
  

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ users, setUsers ] = useState([])
  const { setUser } = useUserContext()

  const nav = useNavigate()

  useEffect(() => {
    async function getUsers() {
      const res = await fetch('http://localhost:4717/users')
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
      console.log("Login component", user)
      resolve(user)
      reject(err => console.log(err.message))
    }).then(() => nav('../my_account')).catch((e) => console.log(e.message))
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