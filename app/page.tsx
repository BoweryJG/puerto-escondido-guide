import Link from 'next/link';
import { ShoppingBag, UtensilsCrossed, Heart, Sparkles, Leaf, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Puerto Escondido
            </h1>
            <p className="text-xl sm:text-2xl mb-2 text-emerald-100">
              Your Personalized Nutrition & Wellness Guide
            </p>
            <p className="text-lg text-emerald-200 mb-8">
              Curated especially for Jennifer Sweenie
            </p>
            <div className="flex items-center justify-center gap-2 text-emerald-100">
              <MapPin size={20} />
              <span>Oaxaca, Mexico</span>
            </div>
          </div>
        </div>
      </div>

      {/* Jennifer's Note */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-l-4 border-emerald-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Made Just For You, Jennifer! 🌿
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            As a functional nutritional therapy practitioner and health-supportive chef, this guide highlights the best organic markets, farm-to-table restaurants, traditional Oaxacan cuisine experiences, and wellness activities in Puerto Escondido.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every location has been researched with your professional expertise in mind - from organic ingredient sources to traditional food preparation methods, sustainable practices, and nutritional highlights of local superfoods.
          </p>
        </div>
      </div>

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Markets */}
          <Link href="/markets" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-emerald-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <ShoppingBag className="text-emerald-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Markets & Shops</h3>
              </div>
              <p className="text-gray-600">
                Organic markets, traditional vendors, and farm-direct produce
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                  5 locations
                </span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                  Organic
                </span>
              </div>
            </div>
          </Link>

          {/* Restaurants */}
          <Link href="/restaurants" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                  <UtensilsCrossed className="text-amber-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Restaurants & Cafes</h3>
              </div>
              <p className="text-gray-600">
                Vegan, vegetarian, and fresh seafood spots with healthy options
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                  18 locations
                </span>
                <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                  Farm-to-Table
                </span>
              </div>
            </div>
          </Link>

          {/* Wellness */}
          <Link href="/wellness" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-rose-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-rose-100 rounded-lg group-hover:bg-rose-200 transition-colors">
                  <Heart className="text-rose-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Wellness & Yoga</h3>
              </div>
              <p className="text-gray-600">
                Yoga retreats, wellness centers, and holistic experiences
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded">
                  3 locations
                </span>
                <span className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded">
                  Retreats
                </span>
              </div>
            </div>
          </Link>

          {/* Experiences */}
          <Link href="/experiences" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Sparkles className="text-purple-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Experiences</h3>
              </div>
              <p className="text-gray-600">
                Cooking classes, market tours, and mezcal tastings
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                  4 experiences
                </span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                  Traditional
                </span>
              </div>
            </div>
          </Link>

          {/* Ingredients */}
          <Link href="/ingredients" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-transparent hover:border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Leaf className="text-green-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Local Ingredients</h3>
              </div>
              <p className="text-gray-600">
                Oaxacan superfoods, traditional ingredients, and nutrition info
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                  12 ingredients
                </span>
                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                  Superfoods
                </span>
              </div>
            </div>
          </Link>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-xl shadow-md p-6 border-2 border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Markets are best before 10 AM</li>
              <li>✓ La Punta has the best wellness cafes</li>
              <li>✓ Try mezcal tours Tue/Thu/Sat</li>
              <li>✓ Ask vendors about organic practices</li>
              <li>✓ Fresh seafood daily at coastal spots</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">30+</div>
              <div className="text-gray-600">Curated Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">12</div>
              <div className="text-gray-600">Local Superfoods</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">100%</div>
              <div className="text-gray-600">For Jennifer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
