import React from 'react'

import { MdCode } from "react-icons/md";
import Portfolio from './Portfolio';


const Body = ({ width }) => {
  return (
    <div className='pt-10'>

      

      <div className='flex justify-center items-center h-[300px]'>
        <div className='flex flex-col items-center space-y-5'>
          <p className='text-2xl font-quicksand'>My portfolio</p>
          <MdCode className='h-10 w-10' color='white'/>
        </div>
      </div>

      <Portfolio 
        width={width}
      />
      
      <div className='h-[100px]' /> 
    </div>
  )
}

export default Body
