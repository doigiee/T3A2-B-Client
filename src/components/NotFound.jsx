import React from 'react'
import UserBoxController from './UserBoxController'


const NotFound = () => {

  return (
    <UserBoxController 
      children={
        <>
          <h1 className=''>404</h1>
          <h2 className='heading'>Woof! woof!</h2>
          <p className='text-center'>We can't seem to find<br/>the page you're looking for.</p>
        </>
      } 
    />
  )
}

export default NotFound