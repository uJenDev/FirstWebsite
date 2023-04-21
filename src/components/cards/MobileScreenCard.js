import React from 'react'
import { isMobile } from 'react-device-detect'

const MobileScreenCard = ({ imgURL }) => {
  return (
    <>
        <img 
            src={imgURL} 
            className={`w-[250px] cursor-pointer rounded-3xl ${!isMobile ? 'hover:scale-105  ease-in-out duration-300' : null}`}
            alt='/'
        />
    </>
  )
}

export default MobileScreenCard 