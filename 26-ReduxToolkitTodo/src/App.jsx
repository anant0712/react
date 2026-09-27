import { useState } from 'react'
import './App.css'
import AppTodos from './components/AppTodos'
import Todos from './components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className="w-full">
      <h1>Learning about Redux Toolkit.</h1>
      <AppTodos />
      <Todos />
    </div>
   </>
  )
}

export default App
