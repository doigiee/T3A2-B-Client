import React from 'react'
import { Link } from 'react-router-dom'
import wave from '../assets/wave_green.svg'
import urbanlist from '../assets/logos/Urban-List_Logo.png'
import weekend from '../assets/logos/Weekend-Edition_Logo.png'
import mustdo from '../assets/logos/Must-Do-Brisbane_Logo.png'



const Home = () => {

  const Card = (props) => {
    return (
    <>
      <div className="seenby-cards shadow-btm flex-col-cntr">
        <img src={props.src} width='170px'></img>
        <span>{props.desc}</span>
      </div>
    </>
    )
  }

  return (
  <>
    <article id="home">
      <div className="home-heading-container white">
        <h2 className="heading">Welcome to PAWFUL</h2>
        <p className="heading-description">
          Let us pamper your furry friend 
          at our professional dog grooming service!
        </p>
        <div className="btns-container">
          <Link className="btn shadow-btm">Make a booking</Link>
          <Link className="btn shadow-btm">Send inquiry</Link>
        </div>
      </div>
    </article>
    <img id="wave" src={wave}/>
    <section className="context-container flex-col-cntr white bg-green">
      <span>- Seen By -</span>
      <div className="cards-container">
        <Card src={urbanlist} desc='Number one!'/>
        <Card src={mustdo} desc='Number one!'/>
        <Card src={weekend} desc='Number one!'/>
      </div>
    </section>
  </>
  )
}

export default Home