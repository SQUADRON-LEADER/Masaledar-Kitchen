import { MapPin, Phone, Mail, Clock, Heart, Github, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 group cursor-pointer">
                {/* Enhanced animated logo matching header */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-spin shadow-lg group-hover:shadow-orange-500/50" 
                     style={{ animationDuration: '6s' }}></div>
                
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-orange-300 to-red-400 opacity-60 animate-pulse"></div>
                
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner"></div>
                
                <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  {/* Indian cooking pot icon matching header */}
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="text-white">
                    <g className="opacity-90">
                      {/* Main pot body */}
                      <path d="M10 14c0-1 0-2 2-3h8c2 1 2 2 2 3v8c0 2-2 4-6 4s-6-2-6-4v-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      {/* Pot handles */}
                      <path d="M9 16h-2M25 16h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      {/* Pot lid */}
                      <path d="M11 11h10c1 0 1 1 1 2h-12c0-1 0-2 1-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </g>
                    <g>
                      {/* Steam lines */}
                      <path d="M14 8c0-1 0-2 1-2s1 1 1 2" stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.8"/>
                      <path d="M16 7c0-1 0-2 1-2s1 1 1 2" stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.6"/>
                      <path d="M18 8c0-1 0-2 1-2s1 1 1 2" stroke="#f3f4f6" strokeWidth="1.5" fill="none" opacity="0.7"/>
                    </g>
                    <circle cx="16" cy="18" r="1" fill="#fbbf24" className="animate-pulse"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl" style={{ fontFamily: '"Kaushan Script", "Alex Brush", cursive', letterSpacing: '0.02em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Masaledar Kitchen</h3>
                <p className="text-gray-400 uppercase font-semibold" style={{ fontFamily: '"Caveat", "Satisfy", cursive', letterSpacing: '0.1em', fontWeight: 600 }}>Authentic Indian Family Cuisine</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Welcome to Masaledar Kitchen, where generations of authentic Indian recipes come alive with traditional spices and love. 
              Experience the warmth of Indian hospitality and flavors that bring families together around every meal.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SQUADRON-LEADER" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-red-600 cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-orange-500/25"
              >
                <Github className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://twitter.com/aayush-kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-red-600 cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-orange-500/25"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://instagram.com/aayush-kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-red-600 cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-orange-500/25"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://youtube.com/aayush_kr_gupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-red-600 cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-orange-500/25"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">About Us</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Our Menu</a></li>
              <li><a href="#offers" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Special Offers</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Reservations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Private Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Traditional Recipes</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Indian Family Dining</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Vegetarian Specialties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Tandoor Delights</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Curry House</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Biryani & Rice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Indian Sweets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Spice Learning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer hover:text-orange-400 transition-colors duration-300"
                   onClick={() => window.open('https://maps.google.com/?q=123+Gourmet+Street,+Culinary+District,+Food+City,+FC+12345', '_blank')}>
                <div className="p-1.5 rounded-full bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-orange-300 transition-colors duration-300">123 Gourmet Street</p>
                  <p className="text-gray-400 group-hover:text-orange-300 transition-colors duration-300">Culinary District, Food City FC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer hover:text-orange-400 transition-colors duration-300"
                   onClick={() => window.open('tel:+15551234567', '_self')}>
                <div className="p-1.5 rounded-full bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <p className="text-gray-400 group-hover:text-orange-300 transition-colors duration-300">(555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3 group cursor-pointer hover:text-orange-400 transition-colors duration-300"
                   onClick={() => window.open('mailto:family@masaledar-kitchen.com', '_self')}>
                <div className="p-1.5 rounded-full bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <p className="text-gray-400 group-hover:text-orange-300 transition-colors duration-300">family@masaledar-kitchen.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded-full bg-orange-500/20">
                  <Clock className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-gray-400">
                  <p className="mb-1"><span className="text-orange-300 font-medium">Mon-Thu:</span> 5:00 PM - 10:00 PM</p>
                  <p className="mb-1"><span className="text-orange-300 font-medium">Fri-Sat:</span> 5:00 PM - 11:00 PM</p>
                  <p><span className="text-orange-300 font-medium">Sunday:</span> 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Stay Connected</h4>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">Subscribe to our newsletter for authentic Indian recipe secrets, festival celebrations, and seasonal spice blend updates</p>
            <div className="max-w-md mx-auto relative group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-800/70"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 flex items-center space-x-1">
              <span>&copy; 2025 Gharana Kitchen. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>for Indian food lovers</span>
            </p>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:underline underline-offset-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:underline underline-offset-4">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:underline underline-offset-4">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}