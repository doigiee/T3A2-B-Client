import React from 'react'
import wave from '../assets/wave_white.svg'
import daycare from '../assets/icons/icon_daycare.png'
import grooming from '../assets/icons/icon_grooming.png'
import bath from '../assets/icons/icon_bath.png'
import checkup from '../assets/icons/icon_checkup.png'
import map from '../assets/about_us_map.jpeg'


const AboutUs = () => {

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
    <article className="page-header flex column j-c-center a-i-center">
      <div id="about-us-bg" className="main-bg-container"/>
      <div className="heading-container flex column">
        <h2 className="heading text-shadow">About us,<br/>PAWFUL</h2>
        <p className="heading-description text-shadow">
          We're a group of dog enthusiastic that <br/>
          our skills to look after many kinds of dogs!
        </p>
      </div>
    </article>
    <section className="context-container flex column a-i-left">
      <h2 className="heading">Daycare and grooming,<br/>All in one service <p className="heading-description">
          We're a group of dog enthusiastic that our skills to look after many kinds of dogs!
        </p></h2>
        
        <div className="cards-container flex a-i-center column ">
          <Card src={daycare} title={'Daycare'} 
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
              your dog can wait in the playground until you come back!'/>
        </div>
        <img id="map" src={map} />
    </section>
  </>
  )
}

export default AboutUs