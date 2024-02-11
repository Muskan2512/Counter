import './App.css'
import Count from "./components/Count"
import  { useState } from 'react'

function App() {
  const [value,setValue]=useState(0);

  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-blue-950'>
    <div className="flex flex-col w-fit h-fit justify-center items-center gap-6">
      <h3 className='font-bold text-2xl text-blue-200'>Increment & Decrement</h3>
      <Count value={value} setValue={setValue}/>
      <button className='bg-blue-200 px-4 py-2 rounded-sm' onClick={()=>{setValue(0)}}>Reset</button>
    </div>
    </div>
  )
}

export default App
