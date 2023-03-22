import React from 'react'

const Section = ({title, subtitle, children}) => {
  return (
    
    <section className=' min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center dark:bg-gray-800'>
        <h3 className=' py-3 text-3xl lg:text-5xl text-gray-600 font-bold dark:text-teal-400 '>{title}</h3>
        <p className=' max-w-xl font-light text-gray-500 mb-10 text:sm md:text-base'>{subtitle}</p>
        {children}
    </section>




  )
}

export default Section
