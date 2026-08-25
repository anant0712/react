import React from 'react'

const App = () => {
  
  const user = {
        userName: 'John Doe',
        Age:30,
        City:'New York',
      }
  
  localStorage.setItem('user',JSON.stringify(user))

  const getUser = JSON.parse(localStorage.getItem('user'))
  console.log(getUser)
  return (
    <div>App</div>
  )
}

export default App
