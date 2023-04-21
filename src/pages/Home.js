import React, { useEffect, useState } from 'react'
import Body from '../components/paragraphs/Body'
import Footer from '../components/paragraphs/Footer'
import Title from '../components/paragraphs/Title'

const Home = () => {

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
        <Title 
          width={width}
          breakpoint={breakpoint}
        />

        <Body 
          width={width}
          breakpoint={breakpoint}
        />

        <Footer
          width={width}
          breakpoint={breakpoint}
        />
    </>
  )
}

export default Home
