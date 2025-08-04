import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          // Start fade out animation
          setTimeout(() => {
            setFadeOut(true);
            // Complete loading after fade out
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-red-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-amber-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-orange-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative text-center">
        {/* Main Logo */}
        <div className="relative w-24 h-24 mx-auto mb-8 group">
          {/* Rotating outer frame */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-spin shadow-2xl" 
               style={{ animationDuration: '3s' }}></div>
          
          {/* Inner glow ring */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-orange-300 to-red-400 opacity-60 animate-pulse"></div>
          
          {/* Main logo background */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner"></div>
          
          {/* Logo icon */}
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="text-white drop-shadow-lg">
              {/* Cooking pot */}
              <g className="animate-bounce" style={{ animationDuration: '2s' }}>
                <path d="M10 14c0-1 0-2 2-3h8c2 1 2 2 2 3v8c0 2-2 4-6 4s-6-2-6-4v-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M9 16h-2M25 16h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 11h10c1 0 1 1 1 2h-12c0-1 0-2 1-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </g>
              
              {/* Steam animation */}
              <g className="animate-pulse" style={{ animationDuration: '1.5s' }}>
                <path d="M14 8c0-1 0-2 1-2s1 1 1 2" stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.8"/>
                <path d="M16 7c0-1 0-2 1-2s1 1 1 2" stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.6"/>
                <path d="M18 8c0-1 0-2 1-2s1 1 1 2" stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.7"/>
              </g>
              
              {/* Heat indicator */}
              <circle cx="16" cy="18" r="1.5" fill="#fbbf24" className="animate-ping"/>
            </svg>
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-yellow-200 rounded-full animate-ping opacity-50"></div>
          </div>
          <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-br from-orange-300 to-red-400 rounded-full animate-bounce shadow-md" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-orange-200 rounded-full animate-ping opacity-60"></div>
          </div>
        </div>

        {/* Restaurant Name */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent mb-2 animate-pulse drop-shadow-2xl" style={{ fontFamily: '"Kaushan Script", "Alex Brush", cursive', letterSpacing: '0.02em', textShadow: '4px 4px 8px rgba(0,0,0,0.3)' }}>
            Masaledar Kitchen
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in uppercase font-semibold" style={{ animationDelay: '0.5s', fontFamily: '"Caveat", "Satisfy", cursive', letterSpacing: '0.1em', fontWeight: 600 }}>
            Authentic Indian Family Cuisine
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 rounded-full transition-all duration-100 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Preparing your experience...</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Text Animation */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-orange-600">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="mt-4 text-gray-600 animate-pulse">
            {progress < 30 && "Heating the tandoor..."}
            {progress >= 30 && progress < 60 && "Mixing the spices..."}
            {progress >= 60 && progress < 90 && "Preparing your table..."}
            {progress >= 90 && "Almost ready!"}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
