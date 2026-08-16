import React,{useState} from 'react'
 
const App = () => {
  const [num, setCount] = useState({name: "John", age: 25})

  function handleClick() {
    const numArr = {...num};
    numArr.age += 1
    numArr.name = "Doe"
    setCount(numArr)

  }

  return (
    <div>
      <h1>{num.name} is {num.age} years old</h1>      
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
