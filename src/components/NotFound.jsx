import React from 'react'
import dog from '../assets/dog_login.png'


const NotFound = () => {

  return (
    <section id="login-bg" className='flex j-c-center a-i-center'>
      <div id="login-container" className='page-not-found flex column a-i-center shadow-btm'>
        <img id='login-dog' src={dog} />
        <h1 className=''>404</h1>
        <h2 className='heading'>Woof! woof!</h2>
        <p className='text-center'>We can't seem to find<br/>the page you're looking for.</p>
        
      </div>
    </section>
  )
}

export default NotFound