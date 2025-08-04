import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (saved === 'true' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-24 right-8 z-40 bg-white/10 backdrop-blur-lg border border-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-white/20 group"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        <Sun className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
        <Moon className={`absolute inset-0 w-6 h-6 transition-all duration-500 ${isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
    </button>
  );
}
