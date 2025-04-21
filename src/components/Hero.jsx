import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const xValue = e.clientX / window.innerWidth - 0.5;
      const yValue = e.clientY / window.innerHeight - 0.5;
      
      const titleElement = heroRef.current.querySelector('.hero-title');
      const subtitleElement = heroRef.current.querySelector('.hero-subtitle');
      const decorElement = heroRef.current.querySelector('.hero-decoration');
      
      if (titleElement) {
        titleElement.style.transform = `translate(${xValue * -10}px, ${yValue * -10}px)`;
      }
      
      if (subtitleElement) {
        subtitleElement.style.transform = `translate(${xValue * -5}px, ${yValue * -5}px)`;
      }
      
      if (decorElement) {
        decorElement.style.transform = `translate(${xValue * 15}px, ${yValue * 15}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-50 dark:from-gray-900 dark:to-[#121212] z-0"></div>
      
      <div className="absolute w-64 h-64 rounded-full hero-decoration top-1/4 right-1/4 bg-blue-400/10 dark:bg-blue-500/10 blur-3xl"></div>
      <div className="absolute rounded-full hero-decoration bottom-1/4 left-1/3 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 blur-3xl"></div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-transparent hero-title md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
            Full Stack Developer & UI Designer
          </h1>
          
          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-700 hero-subtitle md:text-xl dark:text-gray-300">
            I create elegant, high-performance web applications with modern technologies and exceptional user experiences.
          </p>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a 
              href="#projects" 
              className="group inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full transition-all hover:bg-blue-700 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-medium rounded-full transition-all hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute transform -translate-x-1/2 bottom-12 left-1/2 animate-bounce">
          <a 
            href="#about" 
            className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md dark:bg-gray-800"
            aria-label="Scroll down"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-gray-500 dark:text-gray-400"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;