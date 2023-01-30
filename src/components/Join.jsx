import React, { useEffect, useState } from 'react'
import { UserContextProvider, useUserContext } from './UserContext'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import dog from '../assets/dog_login.png'



const Join = () => {
  const nav = useNavigate()
  const { setUser } = useUserContext();
  const [ usersList, setUsersList ] = useState([])
  const [ form, setForm ] = useState({
    email: undefined,
    title: undefined,
    first_name: undefined,
    last_name: undefined,
    phone_number: undefined,
    password: undefined
  })

  const handleForm = (e) => {
    setForm(e.target.value)
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
      // const res = await fetch('http://url').catch(e => console.log(e.message)) //user list .. leaks risk?
      // const data = await res.json()
      // setUsersList(data)
    }
    fetchUsersList()
  }, [])

  const addUserDetail = async ( email, title, first_name, last_name, phone_number, password ) => {
    const id = usersList.length

    const newUser = {
      email: email,
      title: title,
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone_number,
      password: password // Double check on DB server
    }
    await setUser(newUser)

    // Post new user to API
    const returnedUser = await fetch('http://url', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(() => nav(`../my_account`))
    .catch(e => console.log(e.message + " Returned4 user"))
    // }).catch(e => nav(`../my_account`))
      // }).catch(e => setUser(newUser))
      // const data = await returnedUser.json()
      // setUser(newUser)
    
  }

  const submit = async (evt) => {
    evt.preventDefault()
    await addUserDetail( 
      form.email, 
      form.title, 
      form.first_name, 
      form.last_name, 
      form.phone_number, 
      form.password ).then(setUser(form))
     nav(`../my_account`)
  }


  return (
    <>
      <h2 className='heading' id="login-heading">Create my account</h2>
      <Link to="/login" className='sub-desc'>Already have an account? Login here</Link>
      <input value={form.email} onChange={handleForm} className="login-input" type="email" name="email" placeholder='Email *'/>
      <select value={form.title} onChange={handleForm} className="login-input" name="title">
        <option value="" disabled hidden>Title</option>
        {titles.map((el,idx) => {
          return <option key={idx} value={el}>{el}</option>
        })}
      </select>
      <input value={form.first_name} onChange={handleForm} className="login-input" type="text" name="first_name" placeholder='First name *'/>
      <input value={form.last_name} onChange={handleForm} className="login-input" type="text" name="last_name" placeholder='Last name *'/>
      <input value={form.phone_number} onChange={handleForm} className="login-input" type="tel" name="phone_number" placeholder='Phone number *'/>
      <input value={form.password} onChange={handleForm} id="password" className="login-input" type="password" placeholder="Password *" />
      <Link onClick={submit}><h3 className="btn login-btn">Create my account</h3></Link>
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