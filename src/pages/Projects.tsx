import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import Scene from '../components/3d/Scene';

// Project data
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment processing, and admin dashboard.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'web',
  },
  {
    id: 2,
    title: 'Portfolio Dashboard',
    description: 'An analytics dashboard for tracking investments and financial portfolios with data visualization.',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'D3.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'web',
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    description: 'A WebSocket-powered chat application with real-time messaging, notifications, and user presence.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'web',
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A productivity app for task management with drag-and-drop interface, categories, and reminders.',
    image: 'https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Redux', 'Firebase'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'mobile',
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description: 'A weather application showing forecasts, radar maps, and location-based alerts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Weather API', 'Geolocation'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    category: 'mobile',
  },
  {
    id: 6,
    title: 'Corporate Website Redesign',
    description: 'A complete redesign of a corporate website focusing on improved UX, accessibility, and performance.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Figma', 'UI/UX', 'Design System'],
    liveUrl: 'https://example.com',
    category: 'design',
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  // Update the document title
  useEffect(() => {
    document.title = `${t('projects.title')} | Portfolio`;
  }, [t]);
  
  // Filter projects when active filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);
  
  const filterCategories = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'web', label: t('projects.filter.web') },
    { key: 'mobile', label: t('projects.filter.mobile') },
    { key: 'design', label: t('projects.filter.design') },
  ];
  
  return (
    <div className="relative min-h-screen">
      <Scene interactive={false} particles={false} />
      
      <div className="container-custom py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="section-heading">{t('projects.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterCategories.map(category => (
              <button
                key={category.key}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === category.key 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 dark:bg-primary-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-700'
                }`}
                onClick={() => setActiveFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;