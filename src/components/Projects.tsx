import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  
    {
    id:0,
    title:"Wrist Watch",
    desc: "Creation of wrist watch design in Adobe Illustrator",
    img:"/project-1.png",
    tags: ["Adobe Illustrator"],
    },
    
   { 
    id:1,
    title:"Wrist Watch 02",
    desc: "Creation of another wrist watch design in Adobe Illustrator",
    img:"/project-2.png",
    tags: ["Adobe Illustrator"],
    },

    {id:2,
    title:"Wrist Watch 03",
    desc: "Creation of another wrist watch design in Adobe Illustrator",
    img:"/project-3.png",
    tags: ["Adobe Illustrator"],
    },

    {
    id:3,
    title:"Logo Design",
    desc: "I created this logo which says a logo with sharp edges with black backgroung including use of gradients made in Adobe Illustrator",
    img:"/project-4.png",
    tags: ["Adobe Illustrator"],
    },
    
    {
    id:4,
    title:"Simple Calculator",
    desc: " By using HTML CSS and Typescript I made this simple calculator which can easily perform calculations for Addition Subtraction Multiplication and Division ",
    img:"/calculator.png",
    tags: ["HTML" , "CSS" , "Typescript"],
    },
    
    {
    id:5,
    title:"Percentage Calulator", 
    desc: "A basic HTML CSS and Typescript calculator to find obtain marks and to find percentage for total 550marks only(applicable logical for 550 marks or numbers", 
    img :"/project-5.png",
    tags: ["HTML" , "CSS" , "Typescript"],
    }
    ]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32 pb-44 '>
      <Heading title='My Projects'/>
      <div className='grid gap-10 md:gap-40  md:p-10 md:items-center xl:gap-0 xl:gap-y-10 md:grid cols-2 lg:grid-cols-3 place-items-center '>
     {data.map((el) => (<Card
     key={el.id}
     title={el.title}
     desc={el.desc}
     img={el.img}
     tags={el.tags}
     />))}
     
      </div>
    </div>
   
  );
}

export default Projects;

