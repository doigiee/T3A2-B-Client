import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import my_detail from '../assets/icons/icon_mydetail.png'
import { fetchURL } from './config'
import { useUserContext } from './UserContext'



const MyAccount = () => {
  const { user, setUser } = useUserContext()
  const [ bookings, setBookings ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const nav = useNavigate()
  
  useEffect(() => {
    setLoading(true)
    console.log("My account page renders")
    console.log(user)
    try {
      if (user == undefined) {
        nav('/login')}
      async function getBookings() {
        console.log("Start fetching bookings...")
        const bookings = await fetch(`${fetchURL}/bookings/my_bookings/`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: user.tk
          },
          body: {
            _id: user._id
          }
        })
        const data = await bookings.json()
        .then((res) => {
          console.log("Bookings res" , res)
          setBookings(res)
          setLoading(false)
      })}
      getBookings()
    } catch (err) {
      console.log(err.message)
      nav('/404')
    }
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
      const bookingToDelete = await fetch(`${fetchURL}/bookings/${booking._id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: user.tk
        }})
      const data = await bookingToDelete.json()
        .then((res) => {
          alert(res.msg)})
        .catch(e => {console.log(e.message)
        })

      async function getBookings() {
        console.log("Start fetching bookings...")
        const bookings = await fetch(`${fetchURL}/bookings/my_bookings/`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: user.tk
          },
          body: JSON.stringify({
            _id: user._id
          })
        })
        const data = await bookings.json()
        .then((res) => setBookings(res))
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

const BookingCardContainer = () => {
  if (loading) {
    return <><br/><h3>Loading...</h3></>
  }
  return (
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
  )
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
        <BookingCardContainer/>
    </section>
  </main>
  )
}

export default MyAccount