import React from 'react'
import dog from '../assets/dog_login.png'


const UserBoxController = (props) => {
  return (
    <section id="login-bg" className='flex j-c-center a-i-center'>
      <div id="login-container" className='flex column a-i-center shadow-btm'>
        <img id='login-dog' src={dog} />
        {props.children}
      </div>
    </section>
  )
}

export default UserBoxController