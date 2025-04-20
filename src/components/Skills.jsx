import React, { useRef, useEffect } from 'react';
import SkillBar from './SkillBar';
import { skills } from '../data/skills';

const Skills = () => {
  const sectionRef = useRef(null);
  
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const otherSkills = skills.filter(skill => skill.category === 'other');
  
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
    <section id="skills" ref={sectionRef} className="py-24 bg-white dark:bg-[#121212]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Skills
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-200">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Frontend Development</h3>
              <div className="space-y-6">
                {frontendSkills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-400">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Backend Development</h3>
              <div className="space-y-6">
                {backendSkills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-6 mt-10 text-gray-900 dark:text-white">Design</h3>
              <div className="space-y-6">
                {designSkills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-6 mt-10 text-gray-900 dark:text-white">Other Skills</h3>
              <div className="space-y-6">
                {otherSkills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;