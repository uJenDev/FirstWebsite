import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {

  // Width of window and breakpoint (for responsive design)
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 800;

  // Set width on window resize
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <>
      <NavBar 
        width={width}
        breakpoint={breakpoint}
      />
      <Outlet />
    </>
  )
}

export default Layout