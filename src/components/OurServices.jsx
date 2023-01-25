import React from 'react'
import wave from '../assets/wave_white.svg'
import { Link } from 'react-router-dom'

const OurServices = () => {
    
  const Card = (props) => {
    return (
      <div className="services flex column a-i-center">
        <img src={props.src} width='170px'/>
        <h3>{props.title}</h3>
        <p className="heading-description text-center">{props.desc}</p>
      </div>
    )
  }

  return (
    <>
    <div id="our-services" className="main-bg-container"/>
    <div className="heading-container">
      <h2 className="heading">Our services </h2>
      <p className="heading-description">
      Let us pamper your furry friend at our professional dog grooming service! 
      </p>
      <Link className="btn shadow-btm">Send inquiry</Link>
    </div>
    <img id="wave" src={wave}/>
    <section className="context-container flex column a-i-left">
      <h2 className="heading">Grooming package</h2>
        <p className="heading-description">
          We're a group of dog enthusiastic that our skills to look after many kinds of dogs!
        </p>
        <div className="cards-container">
          {/* <Card src={daycare} title={'Daycare'} 
              desc='Simply your dog can wait in our playground! 
              Meet friends and play games. After any service, 
              your dog can wait in the playground until you come back!'/>
          <Card src={grooming} title={'Grooming'} 
              desc='Simply your dog can wait in our playground! 
              Meet friends and play games. After any service, 
              your dog can wait in the playground until you come back!'/>
          <Card src={bath} title={'Bath'} 
              desc='Simply your dog can wait in our playground! 
              Meet friends and play games. After any service, 
              your dog can wait in the playground until you come back!'/>
          <Card src={checkup} title={'Check up'} 
              desc='Simply your dog can wait in our playground! 
              Meet friends and play games. After any service, 
              your dog can wait in the playground until you come back!'/> */}
        </div>
        
    </section>
  </>
  )
}

export default OurServices