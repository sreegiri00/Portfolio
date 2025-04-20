import React from 'react';
import * as LucideIcons from 'lucide-react';

const SkillBar = ({ skill }) => {
  const IconComponent = LucideIcons[skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)] || LucideIcons.Code;
  
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="mr-3 p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
            <IconComponent size={20} />
          </div>
          <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
      </div>
      
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-full transition-all duration-500 ease-out group-hover:from-blue-500 group-hover:to-blue-700 dark:group-hover:from-blue-400 dark:group-hover:to-blue-600"
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;