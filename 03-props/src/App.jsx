import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card 
        title="Anant Mishra"
        description="This is a sample description for the card."
        bgimage="https://images.unsplash.com/photo-1782796474844-92cc237e9550?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        title="Sarthak Sharma "
        description="This is another sample description for the card."
        bgimage="https://images.unsplash.com/photo-1761231464484-2148bca715d5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
       
    </div>
  )
}

export default App

