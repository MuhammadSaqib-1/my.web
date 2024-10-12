import React from 'react';
import { RiMailFill } from "react-icons/ri";
const Contact = () => {
  return (
    <div id ='contact' className='container pt-32 '>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>

        <h2 className='text-5xl'> Get In Touch</h2>
        <p className='text-[18px] pt-2 text-gray-600'>Thank you for visiting! I'd love to hear from you. Whether you have questions, feedback, or just want to say hello, feel free to drop me a message using the form below. I strive to respond to all inquiries as quickly as possible, so don’t hesitate to reach out. Your thoughts and suggestions are always welcome!

</p>
<div className='flex gap-3 items-center text-white' >
<RiMailFill size={30}/> visitingknowledge@gmail.com
</div>


        </div>
        <div className='space-y-8'>
    <div className='flex flex-col gap-1 font-mono'>
     <label htmlFor="name">Name</label>
     <input type="text" 
     className='h-[40px] bg-transparent border border-accent' 
     id='name'/>
</div>
<div className='flex flex-col gap-1 font-mono'>
     <label htmlFor="email">Email</label>
     <input type="text"
     className='h-[40px] bg-transparent border border-accent '
     id='email'/>
</div>
<div className='flex flex-col gap-1 font-mono'>
     <label htmlFor="msg">Message</label>
     <textarea  
     className=' bg-transparent border border-accent'
     id='msg' rows={8}>
   </textarea>
</div >
<button className=' border hover:bg-purple-600 active:hover:text-white ring-1 ring-purple-600 p-2 px-6 text-white font-mono font-bold  hover:text-green-500  active:text-green-500 focus:outline-none '>Send</button>
</div>
        </div>
      </div> 
  );
}

export default Contact;
