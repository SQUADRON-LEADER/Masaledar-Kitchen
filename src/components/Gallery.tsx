import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'restaurant' | 'events';
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'restaurant' | 'events'>('all');

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Signature pasta dish",
      category: "food"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Restaurant interior",
      category: "restaurant"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Wood-fired pizza",
      category: "food"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Family dining",
      category: "events"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Fresh ingredients",
      category: "food"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Elegant dining room",
      category: "restaurant"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Homemade tiramisu",
      category: "food"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Wine tasting event",
      category: "events"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Carbonara preparation",
      category: "food"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'food', name: 'Food' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'events', name: 'Events' }
  ];

  const filteredImages = images.filter(image => 
    activeCategory === 'all' || image.category === activeCategory
  );

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage ? images.find(img => img.id === selectedImage) : null;

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg relative inline-block" style={{ fontFamily: '"Satisfy", "Caveat", cursive', fontSize: '1.5rem' }}>
            Gallery
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: '"Pacifico", "Lobster", cursive' }}>
            Visual <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: '"Tangerine", "Allura", cursive', fontSize: '1.2em' }}>Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: '"Kalam", cursive' }}>
            Take a peek behind the scenes and experience the atmosphere of Masaledar Kitchen through our curated photo collection.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                  <Camera className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg px-3 py-2 text-sm">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white bg-black bg-opacity-50 rounded-lg px-4 py-2">
                  {selectedImageData.alt}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-lg mb-6 opacity-90">
              Tag us @bellavista and use #BellaVistaExperience to be featured in our gallery!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Upload Your Photo
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}