import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    
    if (elements) {
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (elements) {
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Explore a selection of my recent work showcasing my skills and approach to problem-solving.
            </p>
          </div>
          
          <div className="flex justify-center mb-8 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-200">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  filter === 'all'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  filter === 'featured'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Featured
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-400">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll opacity-0 transition-opacity duration-1000 delay-600">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-medium rounded-full transition-all hover:bg-gray-900 dark:hover:bg-gray-600 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;