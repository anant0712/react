import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-1/3 overflow-hidden relative rounded-3xl'>
      <img className="h-full w-full object-cover blur-none" src={props.img} alt='right-card' />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard
