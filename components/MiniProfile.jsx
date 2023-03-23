import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img src='https://avatars0.githubusercontent.com/u/38799309?v=4' className='rounded-full w-16 h-16 border p-[2px]'/>
   <div className='flex-1 mx-4'>
    <h2 className='font-bold'>kunwarabhi7</h2>
    <h2 className='text-sm text-gray-400'>Welcome to Instagram nigg</h2>
   </div>
   <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile
