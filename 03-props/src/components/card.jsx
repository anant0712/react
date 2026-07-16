import React from 'react'

function card({title,description,bgimage}){
    const cardStyle = {
        width:'300px',
        border: '2px solid white',
        borderRadius: '10px',
        textAlign:'center',
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding:'20px',
        };
  return (
    <div>
      <div style={cardStyle} className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        <button>View Profile</button>

      </div>
    </div>
  )
}

export default card
