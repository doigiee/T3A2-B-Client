import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import my_detail from '../assets/icons/icon_mydetail.png'
import LoginController from './Login'
import { useUserContext } from './UserContext'



const MyAccount = () => {
  const { user, setUser } = useUserContext()
  const [ bookings, setBookings ] = useState([])
  const nav = useNavigate()
  
  useEffect(() => {
    // const { user } = useUserContext()
    console.log("My account page renders")
    if (user == undefined) {
      nav('/login')}
    async function getBookings() {
      console.log("Start fetching bookings...")
      const res = await fetch(`http://localhost:4717/bookings/${user._id}`)
        .catch((e) => console.log(e.message)) // user id to retrieve bookings
      const data = await res.json()
      // console.log(user._id)
      // console.log(user)
      setBookings(data)
    }
    getBookings()
    
    }
  , [])


const BookingCard = ({ booking, date, pkg, time, price }) => {

  const nthNumber = (str) => {
    let i = Number(str)
    let j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
  }

  const addBookingToUserContext = () => {
    setUser({
      ...user,
      booking: booking
    })
    console.log(booking, user, "Booking to modify added on user")
  }

  const deleteBooking = async () => {
    const confirmation = confirm("Do you wish to delete this booking?")
    const doubleConfirmation = confirm("Are you sure?")
    if ( confirmation && doubleConfirmation ) {
      const bookingToDelete = await fetch(`http://localhost:4717/bookings/${booking._id}`, {
        method: 'DELETE'}).then(() => alert("Booking deleted successfully"))
        .catch(e => {console.log(e.message)
        })
      console.log("Booking successfully deleted")
      setUser({ ... user,
        booking: {}
      })
      async function getBookings() {
        console.log("Start fetching bookings...")
        const res = await fetch(`http://localhost:4717/bookings/${user._id}`)
          .catch((e) => console.log(e.message)) // user id to retrieve bookings
        const data = await res.json()
        // console.log(user._id)
        // console.log(user)
        setBookings(data)
      }
      getBookings()
    } else {
      return true
    }
  }

  return (
    <>
      <div className="booking-card flex a-i-center shadow-btm">
        <div className="booking-date flex column a-i-center">
          <h2>{nthNumber(date.date)}</h2>
          <h2>{date.month}</h2>
        </div> 
        <div className="booking-detail">
          <h3>{pkg}</h3>
          <p className='heading-description'>{time} up to 1 hour</p>
          <div className="modify-booking-box">
            <h3>$ {price}</h3>
            <Link className="" to={`/bookings/update`} onClick={addBookingToUserContext}>Modify</Link>
            <span className="" > | </span>
            <Link className="" to="" onClick={deleteBooking}>Cancel</Link>
          </div>
        </div>
      </div>
    </>
  )
}


const NoBookingsExist = () => {
  return <></>
}


  return (
  <main id="my-account-page">
    <article className="page-header flex column j-c-center a-i-center">
      <div id="my-account" className="main-bg-container"/>
      <div className="heading-container text-shadow">
        <h2 className="heading ">Welcome back, <br/>{ user != undefined ? user.firstName : "Visitor"} </h2>
        <p className="heading-description">
          Please check the below options for more information.
        </p>
      </div>
    </article>
    <section className="context-container flex column a-i-left">
      <div className="flex column">
        <h2 className="heading">My detail</h2>
        <Link id="update-my-detail" to="/my_account/update" className='sub-menu flex'>
          <img src={my_detail} width="25px"/>Update my detail</Link>
      </div>
      <h2 className="heading">My bookings</h2>
        <div id="booking-cards-container" className="cards-container flex column a-i-center j-c-center">
          {bookings.length > 0 ? 
            bookings.map((el, idx) => {
              return (
                <BookingCard 
                  key={idx}
                  booking={el}
                  date={{date: el.date.date, month: el.date.month}}
                  pkg={el.pkg.name}
                  time={el.date.time}
                  price={el.pkg.price}
                />)
            }) : <h5> No booking found </h5>}
        </div>
    </section>
  </main>
  )
}

export default MyAccount