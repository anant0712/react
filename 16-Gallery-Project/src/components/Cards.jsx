import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <a href={props.user.url}>
            <div className='h-50 w-60'>
            <img src={props.user.download_url} className='h-full w-full object-cover rounded-lg shadow-lg' />
          </div>
          <h2 className='font-bold'>{props.user.author}</h2>
          </a>
    </div>
  )
}

export default Cards
