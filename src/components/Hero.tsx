//rafce 
import { FaQuoteLeft } from "react-icons/fa";
import React from 'react';
import Navbar from './Navbar';
import { FaQuoteRight } from "react-icons/fa";
const Hero = () => {
  
  return (
   
       
    <div  id='hero' className=' min-h-screen bg-no-repeat bg-[url(/bg-1.png)] bg-cover ' 
    style={{backgroundSize: "30%", backgroundPosition: 'left 125px bottom -100px'}}>
   
  <Navbar/>
 
    <div className='container grid lg:grid-cols-2 h-[calc(30vh-90px)]'></div>
    <div className='hidden lg:block '></div>
    <div className='text-[20px] sm:text-[100px] font-bold leading-tight flex justify-center items-center pl-[700px]'> 
    <div className='mt-10'>

   <p  className='animate-pulse text-8xl '>I'm</p>
      <p className='animate-pulse text-8xl'>Saqib</p>     
      <p className='animate-pulse text-8xl'>Tayyab</p>
       <div className="pt-8  ">
        <div className="text-green-500 animate-pulse delay-160">
      <FaQuoteLeft size={30} />
      </div>
      <p className=' text-[18px]  font-mono'>As a <button  className=' text-3xl cursor-pointer hover:text-green-500 active:text-purple-400 focus:outline-none bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-purple-500'> front-end developer </button> at the pinnacle of my craft, I seamlessly blend technical expertise with artistic vision to create stunning, user-centric web experiences. My passion for graphic design enriches my development work, allowing me to approach each project with a unique artistic flair. With a keen eye for detail and a commitment to beauty in every line of code, I transform ideas into visually captivating realities that engage and inspire users.</p>
      <div  className="pl-[365px] pt-2 animate-pulse text-green-500 "><FaQuoteRight size={30}/></div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero;
