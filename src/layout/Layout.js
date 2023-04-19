import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <header>
        <h1>uJenDev</h1>
        <Outlet />
    </header>
  )
}

export default Layout