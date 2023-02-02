import React from 'react'
import map from '../assets/about_us_map.jpeg'
import { aboutUs } from './config.js' 


const AboutUs = () => {

  const Card = (props) => {
    return (
      <div className="services flex column a-i-center">
        <img src={props.src} width='170px'/>
        <h3>{props.title}</h3>
        <p className="heading-description">{props.desc}</p>
      </div>
    )
  }

  return (
  <main id="page-container">
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
          {aboutUs.map((el, idx) => {
            return <Card key={idx} src={el.src} title={el.title} desc={el.desc}/>
          })}
        </div>
        <img id="map" src={map} />
    </section>
  </main>
  )
}

export default AboutUs
