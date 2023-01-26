import React from 'react'
import wave from '../assets/wave_white.svg'
import { Link } from 'react-router-dom'



const MyAccount = () => {
  return (
  <>
    <div id="our-services" className="main-bg-container"/>
    <div className="heading-container">
      <h2 className="heading">Our services </h2>
      <p className="heading-description">
      Let us pamper your furry friend at our professional dog grooming service! 
      </p>
      <Link to="/send_inquiry" className="btn shadow-btm">Send inquiry</Link>
    </div>
    <img id="wave" src={wave}/>
    <section className="context-container flex column a-i-left">
      <h2 className="heading">Grooming package</h2>
        <p className="heading-description">
          We're a group of dog enthusiastic that our skills to look after many kinds of dogs!
        </p>
        <div className="cards-container flex column a-i-center j-c-center">
          {/* <Card title="Package 1" 
                desc="Let us pamper your furry friend at our professional" 
                price="110"/>
          <Card title="Package 2" 
                desc="Let us pamper your furry friend at our professional" 
                price="115"/>
          <Card title="package 3" 
                desc="Let us pamper your furry friend at our professional" 
                price="130"/>
          <Card title="package 4" 
                desc="Let us pamper your furry friend at our professional" 
                price="100"/> */}
        </div>
        
    </section>
  </>
  )
}

export default MyAccount