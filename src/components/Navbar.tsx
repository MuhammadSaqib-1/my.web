import React from 'react';
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 sm:max-h-14 sm:max-w-screen md:flex-wrap'>
    <div className=' flex  justify-between items-center bg-black border-b border-b-white p-3 '> 
    <button className='text-xl hover:text-green-500  active:text-purple-400 focus:outline-none  font-bold bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-purple-500 '> Saqib</button>
    <ul className='gap-40 lg:gap-16 md:gap-10  sm:flex  sm:gap-10 md:flex'>
      <li className='menuLink'><a href='#hero'>Home</a></li>
      <li className='menuLink'><a href='#about'>About</a></li>
      <li className='menuLink'><a href='#projects'>Projects</a></li>
      <li className='menuLink'><a href='#skills'>Skills</a></li>
      <li className='menuLink'><a href='#contact'>Contact</a></li>
    </ul>
   {/* <CgMenuGridR className='md:hidden text-accent' size={30}/>  */}
    <div className='sm:h-[30%] text-green-500 hover:text-purple-400'>
    <CgMenuGridR size={30}/> 


</div>
</div> 
    </div>
  )
}

export default Navbar;
