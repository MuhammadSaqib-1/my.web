import React from 'react';
import { SiAdobeillustrator } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { MdCss } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import { MdHtml } from "react-icons/md";
const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:col-span-2 gap-20 items-center'>

        <div > 
      <h2 className='text-4xl md:text-5xl text-center ' >Technologies I work with
         
       </h2>
         <p className='text-gray-500 pt-[70px]'>I possess strong web development skills, specializing in designing and developing dynamic websites using HTML, CSS, and TypeScript within the Next.js framework. My expertise extends to graphic design, where I utilize Adobe Illustrator to create visually appealing assets that enhance user experience. I am passionate about staying updated with the latest technologies and trends in the industry, continuously learning and adapting my skill set to incorporate innovative solutions into my work. This blend of web development and graphic design allows me to deliver comprehensive and engaging digital experiences.

        </p>
        </div>
    <div>
      <div className=' text-white text-4xl pl-[29%] mb-44'>
      <div>
      <ul className='gap-40 lg:gap-16 hidden md:flex'>
      <li className='menuLink2'><SiNextdotjs /></li>
      <li className='menuLink2'><SiTypescript /></li>
      <li className='menuLink2'> <MdCss /></li>
      <li className='menuLink2'><SiAdobeillustrator /></li>
      <li className='menuLink2'><RiTailwindCssFill /></li>
      <li className='menuLink2'><FaNode /></li>
      <li className='menuLink2'><MdHtml />

</li>

    </ul>
    
           


    
      
      </div>
      </div>

    </div>

    </div>
 
    </div>
    
  )
}
 
export default Skills;
