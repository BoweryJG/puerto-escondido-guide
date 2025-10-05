'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, UtensilsCrossed, Heart, Sparkles, Leaf } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b-4 border-b-[#FF6B35] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold gradient-text hover:scale-105 transition-transform">
              Puerto Escondido 🌴
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/markets"
              className={`flex items-center gap-2 transition-all ${
                isActive('/markets')
                  ? 'text-[#00B4D8] font-bold scale-110'
                  : 'text-gray-700 hover:text-[#00B4D8] hover:scale-105'
              }`}
            >
              <ShoppingBag size={20} />
              Markets
            </Link>
            <Link
              href="/restaurants"
              className={`flex items-center gap-2 transition-all ${
                isActive('/restaurants')
                  ? 'text-[#FF6B35] font-bold scale-110'
                  : 'text-gray-700 hover:text-[#FF6B35] hover:scale-105'
              }`}
            >
              <UtensilsCrossed size={20} />
              Restaurants
            </Link>
            <Link
              href="/wellness"
              className={`flex items-center gap-2 transition-all ${
                isActive('/wellness')
                  ? 'text-[#E91E63] font-bold scale-110'
                  : 'text-gray-700 hover:text-[#E91E63] hover:scale-105'
              }`}
            >
              <Heart size={20} />
              Wellness
            </Link>
            <Link
              href="/experiences"
              className={`flex items-center gap-2 transition-all ${
                isActive('/experiences')
                  ? 'text-[#6A1B9A] font-bold scale-110'
                  : 'text-gray-700 hover:text-[#6A1B9A] hover:scale-105'
              }`}
            >
              <Sparkles size={20} />
              Experiences
            </Link>
            <Link
              href="/ingredients"
              className={`flex items-center gap-2 transition-all ${
                isActive('/ingredients')
                  ? 'text-[#8BC34A] font-bold scale-110'
                  : 'text-gray-700 hover:text-[#8BC34A] hover:scale-105'
              }`}
            >
              <Leaf size={20} />
              Ingredients
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-t-[#E91E63] shadow-2xl z-50">
        <div className="grid grid-cols-5 gap-1 p-2">
          <Link
            href="/markets"
            className={`flex flex-col items-center py-2 transition-all ${
              isActive('/markets') ? 'text-[#00B4D8] scale-110 font-bold' : 'text-gray-600'
            }`}
          >
            <ShoppingBag size={22} />
            <span className="text-xs mt-1">Markets</span>
          </Link>
          <Link
            href="/restaurants"
            className={`flex flex-col items-center py-2 transition-all ${
              isActive('/restaurants') ? 'text-[#FF6B35] scale-110 font-bold' : 'text-gray-600'
            }`}
          >
            <UtensilsCrossed size={22} />
            <span className="text-xs mt-1">Food</span>
          </Link>
          <Link
            href="/wellness"
            className={`flex flex-col items-center py-2 transition-all ${
              isActive('/wellness') ? 'text-[#E91E63] scale-110 font-bold' : 'text-gray-600'
            }`}
          >
            <Heart size={22} />
            <span className="text-xs mt-1">Wellness</span>
          </Link>
          <Link
            href="/experiences"
            className={`flex flex-col items-center py-2 transition-all ${
              isActive('/experiences') ? 'text-[#6A1B9A] scale-110 font-bold' : 'text-gray-600'
            }`}
          >
            <Sparkles size={22} />
            <span className="text-xs mt-1">Do</span>
          </Link>
          <Link
            href="/ingredients"
            className={`flex flex-col items-center py-2 transition-all ${
              isActive('/ingredients') ? 'text-[#8BC34A] scale-110 font-bold' : 'text-gray-600'
            }`}
          >
            <Leaf size={22} />
            <span className="text-xs mt-1">Foods</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
