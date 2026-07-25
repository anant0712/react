import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className="pb-16 pt-8 h-[85vh] items-center flex gap-10 px-18 text-black">
        <LeftContent />
        <RightContent  users={props.users}/>
      
    </div>
  )
}

export default Page1Content
