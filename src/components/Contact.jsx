import React from 'react'
import Section from './common/Section'


const Contact = () => {
  return <Section title="Contact Me" subtitle="These are the ways you can get in touch with me. Id be delighted to hear from you! ">
    <div  id="contact"></div>
<div className='p-8 text-left w-full flex items-center justify-center'>
    <form action='https://getform.io/f/316cbdb5-08d8-4518-90f9-494ec4c81842'method='POST'>
     <div className='w-full'>
      <div className='flex flex-col'>
        <label className='capitalize text-sm py-2 font'>
            Name
        </label>
        <input type="text" name='Name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
        
     </div>
      <div className='flex flex-col my-2'>
        <label className='capitalize text-sm py-2 font'>
            Phone
        </label>
        <input type="text" name='Phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
        
     </div>
      <div className='flex flex-col my-2'>
        <label className='capitalize text-sm py-2 font'>
            Email
        </label>
        <input type="text" name='Email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>
        
     </div>
     
     
      
      <div className='flex flex-col'>
        <label className='capitalize text-sm py-2 font'>
            Message
        </label>
        <textarea name='message' rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>  
     </div>
     </div>   
     <div className='flex items-center justify-center'>
        <button className='my-8 bg-gradient-to-r from-teal-500 to-gray-600 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider hover:scale-105 duration-200'>
            submit
        </button>

     </div>
    </form>

</div>




  </Section>
  
}

export default Contact
