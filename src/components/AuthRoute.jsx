import React from 'react'
import { Route, Navigate, Outlet } from "react-router-dom"

const AuthRoute = ({ authenticated }) => {
  if ( authenticated !== null ) {
    return <Navigate replace to="/my_account" />
  }
  return <Navigate replace to="/login" />
}

export default AuthRoute


// const AuthLayout = () => {
//   if (user !== null) {
//     return authenticated ? <Outlet /> : null; // or loading indicator, etc...
//   }
//   return <Navigate to={"/login"} replace />;
// };

// export default AuthLayout