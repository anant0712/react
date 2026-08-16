import React from 'react'

const App = () => {
  return (
  <div>
    <div className ='p-4'>
      <h1 className='text-2xl font-bold'>Hello World, I'm a React App!</h1>
      <button  onClick={() => console.log('Button Clicked')}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded'>Click Here</button>
    </div>
    <div className="mt-2">
      <input onChange={function(elem){console.log(elem.target.value)}} type="text" placeholder="Enter Your Name" className="border border-blue-600 rounded-lg py-2 px-4 ml-3 focus:ring-blue-500" />
    </div>
  </div>
  
  )
}

export default App
