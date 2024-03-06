import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function GuestLayout() {
  const {token} = useStateContext();
  debugger;
  if(token){
    return <Navigate to="/users" />
  }
  return (
    <div>
      <div>
        {/* For Guest Layout */}
        < Outlet/>
      </div>
       
    </div>
  )
}

