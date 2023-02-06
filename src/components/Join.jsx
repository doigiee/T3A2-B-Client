import React, { useEffect, useState } from 'react'
import { useUserContext } from './UserContext'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import UserBoxController from './UserBoxController'
import { fetchURL, titles } from './config'


<<<<<<< HEAD

const Join = () => {
  const nav = useNavigate()
  const { user,setUser } = useUserContext()
  const [ usersList, setUsersList ] = useState([])
  const [ form, setForm ] = useState({
    email: '',
    title: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    password: ''
  })
  const { email, title, first_name, last_name, phone_number, password } = form

  const handleForm = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const titles = [
    "Mr",
    "Mrs",
    "Ms",
    "Miss",
    "Mx"
  ]

  useEffect(() => {
    async function fetchUsersList () {
      const res = await fetch('http://localhost:4717/users').catch(e => console.log(e.message)) //user list .. leaks risk?
      const data = await res.json()
      setUsersList(data)
    }
    fetchUsersList()
  }, [])

  const addUserDetail = async ( email, title, first_name, last_name, phone_number, password ) => {
    // const id = usersList.length

    const newUser = {
      email: email,
      title: title,
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone_number,
      password: password // Double check on DB server
    }
    

    // Post new user to API

    const returnedUser = await fetch('http://localhost:4717/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then()
    .catch(e => {
      console.log(e.message)})
    setUser(newUser)
  }

  const submit = async (evt) => {
    console.log(form, "right after submission")
    evt.preventDefault()
    await addUserDetail( 
      form.email, 
      form.title, 
      form.first_name, 
      form.last_name, 
      form.phone_number, 
      form.password )
    console.log(form, "form")
    nav(`../my_account`)
  }


  return (
    <>
      <h2 className='heading' id="login-heading">Create my account</h2>
      <Link to="/login" className='sub-desc'>Already have an account? Login here</Link>
      <input value={form.email} onInput={handleForm} required className="login-input" type="email" name="email" placeholder='Email *'/>
      <select value={form.title} onChange={handleForm} className="login-input" name="title">
        <option value="" disabled hidden>Title</option>
        {titles.map((el,idx) => {
          return <option key={idx} value={el}>{el}</option>
        })}
      </select>
      <input value={form.first_name} onChange={handleForm} required className="login-input" type="text" name="first_name" placeholder='First name *'/>
      <input value={form.last_name} onChange={handleForm} required className="login-input" type="text" name="last_name" placeholder='Last name *'/>
      <input value={form.phone_number} onChange={handleForm} className="login-input" type="tel" name="phone_number" placeholder='Phone number *'/>
      <input value={form.password} onChange={handleForm} required id="password" className="login-input" name="password" type="password" placeholder="Password *" />
      {/* <Link onClick={submit}><h3 className="btn login-btn">Create my account</h3></Link> */}
      <input id="submit-btn" onClick={submit} type="submit" value="Create my account" />
      <span className="agreement">By creating an account,<br/> you agree to our Terms & conditions and Privacy notice on how we manage your personal information.</span>
    </>
  )
}


// const Update = () => {

//   return (
//     <>
//       <h2 className='heading' id="login-heading">Update my detail</h2>
//       <input className="login-input" type="text" name="first_name" placeholder='New first name *'/>
//       <input className="login-input" type="text" name="last_name" placeholder='New last name *'/>
//       <input className="login-input" type="tel" name="contact" placeholder='New contact *'/>
//       <input id="password" className="login-input" type="password" placeholder="Current password *" /> 
//       <Link to="/my_account"><h3 className="btn login-btn">Create my account</h3></Link>
//     </>
//   )
// }




const JoinController = () => {
  
=======
const JoinController = () => {
  const Join = () => {
    const nav = useNavigate()
    const { user,setUser } = useUserContext()
    const [ usersList, setUsersList ] = useState([])
    const [ form, setForm ] = useState({
      email: '',
      title: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      password: ''
    })
    const { email, title, first_name, last_name, phone_number, password } = form

    const handleForm = (e) => {
      const { value, name } = e.target
      setForm({
        ...form,
        [name]: value
      })
    }

    useEffect(() => {
      console.log("Join page renders")
    }, [])

    const addUserDetail = async ( email, title, first_name, last_name, phone_number, password ) => {
      const newUser = {
        email: email,
        title: title,
        firstName: first_name,
        lastName: last_name,
        phoneNumber: phone_number,
        password: password 
      }
      
      try { 
        const returnedUser = await fetch(fetchURL + '/users/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser)
        })
        
        const data = await returnedUser.json()
        .then((res) => {
          console.log("Attempting to register in DB")
          if (res.code == 201) {
            setUser({
              _id: res.user_id,
              firstName: res.firstName,
              tk: res.token
              })
            alert("Thanks for registering!")
            return nav('/my_account')
          }
        })
        .catch((err) => {
          console.log(err)
          setUser(null) 
          alert("Failed to register. Please try again")
        })
      } catch (err) {
          setUser(null)
          console.error(err)
          alert("Failed to register. Please try again")
      }}

    const submit = async (evt) => {
      evt.preventDefault()
      console.log("Checking the form valid")
      if (!form.email || !form.password || !form.first_name || !form.last_name) {
        return alert('Please enter the required fields')
      } else {
        console.log("Creating new user", form)
        await addUserDetail( 
          form.email, 
          form.title, 
          form.first_name, 
          form.last_name, 
          form.phone_number, 
          form.password )
      }
      setUser(null)
      console.error(`${form.email} is in used. Register failed`)
      return alert(`${form.email} is already in use. Please try other email.`)
    }


    return (
      <>
        <h2 className='heading' id="login-heading">Create an account</h2>
        <Link to="/login" className='sub-desc'>Already have an account? Login here</Link>
        <input value={email} onInput={handleForm} required className="login-input" 
          type="email" name="email" placeholder='Email *' 
          pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"/>
        <select defaultValue="DEFAULT" onChange={handleForm} className="login-input" name="title">
          <option value="DEFAULT" disabled hidden>Title</option>
          {titles.map((el,idx) => {
            return <option key={idx} value={el}>{el}</option>
          })}
        </select>
        <input value={first_name} onChange={handleForm} 
          required className="login-input" type="text" 
          name="first_name" placeholder='First name *'/>
        <input value={last_name} onChange={handleForm} 
          required className="login-input" type="text" 
          name="last_name" placeholder='Last name *'/>
        <input value={phone_number} onChange={handleForm} 
          pattern="[0-9]{10}" className="login-input" 
          type="tel" name="phone_number" placeholder='Phone number'/>
        <input value={password} onChange={handleForm} required id="password" 
        className="login-input" name="password" type="password" placeholder="Password *" />
        <input id="submit-btn" onClick={submit} type="submit" value="Create my account" />
        <span className="agreement">By creating an account,<br/> you agree to our Terms & conditions and Privacy notice on how we manage your personal information.</span>
      </>
    )
  }

>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d

  return (
    <UserBoxController 
      children={
        <form id='login-form' className='flex column j-c-center a-i-center' > 
          <Join />
        </form>
      } 
    />
  )
}

export default JoinController