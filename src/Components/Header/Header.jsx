import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/avatar.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlus, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from './HeaderItem';
import {HiDotsVertical } from 'react-icons/hi';
import DropDownProfile from './DropDownProfile';

function Header() {
  const[toggle,setToggle]=useState(false);
  const[openProfile, setOpenProfile]=useState(false)
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'WATCHLIST',
      icon: HiPlus
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    },
  ]
  return (
    <>
    <div className='flex items-center gap-8 justify-between p-5'>
      <div className='flex gap-8 items-center'>
        <img src={Logo} className='w-[80px] md:w-[115px] object-cover'/>
          <div className='hidden md:flex gap-10'>
          {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
           ))}
          </div>
          <div className='flex md:hidden gap-5'>
          {menu.map((item,index) =>index<3&& (
          <HeaderItem name={''} Icon={item.icon} />
           ))}
           <div className='md:hidden'onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical}/>
            {toggle?<div className='absolute mt-3 bg-[#121212]
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index) =>index>2&& (
          <HeaderItem name={item.name} Icon={item.icon} />
           ))}
            </div>:null}
           </div>
          </div>
      </div>
       <img onClick={()=> setOpenProfile((prev)=>!prev)} src={Avatar} className='w-[40px] rounded-full'/>
      
    </div>

    {
    openProfile && <DropDownProfile/>
    }
    </>
  )
}

export default Header