import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import DarkModeToggle from './components/DarkModeToggle';
import LiveChat from './components/LiveChat';
import ScrollProgress from './components/ScrollProgress';
import ToastNotification from './components/ToastNotification';
import AnnouncementBar from './components/AnnouncementBar';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'offers', 'reviews', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <AnnouncementBar />
      <Header currentSection={currentSection} />
      <DarkModeToggle />
      <Hero />
      <About />
      <Menu />
      <Offers />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Floating Components */}
      <BackToTop />
      <WhatsAppFloat />
      <LiveChat />
      <ToastNotification />
    </div>
  );
}

export default App;