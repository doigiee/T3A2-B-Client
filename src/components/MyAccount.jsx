import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import my_detail from '../assets/icons/icon_mydetail.png'
import LoginController from './Login'
import { useUserContext } from './UserContext'


const BookingCard = ({ bookingId, date, pkg, time, price }) => {

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
            <Link className="" to={`/bookings`} state={bookingId}>Modify</Link>
            <span className="" > | </span>
            <Link className="" to="">Cancel</Link>
          </div>
        </div>
      </div>
    </>
  )
}


const NoBookingsExist = () => {
  return <></>
}

const MyAccount = () => {
  const [ bookings, setBookings ] = useState([])
  const nav = useNavigate()
  const { user } = useUserContext()
  console.log(user, " at My account page")

  
  useEffect(() => {
    if (user == undefined) {
      nav('/login')
    async function getBookings() {
      console.log("Start fetching bookings...")
      const res = await fetch(`http://localhost:4717/bookings/${user._id}`)
        .catch((e) => console.log(e.message)) // user id to retrieve bookings
      const data = await res.json()
      await setBookings(data)
    }
    getBookings().catch((e) => console.log(e.message))
    
    }
  }, [])


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
        <Link id="update-my-detail" to="/join" className='sub-menu flex'>
          <img src={my_detail} width="25px"/>Update my detail</Link>
      </div>
      <h2 className="heading">My bookings</h2>
        <div className="cards-container flex column a-i-center j-c-center">
          {bookings.length !== 0 ? 
            bookings.map((el, idx) => {
              return (
                <BookingCard 
                  key={idx}
                  bookingId={el._id}
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