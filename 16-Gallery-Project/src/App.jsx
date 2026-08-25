import {useEffect, useState} from 'react'
import axios from 'axios'
import Cards from './components/Cards'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function() {
    getData()
  }, [index])

  let printUserData = <h3 className='text-sm text-gray-400 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2'>"Loading...."</h3>;
  if (userData.length > 0) {
    printUserData = userData.map(function(user,idx){
      return (
        <div key={idx}>
          <Cards user={user} />
        </div>
      )
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
        <div className='flex h-[85%] mt-3 flex-wrap gap-3 justify-center'>
          {printUserData}
        </div>
        <div className='flex justify-center gap-3 mt-3'>
          <button style={{disabled: index === 1,opacity: index === 1 ? 0.5 : 1}} className='py-2 px-4 rounded-xl bg-amber-400 text-sm cursor-pointer active:scale-95 text-black font-semibold'
            onClick={() => {
              if (index > 1) {
                // console.log("Prev button clicked")
                setIndex(index - 1)
                setUserData([])
              }
              }}
          >Prev</button>
          <h4 className='text-gray-300'>Page {index}</h4>
          <button className='py-2 px-4 rounded-xl bg-amber-400 text-sm cursor-pointer active:scale-95 text-black font-semibold'
            onClick={() => {
              // console.log("Next button clicked")
              setUserData([])
              setIndex(index + 1)
            }}
          >Next</button>
        </div>
    </div>
  )
}

export default App
