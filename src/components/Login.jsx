import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import dog from '../assets/dog_login.png'
import { useUserContext } from './UserContext'



const Login = ({ email, password, loggingIn, setEmail, setPassword }) => {
=======
import { fetchURL } from './config'
import UserBoxController from './UserBoxController'
import { useUserContext } from './UserContext'


const Login = ({ email, password, handle, logIn }) => {
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
  return (
    <>
      <h2 className='heading' id="login-heading">Login</h2>
      <Link to="/join" className='sub-desc'>New to PAWFUL? Join here</Link>
      <input 
<<<<<<< HEAD
=======
          id="loginInput"
          key="1"
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
          value={email} 
          className="login-input" 
          type="email" 
          name="email" 
          placeholder='Email'
          required
<<<<<<< HEAD
          onChange={({ target: { value } }) => setEmail(value)}
      />
      <input 
=======
          onChange={handle}
      />
      <input 
          id="passwordInput"
          key="2"
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
          value={password} 
          className="login-input" 
          type="password" 
          placeholder="Password"
          required
<<<<<<< HEAD
          onChange={({ target: { value } }) => setPassword(value)}
          />
      <Link onClick={loggingIn}><h3 className="btn login-btn">LOGIN</h3></Link>
      <Link className='sub-desc'>Forgot password?</Link>
=======
          name="password"
          onChange={handle}
      />
      <Link name="login-button" onClick={logIn}><h3 className="btn login-btn">LOGIN</h3></Link>
      <Link name="forgot-password" to="/send_inquiry" className='sub-desc'>Forgot password?</Link>
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
    </>
  )
}

const LoginController = () => {
  

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ users, setUsers ] = useState([])
  const { setUser } = useUserContext()

<<<<<<< HEAD
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


  const authCheck = function({ email, password }) {
    return new Promise((resolve, reject) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user === undefined) throw new Error();
      setUser(user)
      console.log(user, "signed in")
      resolve(user)
    }).then(() => nav('../my_account'))
  }

  
=======
const LoginController = () => {

  const { user, setUser } = useUserContext()
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  })

  const nav = useNavigate()

  useEffect(() => {
    if (user) {
      nav('/my_account')}
    try {
      console.log("Login page renders")
    } catch (error) {
      console.log(error.message)}
  }, [])

  const logIn = async (evt) => {
    evt.preventDefault()
    if (!form.email || !form.password) {
      return alert('Please enter your email and password')
    }
    try {
      const returnedUser = await fetch(fetchURL + '/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const data = await returnedUser.json()
      .then((response) => {
        console.log("response", response)
        if (response.code == 200) {
          setUser({
            _id: response.user_id,
            firstName: response.firstName,
            tk: response.token
            })
          alert(response.message)
          return nav('/my_account')
        }
        alert("Failed to login. Please try again")
          setUser(undefined)
          setForm({
            email: '',
            password: ''
          })
      })
    } catch {
      alert("Failed to login. Please try again")
      setUser(undefined)
      setForm({
        email: '',
        password: ''
      })
    }
  }

  const handleForm = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  



>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
  return (
    <UserBoxController 
      children={
        <form id='login-form' className='flex column j-c-center a-i-center' > 
<<<<<<< HEAD
          <Login email={email} password={password} loggingIn={loggingIn} setEmail={setEmail} setPassword={setPassword}/>
=======
          <Login 
            email={form.email} password={form.password} handle={handleForm} logIn={logIn}/>
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
        </form>
      } 
    />
  )
}

export default LoginController