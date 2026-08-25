import React from 'react'
import axios from 'axios'

const App = () => {
  const getData = async() => {
        const response = await axios.get('https://picsum.photos/v2/list');
        console.log(response.data);
      };
  return (
    <div>
      <button onClick={getData} className="p-2 m-2 bg-blue-600 text-black rounded-2xl">Get Data</button>
    </div>
  )
}

export default App
