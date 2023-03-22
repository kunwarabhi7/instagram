import React from 'react'

const Story = ({username ,img}) => {
  return (
    <div>
      <img src={img} className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out'/>
    <h1 className='text-xs w-14 truncate text-center'>  {username} </h1>
   
    </div>
  )
}

export default Story
