import React from 'react'

// Here we implement a simple form with a submit button. 
// When the form is submitted, we prevent the default behavior of the form (which is to refresh the page) and log a message to the console.

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault() // This stops the page from refreshing when the form is submitted.
    console.log(`Form submitted by {title}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Enter your name'
        value ={title}
        onChange={(e) => setTitle(e.target.value)}
         />
        <button type='submit' style={{color: 'white'}}>Submit</button>
      </form>
    </div>
  )

}

export default App
