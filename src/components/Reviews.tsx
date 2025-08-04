import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  dish: string;
}

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely amazing! The Osso Buco was perfectly tender and the service was impeccable. This is hands down the best Italian restaurant in the city. The atmosphere is warm and inviting, perfect for a romantic dinner.",
      date: "2 days ago",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      dish: "Osso Buco"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "The truffle pasta was out of this world! You can tell they use authentic Italian ingredients. The chef really knows what they're doing. Will definitely be coming back with the whole family next time.",
      date: "1 week ago",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      dish: "Truffle Pasta"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 4,
      comment: "Fantastic food and great ambiance! The tiramisu was heavenly. Staff was very attentive and knowledgeable about wine pairings. Only minor complaint is that it gets quite busy on weekends, but that's a good sign!",
      date: "2 weeks ago",
      avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      dish: "Tiramisu"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      comment: "Been coming here for years and it never disappoints. The carbonara is authentic and the pizza crust is perfect every time. The family that runs this place really cares about quality and it shows in every dish.",
      date: "3 weeks ago",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      dish: "Carbonara"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      comment: "The best dining experience I've had in years! From the moment we walked in, we felt like family. The wine selection is excellent and pairs perfectly with their dishes. Highly recommend for special occasions!",
      date: "1 month ago",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      dish: "Wine Pairing Menu"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance reviews
  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg relative inline-block" style={{ fontFamily: '"Satisfy", "Caveat", cursive' }}>
            Customer Reviews
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full"></div>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: '"Pacifico", "Lobster", cursive' }}>
            What Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Guests Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: '"Kalam", sans-serif' }}>
            Don't just take our word for it. Here's what our valued customers have to say about their dining experience.
          </p>
        </div>

        {/* Review Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <div className="flex justify-center mb-4">
                {getStars(reviews[currentReview].rating)}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed" style={{ fontFamily: '"Tangerine", "Allura", cursive', fontStyle: 'italic' }}>
              "{reviews[currentReview].comment}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img 
                src={reviews[currentReview].avatar}
                alt={reviews[currentReview].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 text-lg" style={{ fontFamily: '"Courgette", "Lobster", cursive' }}>
                  {reviews[currentReview].name}
                </h4>
                <p className="text-gray-600" style={{ fontFamily: '"Kalam", sans-serif' }}>
                  Enjoyed {reviews[currentReview].dish} • {reviews[currentReview].date}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {getStars(5)}
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">1,200+</div>
            <div className="text-gray-600">Happy Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
            <div className="text-gray-600">Recommend Us</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">24h</div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}