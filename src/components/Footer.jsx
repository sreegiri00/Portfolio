import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold">Portfolio</a>
              <p className="mt-2 text-gray-400 max-w-md">
                Creating elegant, high-performance web applications with modern technologies.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <button
                onClick={scrollToTop}
                className="p-3 bg-gray-700 dark:bg-gray-900 hover:bg-gray-600 dark:hover:bg-gray-800 rounded-full mb-4 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
              
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 md:mb-0">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
            
            <p className="text-gray-500 text-sm">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;