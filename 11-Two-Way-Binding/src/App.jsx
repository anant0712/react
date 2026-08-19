import React,{useState} from 'react'
import Two_Way_Binding from './Components/Two_Way_Binding'

// Here we implement a simple form with a submit button. 
// When the form is submitted, we prevent the default behavior of the form (which is to refresh the page) and log a message to the console.

const App = () => {


  return (
    <div>
      <Two_Way_Binding/>
    </div>
  )

}

export default App
