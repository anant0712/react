import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Arrow from './Arrow'
import LeftText from './LeftText'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between '>
        <LeftText />
        <Arrow />
     
    </div>
  )
}

export default LeftContent
