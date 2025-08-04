import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
}

export default function Header({ currentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.reservation-dropdown')) {
        setIsReservationOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'offers', label: 'Offers' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-orange-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative w-16 h-16 group cursor-pointer transform transition-transform duration-300 hover:scale-105">
              {/* Elegant rotating outer frame with enhanced glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-spin shadow-2xl group-hover:shadow-orange-500/50" 
                   style={{ animationDuration: '8s' }}></div>
              
              {/* Inner glow ring with enhanced animation */}
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-orange-300 to-red-400 opacity-60 animate-pulse group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Main logo background with better hover effect */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-slate-700 group-hover:to-slate-800 transition-all duration-500 shadow-inner group-hover:shadow-2xl"></div>
              
              {/* Logo icon container with enhanced scaling */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/30 transition-all duration-300">
                {/* Traditional Indian cooking pot (Handi) logo with enhanced animations */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-white drop-shadow-lg group-hover:text-amber-100 transition-colors duration-300">
                  {/* Cooking pot base and handles */}
                  <g className="animate-pulse group-hover:animate-none" style={{ animationDuration: '4s' }}>
                    {/* Main pot body */}
                    <path d="M10 14c0-1 0-2 2-3h8c2 1 2 2 2 3v8c0 2-2 4-6 4s-6-2-6-4v-8z" stroke="currentColor" strokeWidth="2" fill="none" className="drop-shadow-sm"/>
                    {/* Pot handles */}
                    <path d="M9 16h-2M25 16h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    {/* Pot lid */}
                    <path d="M11 11h10c1 0 1 1 1 2h-12c0-1 0-2 1-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </g>
                  
                  {/* Steam/aroma rising with enhanced animation */}
                  <g className="animate-pulse group-hover:animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                    {/* Steam lines */}
                    <path d="M14 8c0-1 0-2 1-2s1 1 1 2" stroke="url(#steam-gradient)" strokeWidth="1.5" fill="none" opacity="0.8" className="group-hover:opacity-100 transition-opacity duration-300"/>
                    <path d="M16 7c0-1 0-2 1-2s1 1 1 2" stroke="url(#steam-gradient)" strokeWidth="1.5" fill="none" opacity="0.6" className="group-hover:opacity-90 transition-opacity duration-300"/>
                    <path d="M18 8c0-1 0-2 1-2s1 1 1 2" stroke="url(#steam-gradient)" strokeWidth="1.5" fill="none" opacity="0.7" className="group-hover:opacity-95 transition-opacity duration-300"/>
                  </g>
                  
                  {/* Decorative spices/ingredients floating around */}
                  <g className="animate-ping group-hover:animate-pulse" style={{ animationDuration: '6s' }}>
                    <circle cx="8" cy="12" r="1" fill="url(#spice-gradient)" opacity="0.8" className="group-hover:opacity-100"/>
                    <circle cx="24" cy="12" r="1" fill="url(#spice-gradient)" opacity="0.6" className="group-hover:opacity-90"/>
                    <circle cx="8" cy="20" r="0.8" fill="url(#spice-gradient)" opacity="0.7" className="group-hover:opacity-95"/>
                    <circle cx="24" cy="20" r="0.8" fill="url(#spice-gradient)" opacity="0.9" className="group-hover:opacity-100"/>
                  </g>
                  
                  {/* Central flame/heat indicator */}
                  <circle cx="16" cy="18" r="1.5" fill="url(#flame-gradient)" className="animate-pulse group-hover:animate-ping" style={{ animationDuration: '2s' }}/>
                  
                  <defs>
                    <linearGradient id="flame-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24"/>
                      <stop offset="50%" stopColor="#f59e0b"/>
                      <stop offset="100%" stopColor="#d97706"/>
                    </linearGradient>
                    <linearGradient id="steam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f3f4f6"/>
                      <stop offset="100%" stopColor="#d1d5db"/>
                    </linearGradient>
                    <linearGradient id="spice-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24"/>
                      <stop offset="100%" stopColor="#f97316"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Enhanced floating elegant particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full animate-bounce opacity-90 shadow-lg group-hover:shadow-yellow-400/50 group-hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-yellow-200 rounded-full animate-ping opacity-40 group-hover:opacity-60"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-br from-orange-300 to-red-400 rounded-full animate-bounce opacity-80 shadow-md group-hover:shadow-orange-400/50 group-hover:scale-110 transition-all duration-300" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-orange-200 rounded-full animate-ping opacity-50 group-hover:opacity-70"></div>
              </div>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full animate-bounce opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300" style={{ animationDelay: '1.5s' }}></div>
            </div>
            <div className="group cursor-pointer">
              <h1 className={`text-4xl font-bold transition-all duration-300 tracking-wide group-hover:scale-105 drop-shadow-2xl ${
                isScrolled ? 'text-gray-900 group-hover:text-orange-600' : 'text-white group-hover:text-amber-100'
              }`} style={{ fontFamily: '"Kaushan Script", "Alex Brush", cursive', letterSpacing: '0.02em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                Masaledar Kitchen
              </h1>
              <p className={`text-sm transition-all duration-300 font-medium group-hover:tracking-wider uppercase ${
                isScrolled ? 'text-gray-600 group-hover:text-orange-500' : 'text-white/90 group-hover:text-amber-200'
              }`} style={{ fontFamily: '"Caveat", "Satisfy", cursive', letterSpacing: '0.1em', fontWeight: 600 }}>
                Authentic Indian Family Cuisine
              </p>
            </div>
          </div>

          {/* Premium Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl group overflow-hidden ${
                  currentSection === item.id 
                    ? 'text-white bg-gradient-to-r from-orange-500 to-red-600 shadow-lg shadow-orange-500/25' 
                    : isScrolled 
                      ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover background effect */}
                {currentSection !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                )}
                
                {/* Active indicator dot */}
                {currentSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Premium Contact Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              isScrolled 
                ? 'text-gray-600 hover:text-orange-600 bg-gray-50 hover:bg-orange-50' 
                : 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => window.open('tel:+15551234567', '_self')}>
              <div className="p-1.5 rounded-full bg-orange-500/20">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
              </div>
              <span className="text-sm font-medium">(555) 123-4567</span>
            </div>
            
            <div className={`flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
              isScrolled 
                ? 'text-gray-600 hover:text-orange-600 bg-gray-50 hover:bg-orange-50' 
                : 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => window.open('https://maps.google.com/?q=123+Gourmet+Street,+Culinary+District,+Food+City,+FC+12345', '_blank')}>
              <div className="p-1.5 rounded-full bg-orange-500/20">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
              </div>
              <span className="text-sm font-medium">Find Us</span>
            </div>
            
            <div className="relative reservation-dropdown">
              <button 
                className="relative bg-gradient-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 group overflow-hidden"
                onClick={() => setIsReservationOpen(!isReservationOpen)}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Reserve Table</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                </span>
                
                {/* Enhanced shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </button>
              
              {/* Reservation Dropdown */}
              {isReservationOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-orange-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Reserve Your Experience</h3>
                    
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          window.open('https://www.opentable.com/r/gharana-kitchen-indian-restaurant', '_blank');
                          setIsReservationOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="p-1.5 rounded-full bg-white/20">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">Book Family Table</div>
                          <div className="text-xs opacity-90">Reserve for your family</div>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => {
                          window.open('https://maps.google.com/?q=123+Gourmet+Street,+Culinary+District,+Food+City,+FC+12345', '_blank');
                          setIsReservationOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gray-100 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="p-1.5 rounded-full bg-orange-500/20">
                          <MapPin className="w-4 h-4 text-orange-500" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">Find Our Location</div>
                          <div className="text-xs opacity-70">View on Google Maps</div>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => {
                          window.open('tel:+15551234567', '_self');
                          setIsReservationOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gray-100 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="p-1.5 rounded-full bg-orange-500/20">
                          <Phone className="w-4 h-4 text-orange-500" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">Call to Reserve</div>
                          <div className="text-xs opacity-70">(555) 123-4567</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Premium Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
              isScrolled 
                ? 'text-gray-700 hover:text-orange-600 bg-gray-50 hover:bg-orange-50' 
                : 'text-white hover:text-amber-200 bg-white/10 hover:bg-white/20'
            }`}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu className="w-6 h-6" />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
                <X className="w-6 h-6" />
              </div>
            </div>
            
            {/* Active indicator */}
            {isMenuOpen && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
            )}
          </button>
        </div>

        {/* Premium Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-orange-100 shadow-2xl">
            <div className="container mx-auto px-6 py-6">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-6 py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 ${
                      currentSection === item.id
                        ? 'text-white bg-gradient-to-r from-orange-500 to-red-600 shadow-lg shadow-orange-500/25'
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:shadow-lg'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: 'slideInRight 0.5s ease-out forwards'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {currentSection === item.id && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-orange-100">
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600 cursor-pointer hover:text-orange-600 transition-colors duration-300"
                       onClick={() => window.open('tel:+15551234567', '_self')}>
                    <div className="p-2 rounded-full bg-orange-500/10">
                      <Phone className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="font-medium">(555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600 cursor-pointer hover:text-orange-600 transition-colors duration-300"
                       onClick={() => window.open('https://maps.google.com/?q=123+Gourmet+Street,+Culinary+District,+Food+City,+FC+12345', '_blank')}>
                    <div className="p-2 rounded-full bg-orange-500/10">
                      <MapPin className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <span className="font-medium">Find Our Location</span>
                      <div className="text-xs text-gray-500">123 Gourmet Street</div>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 relative overflow-hidden group"
                  onClick={() => {
                    // Open reservation system with location
                    window.open('https://www.opentable.com/r/gharana-kitchen-indian-restaurant?q=123+Gourmet+Street+Culinary+District', '_blank');
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Reserve Family Table</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </span>
                  
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}