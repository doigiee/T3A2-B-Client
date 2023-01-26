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
    <>
    <div id="create-booking" className="main-bg-container"/>
    <div className="heading-container">
      <h2 className="heading">Book your<br/>appointment</h2>
    </div>
    <section className="context-container flex column a-i-center">
      <Calendar id="calendar" cb={setDate}/>
      <div className="cards-container flex column a-i-center j-c-center">
        <input type="text" id="selected-date" 
              name="selectedDate" value={selectedDate(date)} 
              placeholder="Date and time you selected" readonly />
        <select id="packages-dropbox" name="packages">
          <option value="pkg1">Package 1</option>
          <option value="pkg2">Package 2</option>
          <option value="pkg3">Package 3</option>
          <option value="pkg4">Package 4</option>
        </select>

        <Link to="/my_account" className="btn shadow-btm login-btn">Save</Link>

      </div>
    </section>
  </>
  ) 
} 

export default Booking