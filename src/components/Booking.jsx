import React, { useEffect, useState } from "react"
import DatePicker from 'react-datepicker'
import { Link, useNavigate } from 'react-router-dom'
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"
import "react-datepicker/dist/react-datepicker.css"
import { useUserContext } from "./UserContext"
import ourPackages from "./servicePackageList"



const Booking = () => {
  const { user } = useUserContext()
  const nav = useNavigate()
  const [ form, setForm ] = useState({
    _id: '',
    date: '',
    pkg_name: '',
    pkg_price: '',
    dog_name: '',
    dog_gender: '',
    dog_age: '',
    dog_breed: ''
  })

  const Calendar = () => {
  
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    )
  
    const filterPassedTime = (time) => {
      const currentDate = new Date()
      const selectedDate = new Date(time)
      return currentDate.getTime() < selectedDate.getTime()
    }
    return (
      <DatePicker 
        selected={startDate}
        onChange={(date) => {
          setStartDate(date)
          form.date = date
          }}
        name="date"
        value={form.date}
        showTimeSelect
        required={true}
        minTime={setHours(setMinutes(new Date(), 0), 9)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        filterTime={filterPassedTime}
        dateFormat="yyyy-MM-dd"
        inline
        placeholderText="Click to select a date"
        />
    )
  }

  const matchPrice = (name) => {
    for (const i of ourPackages) {
      if (name == i.pkg_name) {
        return i.pkg_price
      }
    }
  }

  const handleForm = (e) => {
    const { value, name } = e.target
    if ( name === "pkg_name") {
      form.pkg_price = matchPrice(value)
    }
    setForm({
      ...form,
      [name]: value
    })
    console.log( form )
  }

  const addBooking = async ( date, pkg_name, pkg_price, dog_name, dog_gender, dog_age, dog_breed ) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const data_date = new Date(date)
    const newBooking = {
      user: user._id,
      pkg: {
        name: pkg_name,
        price: pkg_price},
      date: {
        year: data_date.getFullYear(),
        month: months[data_date.getMonth()],
        date: data_date.getDate(),
        time: data_date.getHours() + ":" + data_date.getMinutes()
      },
      dog: {
        name: dog_name,
        gender: dog_gender,
        breed: dog_breed,
        age: dog_age
      }
    }
    // Post new booking to API
    const returnedBooking = await fetch('http://localhost:4717/bookings', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBooking)
    }).then(() => console.log("New booking successfully added"))
    .catch(e => {
      console.log(e.message)})
  }


  const submit = async (evt) => {
    console.log(form, "right before submission")
    evt.preventDefault()
    console.log(user)
    await addBooking(
      form.date,
      form.pkg_name,
      form.pkg_price,
      form.dog_name,
      form.dog_gender,
      form.dog_age,
      form.dog_breed
    )
    console.log(form, "right after submission")
    nav(`../my_account`)
  }
  

  return (
  <main id="page-container">
    <article className="page-header flex column j-c-center a-i-center">
      <div id="my-account" className="main-bg-container"/>
      <div className="heading-container text-shadow">
        <h2 className="heading">Book your<br/>appointment</h2>
        <p className="heading-description">
          Please check the below options for more information.
        </p>
      </div>
    </article>
    <section id="booking-container" className="context-container flex column a-i-center j-c-center">
      <Calendar id="calendar" cb={handleForm} />
      <div id="booking-input-container" className="cards-container flex column a-i-center j-c-center">
        {/* <input type="text" id="selected-date" name="selectedDate" value={selectDate(date)} readOnly /> */}
        <select onChange={handleForm} value={form.pkg} id="packages-dropbox" className=""required name="pkg_name">
          <option value="" selected disabled hidden>Select a package *</option>
          {ourPackages.map((el, idx) => {
            return <option key={idx} value={el.pkg_name}>{el.pkg_name}</option>
          })}
        </select>
        <input onChange={handleForm} value={form.dog_name} type="text" className="booking-input" name="dog_name" required placeholder="Dog name *"/>
        <select onChange={handleForm} value={form.dog_gender} id="packages-dropbox" required name="dog_gender">
          <option value="" selected disabled hidden>Dog gender *</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input onChange={handleForm} value={form.dog_age} type="number" className="booking-input" name="dog_age" placeholder="Dog age"/>
        <input onChange={handleForm} value={form.dog_breed} type="text" className="booking-input" name="dog_breed" placeholder="Dog breed"/>
        <Link  onClick={submit} ><h3 className="btn login-btn">Save</h3></Link>
      </div>
      <p id="booking-agreement" className="agreement">
      By creating an account, <br/>
      you agree to our Terms & conditions and Privacy notice on how we manage your personal information.
      </p>
    </section>
  </main>
  ) 
} 

export default Booking