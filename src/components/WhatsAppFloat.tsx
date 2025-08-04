import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = "+15551234567"; // Restaurant phone number
  const message = "Hi! I'd like to make a reservation at Masaledar Kitchen.";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-8 left-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/25 group animate-pulse hover:animate-none"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
      
      {/* Notification dot */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></div>
    </button>
  );
}
