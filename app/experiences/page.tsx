'use client';

import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import { Sparkles, ChefHat, Wine } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperiencesPage() {
  const experiences = locations.filter(loc => loc.category === 'experience');

  return (
    <div className="min-h-screen pb-8">
      {/* Vibrant Hero Section */}
      <div className="bg-gradient-to-r from-[#6A1B9A] to-[#00B4D8] text-white py-16 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 opacity-20 float-animation">
          <Sparkles size={80} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 float-animation" style={{ animationDelay: '1s' }}>
          <ChefHat size={60} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-20 float-animation" style={{ animationDelay: '2s' }}>
          <Wine size={70} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <Sparkles size={48} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-pacifico)' }}>
                  Experiencias ✨
                </h1>
                <p className="text-2xl text-purple-100 mt-1">Experiences</p>
              </div>
            </div>
            <p className="text-xl text-purple-50 mt-4 max-w-3xl">
              Cooking classes, market tours, and mezcal tastings.
              Immerse yourself in authentic Oaxacan culture! 👨‍🍳🥃📸
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">{experiences.length} Unforgettable Cultural Experiences</span>
          </h2>
          <p className="text-gray-600 text-lg">From traditional cooking to artisanal mezcal tastings</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LocationCard location={location} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
