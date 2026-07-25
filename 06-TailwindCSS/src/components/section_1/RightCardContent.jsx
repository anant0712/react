import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full bg-black/50 p-4 flex flex-col justify-between gap-4'>
        <h2 className="bg-white text-black rounded-full h-10 w-10 text-xl font-bold flex justify-center items-center">{props.id+1}</h2>
      <div>
        <p className ="text-shadow-2xs font-medium text-lg text-white font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officia quaerat veniam et architecto voluptates!</p>
        <div className='flex  mt-4 gap-2'>
          <button style={{backgroundColor:props.color}}  className=' text-white px-4 py-2 rounded-full'>{props.tag}</button>
          <button  style={{backgroundColor:props.color}} className=' text-white px-4 py-2 rounded-full text-xl'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
      </div>
  )
}

export default RightCardContent
