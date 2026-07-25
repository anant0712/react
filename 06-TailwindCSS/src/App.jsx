import React from 'react'
import Section1 from './components/section_1/section_1'


const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'orange',
      tag:'Satisfied',
    },
    {
      img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'royalblue',
      tag:'UnderServed',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661717805091-5821cc62004a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'teal',
      tag:'UnderBanked',
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      
    </div>
  )
}

export default App
