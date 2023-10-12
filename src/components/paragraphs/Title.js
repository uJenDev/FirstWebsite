import React, { useEffect, useState } from 'react'

const Title = ({ width, breakpoint }) => {

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
  }, [width, breakpoint])

  return (
      <div className={`flex flex-col ${width > breakpoint && 'items-center'} pt-20 px-10`}>
          <div>
            <h1 className='text-xl font-quicksand'>Hei, jeg heter</h1>
            <h1 className={`${titleSize} font-bold`}>Ulrik Mikkelborg Jensen</h1>

            <h1 className={`flex items-center ${width > breakpoint && 'justify-center'} ${subtitleSize} font-quicksand pt-5 space-x-4`}>
              <span className='text-primary'>Entreprenør</span><span>|</span><span className='text-secondary'> Utvikler</span>
            </h1>
          </div>
      </div>
  )
}

export default Title
