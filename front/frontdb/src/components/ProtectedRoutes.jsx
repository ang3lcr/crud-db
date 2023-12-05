import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const tokenExists = () => {
    const token = localStorage.getItem("token");
    return token !== "";
  }

  if(tokenExists()){
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoutes