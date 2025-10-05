'use client';

import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import { ShoppingBag, Palmtree } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MarketsPage() {
  const markets = locations.filter(loc => loc.category === 'market');

  return (
    <div className="min-h-screen pb-8">
      {/* Vibrant Hero Section */}
      <div className="bg-gradient-to-r from-[#00B4D8] to-[#06D6A0] text-white py-16 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 opacity-20 float-animation">
          <Palmtree size={80} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 float-animation" style={{ animationDelay: '1s' }}>
          <ShoppingBag size={60} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <ShoppingBag size={48} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-pacifico)' }}>
                  Mercados & Tiendas 🛒
                </h1>
                <p className="text-2xl text-blue-100 mt-1">Markets & Shops</p>
              </div>
            </div>
            <p className="text-xl text-blue-50 mt-4 max-w-3xl">
              Fresh organic markets, traditional vendors, and farm-direct produce.
              Shop where locals shop and discover Oaxaca&apos;s bounty! 🌽🥑🍅
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
            <span className="gradient-text">{markets.length} Amazing Markets to Explore</span>
          </h2>
          <p className="text-gray-600 text-lg">Each handpicked for quality, freshness, and authentic Oaxacan flavor</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {markets.map((location, index) => (
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
