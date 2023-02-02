import React, { useEffect, useState } from 'react'
import { useUserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'
import { fetchURL, titles } from './config'
import UserBoxController from './UserBoxController'


const Update = () => {
  const nav = useNavigate()
  const { user,setUser } = useUserContext()
  const [ userDetail, setUserDetail ] = useState([])
  const [ form, setForm ] = useState({
    title: user.title || '',
    first_name: user.firstName,
    last_name: user.lastName,
    phone_number: user.phoneNumber || ''
  })
  const { first_name, last_name, phone_number } = form

  const handleForm = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  
  useEffect(() => {
    console.log("Update my detail page renders")
    if (user == undefined) {
      nav('/login')}

    async function fetchUserDetail () {
      const res = await fetch(`${fetchURL}/users/${user._id}`)
      .catch(e => console.log(e.message))
      const data = await res.json()
      setUserDetail(data)
    }
    fetchUserDetail()
  }, [])

  const updateUserDetail = async ( title, first_name, last_name, phone_number ) => {
    // const id = usersList.length

    const updatedDetail = {
      title: title,
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone_number,
    }
    
    // Post new user to API

    const returnedUser = await fetch(`${fetchURL}/users/${user._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedDetail)
    })
    const data = await returnedUser.json()
    console.log(data)
    setUser(data)
  }



  const submit = async (evt) => {
    console.log("Checking the form valid")
    if ( !form.first_name || !form.last_name ) {
      return alert('Please enter the required fields')
    } else {
      console.log("Updating user detail", form)
      evt.preventDefault()
      await updateUserDetail( 
        form.title, 
        form.first_name, 
        form.last_name, 
        form.phone_number
      )
      nav(`../my_account`)
    }
  }

  return (
    <>
      <h2 className='heading' id="login-heading">Update my detail</h2>
      <select defaultValue={user.title ? user.title : "DEFAULT"} onChange={handleForm} className="login-input" name="title">
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
      <input id="submit-btn" onClick={submit} type="submit" value="Save" />
    </>
  )
}



const UpdateMyDetail = () => {

  return (
    <UserBoxController 
      children={
        <form id='login-form' className='flex column j-c-center a-i-center' > 
          <Update />
        </form>
      } 
    />
  )
}

export default UpdateMyDetail