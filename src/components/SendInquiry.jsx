import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';



const SendInquiry = () => {

  const form = useRef()
  const [ isValidEmail, setValidEmail ] = useState(true)
  const [ isValidPhone, setValidPhone ] = useState(true)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_ipqihi2', 'template_dp7mndu', form.current, 'x5ldj7hCbXs9GZBHH')
      .then((result) => {
          alert("Thanks for sending inquiries. We'll contact you very soon.")
          console.log(result)
      }, (error) => {
          alert("I'm sorry. Failed to send email. Please try again later")
          console.log(error.message)
      })
  }

  const isEmail = (e) => {
    const patternEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const test = patternEmail.test(e.target.value)
    if (!test) setValidEmail(false)
  }

  const isPhoneNumber = (n) => {
    const patternPhoneNumber = /\d{10}/
    const test = patternPhoneNumber.test(n.target.value)
    if (!test || n.target.value.length !== 10 ) setValidPhone(false)
  }

  const toModifyEmail = () => setValidEmail(true)
  const toModifyPhone = () => setValidPhone(true)



  return (
    <main id="page-container">
      <article className="page-header flex column j-c-center a-i-center">
        <div id="send-inquiry" className="main-bg-container"/>
        <div className="heading-container text-shadow">
          <h2 className="heading">Send inquiry</h2>
          <p className="heading-description">
            If you have any other inquiry, <br />
            please don't hesitate to send us an email through the below form.
          </p>
      </div>
      </article>
      <section className="context-container flex column a-i-left">
        <form className="send-inquiry-form flex column a-i-center" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" required placeholder="Name *"/>
          <input type="email" name="user_email" id={isValidEmail ? "" : "invalid-warning" } 
                onBlur={isEmail} onFocus={toModifyEmail} required placeholder="Email *"/>
          <input type="tel" name="user_phone" placeholder="Phone *" pattern="[0-9]{10}" onBlur={isPhoneNumber} 
                id={isValidPhone ? "" : "invalid-warning"}  onFocus={toModifyPhone} required maxLength="10"/>
          <textarea name="message" id="inquiry-message" placeholder="Message" cols="" rows="10"/>
          <input id="submit-btn" type="submit" value="Submit" />
        </form>
      </section>
    </main>
  )
}

export default SendInquiry