<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import my_detail from '../assets/icons/icon_mydetail.png'
import LoginController from './Login'
import { useUserContext } from './UserContext'


const BookingCard = (props) => {
=======
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
    }).catch((err) => {
      console.log("Error fetching bookings", err.error)
      setLoading(true)
    })
    const data = await bookings.json()
    .then((res) => {
      console.log("Bookings result" , res)
      setBookings(res)
      setLoading(false)
    }).catch((err) => {
      setLoading(true)
    })
  }




  useEffect(() => {
    setLoading(true)
    console.log("My account page renders")
    console.log(user)
    try {
      if (user == undefined) {
        nav('/login')}
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
      getBookings()
    } else {
      return true
    }
  }
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d

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
<<<<<<< HEAD
            <h3>$ {props.price}</h3>
            <Link className="" to="/bookings">Modify</Link>
            <span className="" >  |  </span>
            <Link className="" to="">Cancel</Link>
=======
            <h3>$ {price}</h3>
            <Link className="" to={`/bookings/update`} onClick={addBookingToUserContext}>Modify</Link>
            <span className="" > | </span>
            <Link className="" to="" onClick={deleteBooking}>Cancel</Link>
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
          </div>
        </div>
      </div>
    </>
  )
}

<<<<<<< HEAD

const NoBookingsExist = () => {
  return <></>
}

const MyAccount = () => {
  // const location = useLocation()
  // if (location.state == null) {
  //   return <LoginController />
  // } 
  const [ bookings, setBookings ] = useState([])
  const nav = useNavigate()
  const { user } = useUserContext()
  console.log(user, " at My account page")
  // if ( user == undefined ) {
  //   return <LoginController />
  // } 


  // console.log(location.state.email, "After login")
  // console.log(location.state.password, "After login")
  // console.log(location.state.first_name, "After login")

  // const bookings = [
  //   {
  //     id: 123,
  //     date: {
  //       day: 27,
  //       month: "Jan"
  //     }, 
  //     time: '11:00-12:00',
  //     pkg: 'Package 1',
  //     price: 110
  //   }
  // ]
  
  

  useEffect(() => {
    async function getBookings() {
      console.log("Start fetching bookings...")
      const res = await fetch(`http://localhost:4717/bookings/${user._id}`) // user id to retrieve bookings
      const data = await res.json()
      setBookings(data)
      console.log(data)
      console.log(bookings)
    }
    getBookings().catch((e) => console.log(e.message))
    if (user == undefined) {
      nav('/login')
    }
  }, [])
  
=======
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
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d


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
<<<<<<< HEAD
        <div className="cards-container flex column a-i-center j-c-center">
          {bookings !== undefined ? 
            bookings.map((el, idx) => {
              return <BookingCard 
              key={idx}
              date={{date: el.date[0].date + "th" ,month: el.date[0].month}}
              pkg={el.pkg}
              time={el.date[0].time}
              price={el.price}/>
            }) : <h5> No booking found </h5>}
          {/* <BookingCard date={{date:"27th", month:"Jan"}} pkg="Package 1" time="11:00AM - 12:00PM" price="110"/>
          <BookingCard date={{date:"27th", month:"Jan"}} pkg="Package 1" time="11:00AM - 12:00PM" price="110"/>
          <BookingCard date={{date:"27th", month:"Jan"}} pkg="Package 1" time="11:00AM - 12:00PM" price="110"/> */}
        </div>
=======
        <BookingCardContainer/>
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
    </section>
  </main>
  )
}

export default MyAccount