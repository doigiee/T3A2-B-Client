import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import dog from '../assets/dog_login.png'


const Join = () => {

  const [ password, setPassword ] = useState('') //password container color controller
  const [ users, setUsers ] = useState([])
  const nav = useNavigate()

  function handlePassInput(e) {
    console.log(e.target)
    if (e.target) {
      const password = e.target.value
      setPassword(password)
      if (password.length === 0) {
        addClass(e)
      } else if (password.length < 4) {
        addClass(e, "weak")
      } else if (password.length < 7) {
        addClass(e, "average")
      } else {
        addClass(e, "strong")
      }
    }
  }

  function addClass(e, name) {
      e.target.className = "login-input"
      if (name) {
        e.target.className += " " + name
      }
  }

  const titles = [
    "Mr",
    "Mrs",
    "Ms",
    "Miss",
    "Mx"
  ]

  useEffect(() => {
    async function fetchUsers () {
      const res = await fetch('http://url') //user list .. leaks risk?
      const data = await res.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  const addUserDetail = async ( email, title, first_name, last_name, phone_number, password) => {
    const id = users.length

    const newUser = {
      email: email,
      title: title,
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone_number,
      password: password // Double check on DB server
    }

    // Post new user to API
    const returnedUser = await fetch('http://url', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    const data = await returnedUser.json()

    return <Navigate to={{}}></Navigate>


  }







  return (
    <>
      <h2 className='heading' id="login-heading">Create my account</h2>
      <Link to="/login" className='sub-desc'>Already have an account? Login here</Link>
      <input className="login-input" type="email" name="email" placeholder='Email *'/>
      <select className="login-input" name="title">
        <option value="" disabled selected hidden>Title</option>
        {titles.map((el,idx) => {
          return <option value={el}>{el}</option>
        })}
      </select>
      <input className="login-input" type="text" name="first_name" placeholder='First name *'/>
      <input className="login-input" type="text" name="last_name" placeholder='Last name *'/>
      <input className="login-input" type="tel" name="phone_number" placeholder='Phone number *'/>
      <input id="password" className="login-input" type="password" placeholder="Password *" value={password} onInput={handlePassInput}/>
      <Link to="/my_account"><h3 className="btn login-btn">Create my account</h3></Link>
      <span className="agreement">By creating an account,<br/> you agree to our Terms & conditions and Privacy notice on how we manage your personal information.</span>
    </>
  )
}


const Update = () => {

  return (
    <>
      <h2 className='heading' id="login-heading">Update my detail</h2>
      <input className="login-input" type="text" name="first_name" placeholder='New first name *'/>
      <input className="login-input" type="text" name="last_name" placeholder='New last name *'/>
      <input className="login-input" type="tel" name="contact" placeholder='New contact *'/>
      <input id="password" className="login-input" type="password" placeholder="Current password *" /> 
      <Link to="/my_account"><h3 className="btn login-btn">Create my account</h3></Link>
    </>
  )
}




const JoinController = () => {

  return (
    <section id="login-bg" className='flex j-c-center a-i-center'>
      <div id="login-container" className='flex column a-i-center shadow-btm'>
        <img id='login-dog' src={dog} />
        <form id='login-form' className='flex column j-c-center a-i-center' > 
          <Join />
          {/* <Update /> */}
        </form>
      </div>
    </section>
  )
}

export default JoinController