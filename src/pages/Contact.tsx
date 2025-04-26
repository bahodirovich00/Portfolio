import { useEffect } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import Scene from '../components/3d/Scene';

const Contact = () => {
  const { t } = useTranslation();
  
  // Update the document title
  useEffect(() => {
    document.title = `${t('contact.title')} | Portfolio`;
  }, [t]);
  
  return (
    <div className="relative min-h-screen">
      <Scene interactive={false} particles={false} />
      
      <div className="container-custom py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="section-heading">{t('contact.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="bg-white dark:bg-primary-900 p-6 md:p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-primary-950 dark:text-white mb-6">
                Let's Connect
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary-500 dark:text-accent-950 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">New York, NY, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-500 dark:text-accent-950 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-accent-950 transition-colors duration-300"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-500 dark:text-accent-950 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-accent-950 transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-primary-950 dark:text-white mt-8 mb-4">
                Follow Me
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-primary-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-accent-950 dark:hover:text-primary-950 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-primary-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-accent-950 dark:hover:text-primary-950 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-primary-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-accent-950 dark:hover:text-primary-950 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;