import React, { useState } from 'react';
import { MdNightsStay, MdWbSunny } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNavigationClick = (index) => {
    setCurrentSection(index);
  }

  const sections = [
    {id: 'about-me', title: 'About Me'},
    {id: 'portfolio', title: 'Portfolio'},
    {id: 'contact', title: 'Contact'},
    {id: 'resume', title: 'Resume'},
  ];

  return (
    <header className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-teal-600 ${darkMode ? 'dark' : ''}`}>
      <nav className='flex justify-between items-center p-5'>
        <Link to='/' className='text-lg font-semibold'>Bohrzz</Link>

        <div className='flex items-center'>
          <Navigation currentSection={currentSection} onNavigationClick={handleNavigationClick} sections={sections} />

          <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdWbSunny className='text-2xl cursor-pointer' />
            ) : (
              <MdNightsStay className='text-2xl cursor-pointer' />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

function Navigation({ currentSection, onNavigationClick, sections }) {
  return (
    <nav className='ml-4'>
      <ul className='flex space-x-6'>
        {sections.map((section, index) => (
          <li key={section.id}>
            <Link to={`/${section.id}`} className={`text-sm font-small ml-4 mr-4 ${currentSection === index ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`} onClick={() => onNavigationClick(index)}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;