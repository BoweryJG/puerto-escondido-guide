'use client';

import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import { UtensilsCrossed, Coffee, Fish } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RestaurantsPage() {
  const restaurants = locations.filter(loc =>
    loc.category === 'restaurant' || loc.category === 'cafe' || loc.category === 'seafood'
  );

  const cafes = restaurants.filter(r => r.category === 'cafe');
  const veganVeg = restaurants.filter(r => r.category === 'restaurant');
  const seafood = restaurants.filter(r => r.category === 'seafood');

  return (
    <div className="min-h-screen pb-8">
      {/* Vibrant Hero Section */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C94] text-white py-16 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 opacity-20 float-animation">
          <UtensilsCrossed size={80} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 float-animation" style={{ animationDelay: '1s' }}>
          <Coffee size={60} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-20 float-animation" style={{ animationDelay: '2s' }}>
          <Fish size={70} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <UtensilsCrossed size={48} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-pacifico)' }}>
                  Restaurantes & Cafés 🌮
                </h1>
                <p className="text-2xl text-orange-100 mt-1">Restaurants & Cafes</p>
              </div>
            </div>
            <p className="text-xl text-orange-50 mt-4 max-w-3xl">
              Vegan, vegetarian, and fresh seafood with healthy options.
              From sunrise smoothie bowls to sunset fish tacos! ☕🥗🐟
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cafes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Coffee className="text-[#FF6B35]" size={32} />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Cafés & Breakfast Spots ☕</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg mb-8">Start your day with fresh-pressed juice and organic bowls</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cafes.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <LocationCard location={location} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vegan/Vegetarian */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <UtensilsCrossed className="text-[#8BC34A]" size={32} />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Vegan & Vegetarian 🌱</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg mb-8">Plant-based paradise with creative, nutritious dishes</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {veganVeg.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <LocationCard location={location} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seafood */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Fish className="text-[#00B4D8]" size={32} />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Fresh Seafood 🐟</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg mb-8">Daily catch from local fishermen, prepared with love</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seafood.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <LocationCard location={location} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
