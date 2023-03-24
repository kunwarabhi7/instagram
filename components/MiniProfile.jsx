import React from 'react'
import {signOut , useSession} from 'next-auth/react'
const MiniProfile = () => { 
 const {data:session}= useSession();
 
  return (
    <div className='flex items-center justify-between  ml-10 mt-12 w-[425px] pr-2'>
      <img src={session?.user?.image} className='rounded-full  w-16 h-16 border p-[2px]'/>
   <div className='flex-1 mx-4'>
    <h2 className='font-bold'>{session?.user?.name}</h2>
    <h2 className='text-sm text-gray-400'>{session?.user?.email}</h2>
   </div>
   <button className='text-blue-400 text-sm font-semibold' onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default MiniProfile
