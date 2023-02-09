import React from 'react'
import {FaBars,FaTimes  } from "react-icons/fa";
import { useState } from "react";
const NavBar = () => {
  const[nav, setNav]=useState(false)
  const links = [
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'About'
    },
    {
      id:3,
      link:'Portfolio'
    },
    {
      id:4,
      link:'experience'
    },
    {
      id:5,
      link:'Contact'
    },
  ]

  return (
    <div className='flex justify-between items-center px-4 text-white bg-black w-screen h-20 fixed'>
        <div className='text-5xl font-signature mx-4 mt-3'>
            Prateek
        </div>

        <ul className='hidden md:flex'>

          {links.map(({id,link}) =>(
          <li key={id} className='capitalize text-gray-500 gap-5 px-4 cursor-pointer hover:scale-90 duration-200'>
            {link}
          </li>
          ))}
        </ul>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> :<FaBars size={30}/>}
        </div>
      {nav && (      
        <ul className='flex flex-col justify-center absolute items-center top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-500 text-gray-500'>
        {links.map(({id,link}) =>(
          <li key={id} 
          className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-90'>
            {link}
          </li>
         ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar