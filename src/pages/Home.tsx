import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Scene from '../components/3d/Scene';

const Home = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update the document title
  useEffect(() => {
    document.title = 'Web Developer Portfolio';
  }, []);
  
  return (
    <>
      {/* Hero Section with 3D Background */}
      <div>
        <section className="min-h-screen relative flex items-center">
          <Scene />
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0">
              <div className="mb-4 opacity-90">
                <span className="inline-block text-accent-950 text-lg md:text-xl font-mono">
                  {t('home.greeting')}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-950 dark:text-white mb-4">
                {t('home.name')}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-800 dark:text-gray-300 mb-6">
                {t('home.title')}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                {t('home.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/projects"
                  className="btn btn-primary flex items-center group"
                >
                  {t('home.cta')}
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline flex items-center group"
                >
                  {t('home.secondaryCta')}
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
          
          <button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-primary-900 p-3 rounded-full shadow-md text-primary-500 dark:text-accent-950 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </section>
        
        {/* Content Preview Sections */}
        <div ref={scrollRef} className="py-20 bg-gray-50 dark:bg-primary-950/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-heading">{t('projects.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('projects.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Preview of featured projects - using placeholder images */}
              <div className="project-card">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Featured Project 1" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A modern e-commerce solution with cart functionality and payment processing.</p>
                  <Link to="/projects" className="text-primary-500 hover:text-primary-600 dark:hover:text-accent-950 font-medium flex items-center group">
                    {t('projects.viewLive')}
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              <div className="project-card">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Featured Project 2" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">Portfolio Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">An analytics dashboard for tracking investments and financial portfolios.</p>
                  <Link to="/projects" className="text-primary-500 hover:text-primary-600 dark:hover:text-accent-950 font-medium flex items-center group">
                    {t('projects.viewLive')}
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              <div className="project-card">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Featured Project 3" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-950 dark:text-white mb-2">Real-time Chat App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">A WebSocket-powered chat application with real-time messaging.</p>
                  <Link to="/projects" className="text-primary-500 hover:text-primary-600 dark:hover:text-accent-950 font-medium flex items-center group">
                    {t('projects.viewLive')}
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;