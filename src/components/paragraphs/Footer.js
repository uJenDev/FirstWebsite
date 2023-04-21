import React from 'react'
import Socials from './Socials'

const Footer = ({ width, breakpoint}) => {
  return (
    <div>
      <Socials width={width} breakpoint={breakpoint}/>
      <div className='h-[50px]' />
    </div>
  )
}

export default Footer
