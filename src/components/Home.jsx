import React from 'react'
import { Link } from 'react-router-dom'
import wave from '../assets/wave_green.svg'

const Home = () => {
  return (
  <>
    <div className="heading-container">
      <h2 className="heading">Welcome to PAWFUL</h2>
      <span></span>
      <p className="heading-description">
        Let us pamper your furry friend 
        at our professional dog grooming service!
      </p>
      <div className="button-container">
        <Link className="btn">Make a booking</Link>
        <Link className="btn">Send inquiry</Link>
      </div>
    </div>
    <img id="wave" src={wave}></img>
    <section className="context-container">
    </section>


    
  </>
  )
}

export default Home