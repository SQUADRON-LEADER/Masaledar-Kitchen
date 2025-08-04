import React from 'react';
import { Clock, Percent, Gift, Sparkles } from 'lucide-react';

export default function Offers() {
  const offers = [
    {
      id: 1,
      title: "Happy Hour Special",
      description: "50% off all appetizers and cocktails",
      time: "Monday - Friday, 4PM - 6PM",
      discount: "50%",
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      color: "from-orange-500 to-red-500",
      image: "https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Weekend Family Feast",
      description: "Buy 2 main courses, get kids meal free",
      time: "Saturday - Sunday, All Day",
      discount: "FREE",
      icon: <Gift className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500 to-purple-500",
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Chef's Tasting Menu",
      description: "5-course gourmet experience with wine pairing",
      time: "Available Thursday - Saturday",
      discount: "15%",
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      color: "from-purple-500 to-pink-500",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold text-lg relative inline-block" style={{ fontFamily: '"Satisfy", "Caveat", cursive' }}>
            Special Offers
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6" style={{ fontFamily: '"Pacifico", "Lobster", cursive' }}>
            Exclusive <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: '"Kalam", sans-serif' }}>
            Don't miss out on our limited-time offers and special dining experiences.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer) => (
            <div key={offer.id} className="group">
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-30">
                  <img 
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-80`}></div>

                {/* Content */}
                <div className="relative p-8 h-80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {offer.icon}
                      <div className="text-right">
                        <div className="text-3xl font-bold">{offer.discount}</div>
                        <div className="text-sm opacity-80">OFF</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: '"Tangerine", "Allura", cursive' }}>{offer.title}</h3>
                    <p className="text-lg mb-4 opacity-90" style={{ fontFamily: '"Kalam", sans-serif' }}>{offer.description}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 text-sm opacity-80 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{offer.time}</span>
                    </div>
                    
                    <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Claim Offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Never Miss a Deal!</h3>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter and be the first to know about exclusive offers and events.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          
          <p className="text-sm mt-4 opacity-75">
            No spam, just delicious deals delivered to your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}