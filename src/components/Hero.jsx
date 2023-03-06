import React from 'react';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import avatar from '../assets/no-face.png';
import resume from '../assets/resume.mp4';

const Hero = () => {

  const SOCIAL = [
    {
      id: 1,
      link: "https://github.com/Bohrzz",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: "https://twitter.com/?lang=en",
      icon: <FaTwitter />,
    },
  ];

  window.addEventListener('scroll', function () {

    const downArrow = document.querySelector(".down-arrow")

    if (this.scroll >= 90) downArrow.classList.add("hide-down-arrow")
    else
      downArrow.classList.remove("hide-down-arrow");
  });

  return <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
    <h2 className='text-5xl text-gray-600 font-bold dark:text-teal-400 '> Jhanathan Spells</h2>
    <h1 id='about-me' className='py-3 text-lg text-gray-400 font-bold'>About Me</h1>
    <h3 className='py-3 text-2xl'> Software Engineer</h3>
    <p className='max-w-xl font-l text-gray-500'> Hello welcome to my Portfolio Website! I make cool stuff for cool people! Im 25 from Kingston Jamaica and I love Programming!
    </p>

    <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
      {SOCIAL.map(({ id, link, icon }) => (

        <a
          target='_blank'
          rel='noopener noreferrer'
          href={link} key={id}
          className="cursor-pointer duration-300 hover:text-teal-500"> {icon}  </a>


      )

      )}
    </div>
    <div className='flex flex-col items-center justify-center mt-10'>
      <img src={avatar} alt="" className='w-32 h-32 md:h-44 md:w-44 object-cover object-top bg-gradient-to-b from-teal-400 rounded-full pt-5' />
      <a
        href={resume}
        download='resume.mp4'
        id='resume'
        className='inline-block mt-10 px-6 py-4 font-semibold text-white bg-gradient-to-r from-teal-500 to-gray-600 rounded-lg shadow-lg'>
        Download Resume
      </a>
    </div>

    <div className='mt-10 down-arrow'>

      <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />

    </div>

  </section>
}

export default Hero;
