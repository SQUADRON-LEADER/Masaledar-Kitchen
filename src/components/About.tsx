import React from 'react';
import { Award, Users, Heart, ChefHat } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Award Winning",
      description: "Recognized by culinary experts worldwide for our exceptional Italian cuisine."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Family Owned",
      description: "Three generations of authentic recipes passed down through our family."
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Made with Love",
      description: "Every dish is prepared with passion and the finest imported ingredients."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-orange-500" />,
      title: "Expert Chefs",
      description: "Our chefs trained in Italy bring authentic techniques to every meal."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-orange-500 font-semibold text-lg relative" style={{ fontFamily: '"Satisfy", "Caveat", cursive', fontSize: '1.5rem' }}>
                Our Story
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight" style={{ fontFamily: '"Pacifico", "Lobster", cursive' }}>
                Crafting Culinary
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent" style={{ fontFamily: '"Tangerine", "Allura", cursive', fontSize: '1.2em' }}> Masterpieces</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: '"Kalam", cursive' }}>
              Founded in 1985 by renowned chef Marcus Savoria, our restaurant began as a culinary 
              laboratory with a revolutionary mission: to redefine fine dining through innovative 
              techniques and exceptional ingredients. Today, we continue that legacy with unwavering 
              passion and commitment to culinary excellence.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our signature dishes have been perfected over four decades, using only the finest 
              ingredients sourced globally from trusted partners. From our molecular gastronomy 
              creations to our artisanal classics, every plate is a canvas of flavor and artistry.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="flex justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                alt="Chef preparing pasta"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Restaurant interior"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Wood fired pizza"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                alt="Vintage restaurant setting"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">35+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">15</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
}