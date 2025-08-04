import React from 'react';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4 shadow-lg animate-pulse">
            ✨ Culinary Excellence Redefined
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-fade-in" style={{ fontFamily: '"Allura", "Tangerine", cursive', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Where Flavor
          <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: '"Courgette", "Lobster", cursive' }}>Meets Artistry</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: '"Kalam", cursive', fontWeight: 400 }}>
          Experience a symphony of flavors crafted by master chefs using the world's finest ingredients, 
          where every dish tells a story of passion and innovation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
            <span>View Our Menu</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Make Reservation
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold">4.9/5 Rating</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Clock className="w-6 h-6 text-orange-400" />
            <span className="text-lg font-semibold">30min Delivery</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="w-6 h-6 text-red-400" />
            <span className="text-lg font-semibold">Downtown Location</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}