import { useState } from 'react';
import { X, Gift, Clock } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white py-2 px-4 text-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
      
      <div className="relative z-10 flex items-center justify-center space-x-2 text-sm font-medium" style={{ fontFamily: '"Caveat", "Satisfy", cursive', fontWeight: 600 }}>
        <Gift className="w-4 h-4 animate-bounce" />
        <span className="hidden sm:inline">🎉 Special Offer:</span>
        <span>15% OFF on Family Combos</span>
        <Clock className="w-4 h-4 ml-2" />
        <span className="hidden sm:inline">Limited Time!</span>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
