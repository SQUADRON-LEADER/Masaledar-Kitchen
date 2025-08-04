import React, { useState } from 'react';
import { Filter, Search, Star, Leaf, Zap, Flame } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary: string[];
  spiceLevel: number;
  rating: number;
  isSpecial?: boolean;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'curries', name: 'Curries' },
    { id: 'breads', name: 'Breads & Rice' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const dietaryOptions = [
    { id: 'all', name: 'All Dietary' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'gluten-free', name: 'Gluten-Free' }
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Samosa Chaat",
      description: "Crispy samosas topped with yogurt, tamarind chutney, mint sauce, and fresh herbs",
      price: 14,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&h=300",
      category: "appetizers",
      dietary: ["vegetarian"],
      spiceLevel: 2,
      rating: 4.8
    },
    {
      id: 2,
      name: "Chicken Tikka",
      description: "Marinated chicken pieces grilled in tandoor with aromatic spices and herbs",
      price: 18,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&h=300",
      category: "appetizers",
      dietary: ["gluten-free"],
      spiceLevel: 2,
      rating: 4.9,
      isSpecial: true
    },
    {
      id: 3,
      name: "Paneer Tikka",
      description: "Marinated cottage cheese cubes grilled with bell peppers and onions",
      price: 16,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&h=300",
      category: "appetizers",
      dietary: ["vegetarian", "gluten-free"],
      spiceLevel: 2,
      rating: 4.7
    },
    {
      id: 4,
      name: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato-based sauce with aromatic Indian spices",
      price: 24,
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=400&h=300",
      category: "curries",
      dietary: ["gluten-free"],
      spiceLevel: 2,
      rating: 4.9,
      isSpecial: true
    },
    {
      id: 5,
      name: "Palak Paneer",
      description: "Fresh cottage cheese cubes in a creamy spinach gravy with traditional Indian spices",
      price: 20,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&h=300",
      category: "curries",
      dietary: ["vegetarian", "gluten-free"],
      spiceLevel: 2,
      rating: 4.7
    },
    {
      id: 6,
      name: "Dal Makhani",
      description: "Slow-cooked black lentils in a rich, creamy sauce with butter and aromatic spices",
      price: 18,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&h=300",
      category: "curries",
      dietary: ["vegetarian", "gluten-free"],
      spiceLevel: 1,
      rating: 4.8
    },
    {
      id: 7,
      name: "Biryani Royale",
      description: "Fragrant basmati rice layered with spiced chicken, saffron, and caramelized onions",
      price: 26,
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&h=300&q=80",
      category: "mains",
      dietary: ["gluten-free"],
      spiceLevel: 3,
      rating: 4.9,
      isSpecial: true
    },
    {
      id: 8,
      name: "Tandoori Lamb Chops",
      description: "Marinated lamb chops grilled in our tandoor oven with mint yogurt sauce",
      price: 34,
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&h=300",
      category: "mains",
      dietary: ["gluten-free"],
      spiceLevel: 3,
      rating: 4.9,
      isSpecial: true
    },
    {
      id: 9,
      name: "Fish Curry",
      description: "Fresh fish cooked in coconut milk with curry leaves, mustard seeds, and spices",
      price: 28,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&h=300&q=80",
      category: "mains",
      dietary: ["gluten-free"],
      spiceLevel: 3,
      rating: 4.8
    },
    {
      id: 10,
      name: "Naan Bread",
      description: "Fresh baked traditional Indian bread, soft and fluffy, perfect with curries",
      price: 4,
      image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=400&h=300&q=80",
      category: "breads",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      rating: 4.6
    },
    {
      id: 11,
      name: "Garlic Naan",
      description: "Naan bread topped with fresh garlic and cilantro, brushed with ghee",
      price: 5,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&h=300",
      category: "breads",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      rating: 4.7
    },
    {
      id: 12,
      name: "Basmati Rice",
      description: "Aromatic long-grain basmati rice, perfectly steamed and fluffy",
      price: 6,
      image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=400&h=300&q=80",
      category: "breads",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      spiceLevel: 0,
      rating: 4.5
    },
    {
      id: 13,
      name: "Gulab Jamun",
      description: "Traditional Indian dessert - soft milk dumplings soaked in rose-flavored syrup",
      price: 8,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&h=300&q=80",
      category: "desserts",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      rating: 4.8
    },
    {
      id: 14,
      name: "Masala Chai Crème Brûlée",
      description: "Traditional French dessert infused with cardamom, cinnamon, and ginger spices",
      price: 13,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&h=300",
      category: "desserts",
      dietary: ["vegetarian"],
      spiceLevel: 0,
      rating: 4.8
    },
    {
      id: 15,
      name: "Kulfi",
      description: "Traditional Indian ice cream flavored with cardamom, pistachios, and saffron",
      price: 10,
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=400&h=300&q=80",
      category: "desserts",
      dietary: ["vegetarian", "gluten-free"],
      spiceLevel: 0,
      rating: 4.7
    },
    {
      id: 16,
      name: "Masala Chai",
      description: "Traditional spiced tea with cardamom, cinnamon, ginger, and milk",
      price: 5,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&h=300&q=80",
      category: "beverages",
      dietary: ["vegetarian"],
      spiceLevel: 1,
      rating: 4.9
    },
    {
      id: 17,
      name: "Mango Lassi",
      description: "Refreshing yogurt-based drink blended with sweet mango pulp and cardamom",
      price: 7,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&h=300",
      category: "beverages",
      dietary: ["vegetarian", "gluten-free"],
      spiceLevel: 0,
      rating: 4.8
    },
    {
      id: 18,
      name: "Chicken Korma",
      description: "Mild and creamy chicken curry with cashews, yogurt, and aromatic spices",
      price: 22,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=400&h=300",
      category: "curries",
      dietary: ["gluten-free"],
      spiceLevel: 1,
      rating: 4.6
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDietary = dietaryFilter === 'all' || item.dietary.includes(dietaryFilter);
    
    return matchesCategory && matchesSearch && matchesDietary;
  });

  const getSpiceIndicator = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Flame key={i} className={`w-4 h-4 ${i < level ? 'text-red-500 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-lg relative inline-block" style={{ fontFamily: '"Satisfy", "Caveat", cursive', fontSize: '1.5rem' }}>
            Our Menu
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: '"Pacifico", "Lobster", cursive' }}>
            Culinary <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent" style={{ fontFamily: '"Tangerine", "Allura", cursive', fontSize: '1.2em' }}>Artistry</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: '"Kalam", cursive' }}>
            Discover our carefully curated selection of innovative dishes, 
            each prepared with passion and the finest ingredients.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Dietary Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {dietaryOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setDietaryFilter(option.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors flex items-center space-x-1 ${
                  dietaryFilter === option.id
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-100'
                }`}
              >
                <Leaf className="w-4 h-4" />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.isSpecial && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Chef's Special
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-2xl font-bold text-orange-500">${item.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                {/* Tags and Indicators */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {item.dietary.map((diet) => (
                      <span key={diet} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {diet}
                      </span>
                    ))}
                  </div>
                  {item.spiceLevel > 0 && (
                    <div className="flex items-center space-x-1">
                      {getSpiceIndicator(item.spiceLevel)}
                    </div>
                  )}
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Add to Order</span>
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </section>
  );
}