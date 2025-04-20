import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:px-6">
        <a href="#home" className="relative text-xl font-bold md:text-2xl">
          <span className="inline-block">
            Sreegiri Suresh P 
            <span className="absolute left-0 w-full h-1 transition-transform duration-300 origin-left transform scale-x-0 bg-blue-500 -bottom-1 group-hover:scale-x-100"></span>
          </span>
        </a>
        
        <nav className="items-center hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium relative group ${
                activeSection === item.href.substring(1)
                  ? 'text-blue-500 dark:text-blue-400'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
              }`}
            >
              {item.label}
              <span 
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-300 ${
                  activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                } origin-left`}
              ></span>
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>
        
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 transition-colors bg-gray-100 rounded-full dark:bg-gray-800"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#121212] absolute top-full left-0 w-full shadow-lg py-4 px-4 transition-all transform origin-top">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base py-2 ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-500'
                    : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;