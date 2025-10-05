'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, UtensilsCrossed, Heart, Sparkles, Leaf, Star, TrendingUp, MapPin } from 'lucide-react';
import BeachHero from '@/components/BeachHero';

export default function Home() {
  const categories = [
    {
      href: '/markets',
      icon: ShoppingBag,
      title: 'Mercados & Tiendas',
      subtitle: 'Markets & Shops',
      description: 'Organic markets, traditional vendors & farm-direct produce',
      color: 'from-[#00B4D8] to-[#06D6A0]',
      borderColor: 'border-[#00B4D8]',
      shadowColor: 'card-shadow-blue',
      count: '5 locations',
      emoji: '🛒'
    },
    {
      href: '/restaurants',
      icon: UtensilsCrossed,
      title: 'Restaurantes & Cafés',
      subtitle: 'Restaurants & Cafes',
      description: 'Vegan, vegetarian & fresh seafood with healthy options',
      color: 'from-[#FF6B35] to-[#FF8C94]',
      borderColor: 'border-[#FF6B35]',
      shadowColor: 'card-shadow-orange',
      count: '18 locations',
      emoji: '🌮'
    },
    {
      href: '/wellness',
      icon: Heart,
      title: 'Bienestar & Yoga',
      subtitle: 'Wellness & Yoga',
      description: 'Yoga retreats, wellness centers & holistic experiences',
      color: 'from-[#E91E63] to-[#6A1B9A]',
      borderColor: 'border-[#E91E63]',
      shadowColor: 'card-shadow-pink',
      count: '9 locations',
      emoji: '🧘'
    },
    {
      href: '/experiences',
      icon: Sparkles,
      title: 'Experiencias',
      subtitle: 'Experiences',
      description: 'Cooking classes, market tours & mezcal tastings',
      color: 'from-[#6A1B9A] to-[#00B4D8]',
      borderColor: 'border-[#6A1B9A]',
      shadowColor: 'card-shadow-pink',
      count: '11 experiences',
      emoji: '✨'
    },
    {
      href: '/ingredients',
      icon: Leaf,
      title: 'Ingredientes Locales',
      subtitle: 'Local Ingredients',
      description: 'Oaxacan superfoods, traditional ingredients & nutrition info',
      color: 'from-[#8BC34A] to-[#FFD60A]',
      borderColor: 'border-[#8BC34A]',
      shadowColor: 'card-shadow-blue',
      count: '12 ingredients',
      emoji: '🌿'
    },
  ];

  return (
    <div className="min-h-screen pb-8">
      {/* Beach Hero Section */}
      <BeachHero />

      {/* Jennifer's Personal Note */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-l-8 border-l-[#E91E63]"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">¡Hola Jennifer! 🌺</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3 text-lg">
            As a <strong>functional nutritional therapy practitioner</strong> and <strong>health-supportive chef</strong>,
            this guide showcases the absolute best organic markets, farm-to-table restaurants, traditional Oaxacan
            cuisine experiences, and wellness activities in Puerto Escondido.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Every location has been personally researched with your professional expertise in mind - from organic
            ingredient sources to traditional food preparation methods, sustainable practices, and nutritional highlights
            of local superfoods. <span className="text-[#E91E63] font-semibold">¡Disfruta tu aventura! 🌮🥑</span>
          </p>
        </motion.div>
      </div>

      {/* Category Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="gradient-text">Explore Puerto Escondido</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href} className="group block">
                <div className={`bg-white rounded-2xl ${category.shadowColor} hover-lift p-6 border-4 ${category.borderColor} h-full`}>
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 bg-gradient-to-br ${category.color} rounded-xl group-hover:scale-110 transition-transform`}>
                      <category.icon className="text-white" size={32} />
                    </div>
                    <span className="text-4xl">{category.emoji}</span>
                  </div>

                  {/* Spanish Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-pacifico)' }}>
                    {category.title}
                  </h3>

                  {/* English Subtitle */}
                  <p className="text-sm text-gray-500 mb-3 font-semibold">
                    {category.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Count Badge */}
                  <div className="flex items-center gap-2">
                    <span className="badge-new text-xs">
                      {category.count}
                    </span>
                    <span className="text-gray-500 text-sm">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Quick Tips Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-[#FFD60A] via-[#FF6B35] to-[#E91E63] rounded-2xl shadow-2xl p-6 text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-white" size={28} />
              <h3 className="text-2xl font-bold">Tips Rápidos</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-xl">🌅</span>
                <span>Markets: Best before 10 AM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🏖️</span>
                <span>La Punta: Top wellness cafes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🥃</span>
                <span>Mezcal tours: Tue/Thu/Sat 3:30pm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🌱</span>
                <span>Ask vendors about organic practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🐟</span>
                <span>Fresh catch daily at coastal spots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">💚</span>
                <span>Support local & sustainable businesses</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#00B4D8] via-[#E91E63] to-[#6A1B9A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Curated Locations</div>
              <div className="text-sm opacity-75">Handpicked for you</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">12</div>
              <div className="text-xl opacity-90">Local Superfoods</div>
              <div className="text-sm opacity-75">With nutrition info</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
              <div className="text-xl opacity-90">For Jennifer</div>
              <div className="text-sm opacity-75">Personalized content</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">∞</div>
              <div className="text-xl opacity-90">Adventure</div>
              <div className="text-sm opacity-75">Awaits you!</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Why Puerto Escondido?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
            <div className="text-6xl mb-4">🌊</div>
            <h3 className="text-2xl font-bold mb-2 text-[#00B4D8]">Beach Paradise</h3>
            <p className="text-gray-700">World-class beaches, perfect waves, stunning sunsets</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
            <div className="text-6xl mb-4">🍃</div>
            <h3 className="text-2xl font-bold mb-2 text-[#8BC34A]">Organic Heaven</h3>
            <p className="text-gray-700">Farm-fresh produce, traditional ingredients, sustainable practices</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-2 text-[#E91E63]">Rich Culture</h3>
            <p className="text-gray-700">Oaxacan traditions, artisan crafts, authentic experiences</p>
          </div>
        </div>
      </div>
    </div>
  );
}
