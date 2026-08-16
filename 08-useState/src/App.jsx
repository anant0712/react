import React,{ useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="flex items-center justify-center w-80 h-50 rounded bg-gray-400">
      <h1 className="text-6xl font-bold text-gray-200">{count}</h1>
      </div>
      <div className="flex space-x-8">
      <button className="bg-gray-500 p-1 text-2xl text-white px-4 py-2 rounded" onClick={increment}>Increment</button>
      <button className="bg-gray-500 p-1 text-2xl text-white px-4 py-2 rounded" onClick={decrement}>Decrement</button>
    </div>
    </div>
  )
}

export default App
