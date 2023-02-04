import React, {useContext, createContext, useState} from 'react'

const UserContext = createContext(null)

export function UserContextProvider({children}) {
  const [ user, setUser ] = useState(undefined)
<<<<<<< HEAD
  // const [ isLoggedIn, setIsLoggedIn ] = useState(false)
=======
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d

  return (
    <UserContext.Provider
      children={children}
      value={{
        user,
        setUser,
<<<<<<< HEAD
        // isLoggedIn,
        // setIsLoggedIn,
=======
>>>>>>> fb2896808fffb5749fb2cae8f610224e6592dc6d
      }}
    />
  )
}

export function useUserContext() {
  const userContext = useContext(UserContext)
  if ( !userContext ) {
    throw new Error('UserContext.Provider is not found')
  }
  return userContext;
}