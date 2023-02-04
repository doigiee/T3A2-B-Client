import React, {useState} from 'react'
import { fetchURL } from './config'

const MockingTest = () => {
    const [user, setUser] = useState({});

    const mockUser = {
      email: "starfish@outlook.com",
      password: "123456"
    }


    const handleClick3 = () => {
        fetch(`${fetchURL}/users/login`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(mockUser)
        })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          console.log(json)
          setUser(json);
        })
        .catch((error) => {
          console.log(`Something Wrong: ${error}`);
        })
    }

    return (
        <div>
            <button onClick={handleClick3}> Bring User Data </button>
            <ul>
              { user ? <p>{user._id}</p> : <h2>No user</h2>}
            </ul>
        </div>
    )
}

export default MockingTest;