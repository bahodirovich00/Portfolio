import { useEffect } from 'react';
import { Code, Server, Database, Palette, Figma, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Scene from '../components/3d/Scene';
import SkillCard from '../components/SkillCard';

const About = () => {
  const { t } = useTranslation();
  
  // Update the document title
  useEffect(() => {
    document.title = `${t('about.title')} | Portfolio`;
  }, [t]);
  
  const frontendSkills = [
    {
      title: 'React/Next.js',
      icon: <Code size={24} />,
      level: 5,
      description: 'Building modern, performant UIs and SPAs with React ecosystem tools.',
    },
    {
      title: 'JavaScript/TypeScript',
      icon: <Code size={24} />,
      level: 5,
      description: 'Strong foundation in JavaScript with TypeScript for type-safe code.',
    },
    {
      title: 'CSS/Tailwind/SASS',
      icon: <Palette size={24} />,
      level: 4,
      description: 'Creating responsive, accessible, and beautiful user interfaces.',
    },
    {
      title: 'UI/UX Design',
      icon: <Figma size={24} />,
      level: 3,
      description: 'Designing intuitive user experiences with Figma and design systems.',
    },
  ];
  
  const backendSkills = [
    {
      title: 'Node.js/Express',
      icon: <Server size={24} />,
      level: 4,
      description: 'Creating RESTful APIs and server-side applications with Node.js.',
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      level: 4,
      description: 'Working with SQL and NoSQL databases like PostgreSQL and MongoDB.',
    },
    {
      title: 'Authentication & Security',
      icon: <Globe size={24} />,
      level: 4,
      description: 'Implementing secure authentication and authorization solutions.',
    },
  ];
  
  return (
    <>
      <div className="relative min-h-screen">
        <Scene interactive={false} particles={false} />
        
        <div className="container-custom py-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-heading text-center">{t('about.title')}</h1>
            
            <div className="bg-white dark:bg-primary-900 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-primary-950 dark:text-white mb-1">
                      {t('home.name')}
                    </h2>
                    <p className="text-primary-500 dark:text-accent-950 font-medium">
                      {t('home.title')}
                    </p>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-lg font-medium text-primary-900 dark:text-gray-200 mb-4">
                    {t('about.intro')}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('about.body1')}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('about.body2')}
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-center text-primary-950 dark:text-white mb-8">
              {t('about.skills')}
            </h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-primary-800 dark:text-gray-200 mb-4">
                {t('skills.frontend')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {frontendSkills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    title={skill.title}
                    icon={skill.icon}
                    level={skill.level}
                    description={skill.description}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-gray-200 mb-4">
                {t('skills.backend')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {backendSkills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    title={skill.title}
                    icon={skill.icon}
                    level={skill.level}
                    description={skill.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;