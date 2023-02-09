import React from 'react'

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import  Prateek  from "../assests/Prateek.jpg";
const Home = () => {
  return (
    <div  name='Home'className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 gap-8 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Hii, I am Blockchain Developer</h1>
                <p className='text-gray-500 py-4 max-w-md'> I am a blockchain enthusiast. I am always looking for ways to bring my expertise and enthusiasm to new challenges. If you share my interest in blockchain and are looking for someone to collaborate with or simply exchange ideas with, I would love the opportunity to connect. Thank you</p>
                <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>                                   
            </div>
            </div>

            

            <div className='object-scale-down mx-auto w-2/3  md:mt-10'>
                <img src={Prateek} alt="my profile" className='rounded-2xl '/>
            </div>
        </div>

       
    </div>
  )
}

export default Home