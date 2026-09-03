import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-cyan-800 '>
      <h2 className='text-xl font-bold'>GreatKart</h2>
      <div className='flex gap-4 text-lg underline'>
        <Link className='text-lg font-semibold' to="/">Home</Link>
        <Link className='text-lg font-semibold' to="/about">About</Link>
        <Link className='text-lg font-semibold' to="/courses">Courses</Link>
        <Link className='text-lg font-semibold' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
