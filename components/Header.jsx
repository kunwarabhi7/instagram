import Image from "next/image";
import React from "react";
import ig from "../public/images/ig.png";
import {FiInstagram} from 'react-icons/fi'
import {BsSearch  } from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {VscDiffAdded} from 'react-icons/vsc'
import {RiSendPlaneFill} from 'react-icons/ri'
import {FaRegCompass} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'



const Header = () => {
  return (
    <div className="sticky top-0 shadow-sm border-b bg-white z-50 ">
      <div className="flex items-center justify-around" > 
        <div className="relative hidden w-24 h-12 cursor-pointer lg:inline-grid">
          <Image src={ig} fill objectFit="contain" />
        </div>
        <div className="relative w-10 h-10 cursor-pointer lg:hidden">
          <FiInstagram size={40} />
        </div>
        {/* Middle SearchBar */} 
        <div className="max-w-xs">
          <div className="relative p-3 mt-1 rounded-md">
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <BsSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 placeholder-gray-400 border-gray-300 rounded-md bg-yellow-50 sm:text-sm focus:bg-white"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-evenly space-x-4 cursor-pointer">
          <AiFillHome size={25}/>
          <RiSendPlaneFill size={25}/>
          <VscDiffAdded size={25}/>
          <FaRegCompass size={25}/>
          <BiUser size={25}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
