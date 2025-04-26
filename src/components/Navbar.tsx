import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  // Change language handler
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when changing route
  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'ru', name: t('language.ru') },
    { code: 'uz', name: t('language.uz') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-primary-950 dark:text-white">
          <span className="text-accent-950">{'<'}</span>
          Developer
          <span className="text-accent-950">{'/>'}</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-primary-500 dark:text-accent-950' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary-800 transition-colors duration-300"
            aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          {/* Language Menu */}
          <div className="relative">
            <button 
              onClick={toggleLangMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary-800 transition-colors duration-300 flex items-center"
              aria-label={t('language')}
            >
              <Languages size={20} />
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-primary-900 rounded-md shadow-lg py-1 z-50">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      i18n.language === lang.code 
                        ? 'bg-primary-100 dark:bg-primary-800 text-primary-500 dark:text-accent-950' 
                        : 'hover:bg-gray-100 dark:hover:bg-primary-800'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary-800 transition-colors duration-300"
            aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary-800 transition-colors duration-300"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background-light dark:bg-background-dark z-30 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <div className="container-custom py-8 flex flex-col">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-lg py-3 border-b border-gray-200 dark:border-primary-800 ${
                  isActive ? 'text-primary-500 dark:text-accent-950' : ''
                }`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Language Selection */}
          <div className="mt-6 border-t border-gray-200 dark:border-primary-800 pt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t('language')}</p>
            <div className="flex space-x-2">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`lang-btn ${i18n.language === lang.code ? 'lang-btn-active' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;