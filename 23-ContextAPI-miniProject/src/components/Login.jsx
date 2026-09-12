import {useState,useContext} from 'react'
import UserContext from '../context/UseContext.js'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(username, password)
    // console.log('User submitted')
  }

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h2 className="text-2xl font-bold mt-5">Login</h2>
     <div className='flex flex-col gap-2 w-[90%]'>
       <input className="border-2 p-2 w-full" type="text" placeholder='Enter your name' 
        value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input className="border-2 p-2 text-md w-full" type="password" placeholder='Enter your password'
         value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
    </div>
     </div>
  )
}

export default Login
