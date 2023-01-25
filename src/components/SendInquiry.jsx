import React from 'react'
import wave from '../assets/wave_white.svg'
import { Link } from 'react-router-dom'

const SendInquiry = () => {

  const isEmail = (e) => {
    const emailRegex = 
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    const test = emailRegex.test(e)
    if (!test) {
      return alert(`Invalid email`)
    }
  }

  const isPhoneNumber = (n) => {

  }






  return (
  <>
    <div id="send-inquiry" className="main-bg-container"/>
    <img id="wave" src={wave}/>
    <section className="context-container flex column a-i-left">
      <h2 className="heading">Send inquiry</h2>
      <p className="heading-description">
        If you have any other inquiry, please don't hesitate to send us an email through the below form.
      </p>
      <form className="send-inquiry-form flex column a-i-center">
        <input type="email" name="email" 
              placeholder="Email" onMouseLeave={isEmail}></input>
        <input type="text" name="first-name" 
              placeholder="First name"></input>
        <input type="text" name="last-name" 
              placeholder="Last name"></input>
        <input type="tel" name="phone" 
              placeholder="Phone" pattern="[0-9]{10}" 
              maxlength="10" onChange={isPhoneNumber}></input>
        <textarea name="message" id="inquiry-message" 
              placeholder="Message" cols="" rows="10"></textarea>
        <Link className="btn shadow-btm">Send</Link>
      </form>
    </section>
  </>
  )
}

export default SendInquiry