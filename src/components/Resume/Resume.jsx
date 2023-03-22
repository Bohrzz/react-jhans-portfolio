import React from 'react'
import avatar from '../../assets/no-face.png';
import resume from '../../assets/resume.mp4';
import Section from '../common/Section';

const Resume = () => {
  return (
    <Section title="Resume" subtitle="Plz Download">
    <section className='dark:bg-gray-800'>
    <div className='flex flex-col items-center justify-center mt-10 '>
      <img src={avatar} alt="" className='w-32 h-32 md:h-44 md:w-44 object-cover object-top bg-gradient-to-b from-teal-400 rounded-full pt-5' />
      <a
        href={resume}
        download='resume.mp4'
        id='resume'
        className='inline-block mt-10 px-6 py-4 font-semibold text-white bg-gradient-to-r from-teal-500 to-gray-600 rounded-lg shadow-lg'>
        Download Resume
      </a>
    </div>

   

  </section>
  </Section>
  )
}

export default Resume
