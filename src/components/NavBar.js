import React, { useEffect, useState } from 'react'

const NavBar = ({ width, breakpoint }) => {

    const [textSize, setTextSize] = useState(null)

    // Set title and subtitle size
    useEffect(() => {
        if (width < breakpoint) {
        setTextSize('text-xl')
        } else {
        setTextSize('text-4xl')
        }
    }, [width, breakpoint])

  return (
    <nav className='pb-10 pt-5 px-10'>
        <h1 className={`font-quicksand ${textSize}`}>umj</h1>
    </nav>
  )
}

export default NavBar
