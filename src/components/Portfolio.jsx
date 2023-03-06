import React from 'react';
import Section from "./common/Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import p1 from "../assets/project-img.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Sweet App",
      github: "http://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 2,
      image: p1,
      title: "Sweet App",
      github: "http://google.com",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 3,
      image: p1,
      title: "Sweet App",
      github: "http://apple.com",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 4,
      image: p1,
      title: "Sweet App",
      github: "http://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 5,
      image: p1,
      title: "Sweet App",
      github: "http://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    },
    {
      id: 6,
      image: p1,
      title: "Okay App",
      github: "http://github.com/nodejs/node",
      demo: "https://nodejs.org/en/"
    }
  ];

  return (
    <Section title="Portfolio" subtitle="These are all the projects that I have worked on. Most of them are from when I didn't have experience so go easy.">
        <div id="portfolio" ></div>
      <div  className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div key={id} className="max-w-md bg-white rounded-xl shadow-md overflow-hidden">
            <img className="w-full h-64 object-cover" src={image} alt={title} />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{title}</h2>
              <div className="flex justify-between items-center">
                <a className="text-gray-600 hover:text-gray-800" href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a className="text-gray-600 hover:text-gray-800" href={demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;