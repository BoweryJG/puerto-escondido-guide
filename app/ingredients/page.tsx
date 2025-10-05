'use client';

import { ingredients } from '@/data/ingredients';
import { Leaf, Sprout, Apple } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IngredientsPage() {
  return (
    <div className="min-h-screen pb-8">
      {/* Vibrant Hero Section */}
      <div className="bg-gradient-to-r from-[#8BC34A] to-[#FFD60A] text-white py-16 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 opacity-20 float-animation">
          <Leaf size={80} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 float-animation" style={{ animationDelay: '1s' }}>
          <Sprout size={60} />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-20 float-animation" style={{ animationDelay: '2s' }}>
          <Apple size={70} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <Leaf size={48} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-pacifico)' }}>
                  Ingredientes Locales 🌿
                </h1>
                <p className="text-2xl text-green-100 mt-1">Local Ingredients</p>
              </div>
            </div>
            <p className="text-xl text-green-50 mt-4 max-w-3xl">
              Oaxacan superfoods, traditional ingredients & nutrition info.
              Discover the power of ancient Mexican foods! 🌽🫘🍫
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
            <span className="gradient-text">{ingredients.length} Traditional Oaxacan Superfoods</span>
          </h2>
          <p className="text-gray-600 text-lg">Nutritional powerhouses rooted in ancient tradition</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover-lift p-6 border-4 border-[#8BC34A]"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-pacifico)' }}>
                {ingredient.name}
              </h3>

              {ingredient.scientificName && (
                <p className="text-sm italic text-gray-600 mb-4">{ingredient.scientificName}</p>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#8BC34A] mb-1 flex items-center gap-2">
                    <span className="text-xl">📅</span> Season
                  </h4>
                  <p className="text-gray-700">{ingredient.season}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#8BC34A] mb-1 flex items-center gap-2">
                    <span className="text-xl">💪</span> Nutrition Benefits
                  </h4>
                  <p className="text-gray-700">{ingredient.nutritionBenefits}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#8BC34A] mb-1 flex items-center gap-2">
                    <span className="text-xl">🍳</span> Traditional Uses
                  </h4>
                  <p className="text-gray-700">{ingredient.traditionalUses}</p>
                </div>

                <div className="bg-gradient-to-r from-[#8BC34A]/10 to-[#FFD60A]/10 border-l-4 border-[#8BC34A] p-4 rounded-r-xl">
                  <h4 className="font-semibold text-[#8BC34A] mb-1 flex items-center gap-2">
                    <span className="text-xl">📍</span> Where to Find
                  </h4>
                  <p className="text-sm text-gray-800 font-medium">{ingredient.whereToFind}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
