import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Link } from 'lucide-react';


const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);



  return (
    <div
      className="relative overflow-hidden transition-all duration-300 transform bg-white shadow-md group rounded-xl dark:bg-gray-800 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >
      <a href={project.liveUrl}>

        <div className="overflow-hidden aspect-video">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          ></div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            {project.featured && (
              <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Featured
              </span>
            )}
          </div>

          <p className="mb-4 text-gray-700 dark:text-gray-300 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 transition-colors dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={18} className="mr-1" />
              <span className="text-sm">Code</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 transition-colors dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <ExternalLink size={18} className="mr-1" />
              <span className="text-sm">Live Demo</span>
            </a>

            <button className="flex items-center text-blue-600 transition-colors dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              <span className="text-sm font-medium">Details</span>
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;