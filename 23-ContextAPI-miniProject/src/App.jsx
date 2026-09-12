import Login from './components/Login'
import Profile from './components/Profile'
import UseContextProvider from './context/UseContextProvider'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-purple-400 via-white via-green-400 to-blue-500">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded">React with Chai and Code</h1>
      <Login />
      <Profile />
      </div>
    </div>
  )
}

export default App
