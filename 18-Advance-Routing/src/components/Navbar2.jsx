import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className="flex gap-4 py-4 px-2 bg-cyan-700">
      <button className="bg-amber-500 font-medium text-white px-3 py-1.5 rounded-md " onClick={() => navigate('/')}>
        Return to Home Page
      </button>
      <button className="bg-amber-500 font-medium text-white px-3 py-1.5 rounded-md" onClick={() => navigate(-1)}>
        Back
      </button>
      <button className="bg-amber-500 font-medium text-white px-3 py-1.5 rounded-md" onClick={() => navigate(1)}>
        Next
      </button>
    </div>
  )
}

export default Navbar2
