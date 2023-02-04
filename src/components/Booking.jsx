import React, { useEffect, useState } from "react"
import DatePicker from 'react-datepicker'
import { Link, useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css"
import { useUserContext } from "./UserContext";


=======
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"
import "react-datepicker/dist/react-datepicker.css"
import { useUserContext } from "./UserContext"
import { ourPackages, fetchURL } from "./config"



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

  useEffect(() => {
    if (user == undefined) {
      nav('/login')
    }
    console.log("New booking page renders")
    }, [])

  const Calendar = () => {
    const [startDate, setStartDate] = useState(form.date)
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
        showTimeSelect
        required={true}
        minTime={setHours(setMinutes(new Date(), 0), 9)}
        maxTime={setHours(setMinutes(new Date(), 0), 17)}
        filterTime={filterPassedTime}
        dateFormat="yyyy-MM-dd"
        inline
        />
    )
  }
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d

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

<<<<<<< HEAD
const Booking = () => {
  const [ date, setDate ] = useState('')
  const { user } = useUserContext()
  const nav = useNavigate()
  const [ form, setForm ] = useState({
    _id: '',
    date: '',
    pkg: '',
    dog_name: '',
    dog_gender: '',
    dog_age: '',
    dog_breed: ''
  })

  const Calendar = (props) => {
  
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    )
  
    const filterPassedTime = (time) => {
      const currentDate = new Date()
      const selectedDate = new Date(time)
      return currentDate.getTime() < selectedDate.getTime()
    }
    // props.cb(date)
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
  

  // const selectDate = (data) => {
  //   // const result = String(data).split(' ').slice(0, 5)
  //   // let time = result[4]
  //   // if (time) {
  //   //   result[4] = time.slice(0, 5)
  //   // }
  //   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  //   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  //   const thing = new Date(data)
  //   console.log(data)
  //   console.log("year", thing.getFullYear())
  //   console.log("month", months[thing.getMonth()])
  //   console.log("date", thing.getDate())
  //   console.log("day", days[thing.getDay()])
  //   console.log("time", thing.getHours() + ":" + thing.getMinutes())

  //   return data
  // }


  // const { date, pkg, dog_name, dog_gender, dog_age, dog_breed } = form

  const handleForm = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
    console.log( form )
  }

  // useEffect(() => {
  //   async function fetchBookingList ()
  // })

  const addBooking = async ( date, pkg, dog_name, dog_gender, dog_age, dog_breed ) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const data_date = new Date(date)
    const newBooking = {
      user: user._id,
      pkg: pkg,
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
      form.pkg,
      form.dog_name,
      form.dog_gender,
      form.dog_age,
      form.dog_breed
    )
    console.log(form, "right after submission")
    nav(`../my_account`)
=======
  const addBooking = async ( date, pkg_name, pkg_price, dog_name, dog_gender, dog_age, dog_breed ) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const data_date = new Date(date)
    const newBooking = {
      user: user._id,
      pkg: {
        name: pkg_name,
        price: pkg_price},
      date: {
        year: String(data_date.getFullYear()),
        month: String(months[data_date.getMonth()]),
        date: String(data_date.getDate()),
        time: String(data_date.getHours() + ":" + data_date.getMinutes())
      },
      dog: {
        name: dog_name,
        gender: dog_gender,
        breed: dog_breed,
        age: dog_age
      }
    }
    // Post new booking to API
    const returnedBooking = await fetch(fetchURL+'/bookings/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: user.tk
      },
      body: JSON.stringify(newBooking)
    })
    const data = await returnedBooking.json()
    .then((res) => {
      console.log(res)
      if (res) {
        console.log("New booking successfully added")
        return nav(`../my_account`)
      }
    }).catch(e => {
      console.log(e.message)})
  }

  const emptyValueCheck = () => {
    if (!form.date || !form.pkg_name || !form.dog_name || !form.dog_gender) {
      return false
    } else {
      return true
    }
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
  }

  const submit = async (evt) => {
    console.log(form, "before submit")
    if (emptyValueCheck()) {
      evt.preventDefault()
      await addBooking(
        form.date,
        form.pkg_name,
        form.pkg_price,
        form.dog_name,
        form.dog_gender,
        form.dog_age,
        form.dog_breed
      )
    } else {
      alert('Please provide the required information.')
    }
  }
  
  return (
  <main id="page-container">
    <article className="page-header flex column j-c-center a-i-center">
      <div id="my-account" className="main-bg-container"/>
      <div className="heading-container text-shadow">
        <h2 className="heading">Book your<br/>appointment</h2>
        <p className="heading-description">
          Please check the below options for more information. Backup file
        </p>
      </div>
    </article>
    <section id="booking-container" className="context-container flex column a-i-center j-c-center">
      <Calendar id="calendar" cb={handleForm} />
      <div id="booking-input-container" className="cards-container flex column a-i-center j-c-center">
<<<<<<< HEAD
        {/* <input type="text" id="selected-date" name="selectedDate" value={selectDate(date)} readOnly /> */}
        <select onChange={handleForm} value={form.pkg} id="packages-dropbox" className=""required name="pkg">
          <option value="" selected disabled hidden>Selected package *</option>
          <option value="Package 1">Package 1</option>
          <option value="Package 2">Package 2</option>
          <option value="Package 3">Package 3</option>
          <option value="Package 4">Package 4</option>
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
=======
        <select 
          defaultValue="DEFAULT"
          onChange={handleForm} 
          id="packages-dropbox" 
          required 
          name="pkg_name">
            <option value="DEFAULT" disabled >Select a package *</option>
              {ourPackages.map((el, idx) => {
                return <option key={idx} value={el.pkg_name}>{el.pkg_name}</option>
            })}
        </select>
        <input 
          onChange={handleForm} 
          value={form.dog_name} 
          type="text" 
          className="booking-input" 
          name="dog_name" 
          required 
          placeholder={"Dog name *"}/>
        <select 
          defaultValue="DEFAULT_gender"
          onChange={handleForm} 
          id="packages-dropbox" 
          required 
          name="dog_gender">
            <option value="DEFAULT_gender" disabled>Dog gender *</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <input 
          onChange={handleForm} 
          value={form.dog_age} 
          type="number" 
          className="booking-input" 
          name="dog_age" 
          placeholder={"Dog age"}/>
        <input 
          onChange={handleForm} 
          value={form.dog_breed} 
          type="text" 
          className="booking-input" 
          name="dog_breed" 
          placeholder={"Dog breed"}/>
        <Link onClick={submit} ><h3 className="btn login-btn">Save</h3></Link>
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
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