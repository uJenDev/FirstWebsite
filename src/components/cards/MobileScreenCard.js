import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import { urlFor } from '../../sanity'

const MobileScreenCard = ({ image }) => {

  useEffect(() => {
    console.log('image')
  }, [image])

  return (
    <>
        <img 
            src={urlFor(image).url()}
            className={`w-[250px] cursor-pointer rounded-3xl ${!isMobile ? 'hover:scale-105  ease-in-out duration-300' : null}`}
            alt='/'
        />
    </>
  )
}

export default MobileScreenCard 