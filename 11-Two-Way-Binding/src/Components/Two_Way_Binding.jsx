import React ,{useState} from 'react'

const Two_Way_Binding = () => {

    const [title, setTitle] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault() // This stops the page from refreshing when the form is submitted.
        console.log(`Form submitted by ${title}`)

        setTitle('') // This clears the input field after the form is submitted.
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Enter your name'
        value ={title}
        onChange={(e) => setTitle(e.target.value)}
         />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Two_Way_Binding
