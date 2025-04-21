import React from 'react';
import * as LucideIcons from 'lucide-react';

const SkillBar = ({ skill }) => {
  const IconComponent = LucideIcons[skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)] || LucideIcons.Code;
  
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="p-2 mr-3 text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
            <IconComponent size={20} />
          </div>
          <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
        </div>
        <span className="text-mg gray-900 text- dark:text-gray-100">{skill.proficiencyChar}</span>
      </div>
      
      <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
        <div 
          className="h-full transition-all duration-500 ease-out rounded-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 group-hover:from-blue-500 group-hover:to-blue-700 dark:group-hover:from-blue-400 dark:group-hover:to-blue-600"
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;