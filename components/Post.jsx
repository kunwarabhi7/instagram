import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { TbSend } from 'react-icons/tb'

const Post = ({id,username,img,userImg , caption}) => {
  return (
    <>
  <div key={id} className=" rounded overflow-hidden border w-full  bg-white mt-2">
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img
            src={userImg}
            alt="profilepic"
          />
        </div>
        <span className="pt-1 ml-2 font-bold text-sm">{username}</span>
      </div>
      <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
        <i className="fas fa-ellipsis-h pt-2 text-lg" />
      </span>
    </div>
    <img
      className="w-full bg-cover"
      src={img}
    />
    <div className="px-3 pb-2">
      <div className="pt-2 flex space-x-2 items-center ">
        <AiOutlineHeart size={25} className="far fa-heart cursor-pointer" />
        <FaRegCommentDots size={25} className="far fa-heart cursor-pointer" />
        <TbSend size={25} className="far fa-heart cursor-pointer" />
        <span className="text-sm text-gray-400 font-medium">12 likes</span>
      </div>
      <div className="pt-1">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">{username}</span> {caption}
        </div>
      </div>
      <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
        View all 14 comments
      </div>
      <div className="mb-2">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">razzle_dazzle</span> Dude! How
          cool! I went to New Zealand last summer and had a blast taking the
          tour! So much to see! Make sure you bring a good camera when you go!
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Post
