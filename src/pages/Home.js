import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom";

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

  // Title and subtitle size
  const [titleSize, setTitleSize] = useState(null)
  const [subtitleSize, setSubtitleSize] = useState(null)

  // Set title and subtitle size
  useEffect(() => {
    if (width < breakpoint) {
      setTitleSize('text-6xl')
      setSubtitleSize('text-2xl')
    } else {
      setTitleSize('text-8xl')
      setSubtitleSize('text-5xl')
    }
  }, [width])

  return (
    <div className=''>
        <header className='flex flex-col items-center pt-20'>
          <div>
            <h1 className='text-xl font-quicksand'>Hei, jeg heter</h1>
            <h1 className={`${titleSize} font-bold`}>Ulrik Mikkelborg Jensen</h1>

            <h1 className={`flex items-center justify-center ${subtitleSize} font-quicksand pt-5 space-x-4`}>
              <span className='text-primary'>Ingeniørstudent</span><span>|</span><span className='text-secondary'> Utvikler</span>
            </h1>

          </div>
        </header>
      

    </div>
  )
}

export default Home
