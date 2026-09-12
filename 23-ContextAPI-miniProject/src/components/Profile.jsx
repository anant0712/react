import {useContext} from 'react'
import UserContext from '../context/UseContext'

function Profile(){
  const {user} = useContext(UserContext)

  if(!user) return <h2 className="text-lg font-semibold text-center mt-5 text-purple-400">Please login to view your profile</h2>

  return <h3 className="text-lg font-semibold text-center mt-5 text-purple-800">Welcome, {user}!</h3>

}

export default Profile
