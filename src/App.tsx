import { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Loading from './components/Loading';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { i18n } = useTranslation();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Set HTML lang attribute based on current language
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        <CustomCursor />
        <Navbar />
        <main className="pt-20 pb-16">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;