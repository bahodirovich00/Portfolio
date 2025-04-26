import { useState } from 'react';
import { motion } from '@react-three/drei';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  level: number; // 1-5
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, level, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="bg-white dark:bg-primary-900 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start mb-4">
        <div className="text-primary-500 dark:text-accent-950 mr-3">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`w-6 h-1.5 rounded-full mr-1 ${
                  index < level
                    ? 'bg-accent-950'
                    : 'bg-gray-200 dark:bg-primary-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;