'use client';

import { motion } from 'framer-motion';
import { MapPin, Palmtree, Waves, Sun } from 'lucide-react';
import WavePattern from './WavePattern';

export default function BeachHero() {
  return (
    <div className="relative sunset-gradient text-white overflow-hidden wave-divider">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 float-animation">
          <Palmtree size={80} className="text-yellow-200" />
        </div>
        <div className="absolute top-20 right-20 float-animation" style={{ animationDelay: '1s' }}>
          <Sun size={100} className="text-yellow-300" />
        </div>
        <div className="absolute bottom-20 left-1/4 float-animation" style={{ animationDelay: '2s' }}>
          <Waves size={60} className="text-blue-200" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Title with gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-pacifico)' }}
          >
            ¡Bienvenida a Puerto Escondido!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-100">
              Your Personalized Nutrition & Wellness Guide
            </p>
            <p className="text-xl sm:text-2xl text-pink-100">
              Curated especially for <span className="font-bold text-yellow-200">Jennifer Sweenie</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-lg"
          >
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin size={24} />
              <span className="font-semibold">Oaxaca, México</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Waves size={24} />
              <span className="font-semibold">Beach Paradise</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-2xl">🌮</span>
              <span className="font-semibold">Food Heaven</span>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 animate-bounce"
          >
            <div className="text-sm font-semibold">Scroll to explore</div>
            <div className="text-3xl">↓</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave pattern at bottom */}
      <WavePattern className="absolute bottom-0" />
    </div>
  );
}
