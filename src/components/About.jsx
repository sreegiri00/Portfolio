import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  
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
    <section id="about" ref={sectionRef} className="py-24 bg-white dark:bg-[#121212]">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="transition-opacity duration-1000 transform translate-y-8 opacity-0 animate-on-scroll">
              <div className="relative">
                <div className="overflow-hidden bg-gray-100 aspect-square rounded-2xl dark:bg-gray-800">
                  <img 
                    src="src\img\sg.jpg" 
                    alt="Portrait" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute w-32 h-32 bg-blue-500 -bottom-4 -right-4 rounded-2xl -z-10"></div>
                <div className="absolute w-24 h-24 bg-gray-200 -top-4 -left-4 dark:bg-gray-700 rounded-xl -z-10"></div>
              </div>
            </div>
            
            <div className="transition-opacity duration-1000 delay-300 transform translate-y-8 opacity-0 animate-on-scroll">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Hello! I'm a passionate full stack developer creating modern web applications. My journey in web development started with curiosity about how websites work, and has evolved into a career crafting exceptional digital experiences.
                </p>
                
                <p>
                  I specialize in React, JavaScript, and modern CSS frameworks like Tailwind. My approach combines clean, efficient code with thoughtful design to create solutions that are both beautiful and functional.
                </p>
                
                {/* <p>
                  When I'm not coding, you can find me exploring design trends, contributing to open source, or enjoying outdoor activities to refresh my creative thinking.
                </p> */}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700 dark:text-gray-300">B.S. Computer Science, University of Calicut</li>
                    <li className="text-gray-700 dark:text-gray-300">MERN Stack Developer </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Experience</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700 dark:text-gray-300">Currently exploring real-world development through personal projects and continuous learning.</li>
                    {/* <li className="text-gray-700 dark:text-gray-300">UI Designer, Creative Agency</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;