import React from 'react'
import { Link, useParams } from 'react-router-dom'
import my_detail from '../assets/icons/icon_mydetail.png'


const bookings = [
  {
    date: '2023-01-27', 
    time: '11:00-12:00',
    pkg: 'Package 1',
    price: 110
  },
  {
    date: '2023-01-11', 
    time: '09:00-10:00',
    pkg: 'Package 2',
    price: 95
  },
  {
    date: '2023-01-07', 
    time: '14:00-15:00',
    pkg: 'Package 3',
    price: 115
  },
  {
    date: '2023-01-05', 
    time: '11:00-12:00',
    pkg: 'Package 1',
    price: 110
  },
]

const BookingCard = (props) => {

  return (
    <>
      <div className="booking-card flex a-i-center shadow-btm">
        <div className="booking-date flex column a-i-center">
          <h2>{props.date.date}</h2>
          <h2>{props.date.month}</h2>
        </div> 
        <div className="booking-detail">
          <h3>{props.pkg}</h3>
          <p className='heading-description'>{props.time}</p>
          <div className="modify-booking-box">
            <h3>$ {props.price}</h3>
            <Link className="" to="/bookings">Modify</Link>
            <span className="" > | </span>
            <Link className="" to="">Cancel</Link>
          </div>
        </div>
      </div>
    </>
  )
   
}


const MyAccount = ({ user }) => {
  const { email, password, name } = user || {}


  const { id } = useParams()





  return (
  <main id="my-account-page">
    <article className="page-header flex column j-c-center a-i-center">
      <div id="my-account" className="main-bg-container"/>
      <div className="heading-container text-shadow">
        <h2 className="heading ">My account </h2>
        <p className="heading-description">
          Please check the below options for more information.
        </p>
      </div>
    </article>
    <section className="context-container flex column a-i-left">
      <div className="flex column">
        <h2 className="heading">My detail</h2>
        <Link to="/join" className='sub-menu flex'>
          <img src={my_detail} width="25px"/>Update my detail</Link>
      </div>
      <h2 className="heading">My bookings</h2>
        <div className="cards-container flex column a-i-center j-c-center">
          <BookingCard date={{date:"27th", month:"Jan"}} pkg="Package 1" time="11:00AM - 12:00PM" price="110"/>
          <BookingCard date={{date:"27th", month:"Jan"}} pkg="Package 1" time="11:00AM - 12:00PM" price="110"/>
          <BookingCard date={{date:"27th", month:"Jan"}} pkg="Package 1" time="11:00AM - 12:00PM" price="110"/>
        </div>
    </section>
  </main>
  )
}

export default MyAccount