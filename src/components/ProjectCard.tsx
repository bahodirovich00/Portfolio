import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  codeUrl,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div 
      className="project-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-accent-950 text-primary-950 text-xs font-semibold px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 dark:bg-primary-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary-500 hover:text-primary-600 dark:hover:text-accent-950 transition-colors duration-300"
            >
              <ExternalLink size={16} className="mr-1" />
              {t('projects.viewLive')}
            </a>
          )}
          
          {codeUrl && (
            <a 
              href={codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary-500 hover:text-primary-600 dark:hover:text-accent-950 transition-colors duration-300"
            >
              <Github size={16} className="mr-1" />
              {t('projects.viewCode')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;