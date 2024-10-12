import React from 'react';
import { GoMoveToTop } from "react-icons/go";
const About = () => {
  return (
    <div id='about' className='grid: grid-cols-2 container h-auto pt-32 mt-[400px] '>
      <h2 className='text-4xl md:text-5xl'>About Me</h2>
      <p className='text-gray-500 pt-4'>Hey!
This is Saqib .
I'm Currently enrolled at GIAIC .
I'm passionate about staying up to date with the latest technologies and trends in the industry.</p>
<div className=' float-left pl-[95%] animate-bounce  text bg-gradient-to-r from-slate-400 to bg-red-700 '>
</div>

{ <div className= ' h-[45px] w-16 bg-accent ml-[95%] mt-20 pl-2 animate-bounce'>
<a href="#hero"><GoMoveToTop size={45} /></a>

</div> }
    </div>
  );
}

export default About;
