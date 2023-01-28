import React, { useState } from "react"
import DatePicker from "react-datepicker"
import { Link } from 'react-router-dom'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css"


const Calendar = (props) => {
  
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
        props.cb(date)}}
      showTimeSelect
      minTime={setHours(setMinutes(new Date(), 0), 9)}
      maxTime={setHours(setMinutes(new Date(), 0), 17)}
      filterTime={filterPassedTime}
      dateFormat="yyyy-MM-dd"
      inline
      placeholderText="Click to select a date"
      />
  )
}



const Booking = () => {
  const [ date, setDate ] = useState('')

  const selectedDate = (data) => {
    const result = String(data).split(' ').slice(0, 5)
    return result
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
    <section className="context-container flex column a-i-center j-c-center">
      <Calendar id="calendar" cb={setDate}/>
      <div id="date-picker" className="cards-container flex column a-i-center j-c-center">
        <input type="text" id="selected-date" name="selectedDate" value={selectedDate(date)} 
              placeholder="Date and time you selected" readonly />
        <select id="packages-dropbox" name="packages">
          <option value="pkg1">Package 1</option>
          <option value="pkg2">Package 2</option>
          <option value="pkg3">Package 3</option>
          <option value="pkg4">Package 4</option>
        </select>
        <Link to="/my_account"><h3 className="btn login-btn">Save</h3></Link>
      </div>
      <p className="agreement">
      By creating an account, <br/>
      you agree to our Terms & conditions and Privacy notice on how we manage your personal information.
      </p>
    </section>
  </main>
  ) 
} 

export default Booking