import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 backdrop-blur-sm z-50">
      <div 
        className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-r from-transparent to-white/50 blur-sm"></div>
      </div>
    </div>
  );
}
