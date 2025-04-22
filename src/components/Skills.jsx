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
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center transition-opacity duration-1000 opacity-0 animate-on-scroll">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              My Skills
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </div>
          
          <div className="grid gap-12 mt-12 md:grid-cols-2">
            <div className="transition-opacity duration-1000 delay-200 opacity-0 animate-on-scroll">
              <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Frontend Development</h3>
              <div className="space-y-6">
                {frontendSkills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="transition-opacity duration-1000 opacity-0 animate-on-scroll delay-400">
              <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Backend Development</h3>
              <div className="space-y-6">
                {backendSkills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <h3 className="mt-10 mb-6 text-xl font-semibold text-gray-900 dark:text-white">Design</h3>
              <div className="space-y-6">
                {designSkills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <h3 className="mt-10 mb-6 text-xl font-semibold text-gray-900 dark:text-white">Other Skills</h3>
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