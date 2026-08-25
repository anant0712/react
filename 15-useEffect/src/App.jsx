import {useState,useEffect} from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const aChanging = () => {
    console.log('A is changing')
  }
  
  const bChanging = () => {
    console.log('B is changing')
  }

  useEffect(() => {
    aChanging()
  }, [a])

  useEffect(() => {
    bChanging()
  }, [b])

  return (
    <div>
      <h2>Effect on A: {a}</h2>
      <h2>Effect on B: {b}</h2>
      <button onClick={() => setA(a + 1)}>Change A</button>
      <button onClick={() => setB(b - 1)}>Change B</button>
    </div>
  )
}

export default App
