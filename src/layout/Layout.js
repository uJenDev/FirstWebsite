import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <div className='px-10'>
      <Outlet />
    </div>
  )
}

export default Layout