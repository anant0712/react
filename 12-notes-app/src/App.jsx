import  { useState } from 'react'

const App = () => {
  
  const [title,setTitle]=useState('')

  const [detail,setDetail] = useState('')

  const [task,setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,detail});
    setTask(copyTask);
    // console.log(title);
    // console.log(detail);

    setTitle('')
    setDetail('')

  }

  const deleteNode = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }


  return (
    <div className='w-screen lg:flex min-h-screen bg-black text-white' >
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex lg:w-1/2 flex-col item-start gap-4 p-10 '>
          <h1 className='text-2xl font-bold'>Add Notes</h1>
          {/* Heading wala Input  */}
          <input type="text" 
          className='px-5 py-2 w-full border-2 border-gray-300 rounded text-lg '
          placeholder='Enter Notes Heading'
          value={title}
          onChange = {(e)=>{
            setTitle(e.target.value)
          }} />
          {/* TEXTAREA for details */}
          <textarea type="text" 
          placeholder='Write Details'
          value={detail}
          onChange = {(e)=>{
            setDetail(e.target.value)
          }}
          className='px-5 py-2 h-32 w-full flex item-start border-2 border-gray-300 rounded text-lg'
          />
          <button className='px-5 py-2 active:bg-black w-full border-2 rounded text-gray-600 text-lg font-bold bg-white '>Add Note</button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-2xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-3 h-full overflow-y-auto '>
          {task.map(function(elem,idx){

            return <div key={idx} className="flex justify-between flex-col items-start bg-cover h-52 w-40 pt-9 pb-3 rounded px-4 text-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10')] ">
              <div>
                <h2 className='leading-tight text-xl font-bold'>{elem.title}</h2>
                <p className='mt-2 text-sm leading-tight text-gray-500 font-medium'>{elem.detail}</p>
              </div>
              <button onClick={()=>{deleteNode(idx)}} className="w-full bg-red-500 cursor-pointer active:scale-95 text-white rounded ml-1 p-1 font-bold">Delete</button>
            </div>

          })}
          
        </div>
        </div>

      </div>
  )
}

export default App
