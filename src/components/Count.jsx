import React from 'react'
const Count = (props) => {
  let value=props.value;
  let setValue=props.setValue;

  return (
    <div className='bg-white px-10 flex gap-5 py-2'>
      <button className='font-bold text-[3rem]' onClick={()=>{setValue(value-1)}}>-</button>
      <button className='font-bold text-[2.5rem] mx-10'>{value}</button>
      <button className='font-bold text-[3rem]' onClick={()=>{setValue(value+1)}}>+</button>
    </div>
  )
}

export default Count
