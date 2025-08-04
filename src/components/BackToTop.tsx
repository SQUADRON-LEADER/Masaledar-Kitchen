import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-orange-500/25 group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </button>
      )}
    </>
  );
}
