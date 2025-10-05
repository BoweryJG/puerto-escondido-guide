'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, UtensilsCrossed, Heart, Sparkles, Leaf } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-amber-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-emerald-700">
              Puerto Escondido Guide
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/markets"
              className={`flex items-center gap-2 ${
                isActive('/markets')
                  ? 'text-emerald-700 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              <ShoppingBag size={18} />
              Markets
            </Link>
            <Link
              href="/restaurants"
              className={`flex items-center gap-2 ${
                isActive('/restaurants')
                  ? 'text-emerald-700 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              <UtensilsCrossed size={18} />
              Restaurants
            </Link>
            <Link
              href="/wellness"
              className={`flex items-center gap-2 ${
                isActive('/wellness')
                  ? 'text-emerald-700 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              <Heart size={18} />
              Wellness
            </Link>
            <Link
              href="/experiences"
              className={`flex items-center gap-2 ${
                isActive('/experiences')
                  ? 'text-emerald-700 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              <Sparkles size={18} />
              Experiences
            </Link>
            <Link
              href="/ingredients"
              className={`flex items-center gap-2 ${
                isActive('/ingredients')
                  ? 'text-emerald-700 font-semibold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              <Leaf size={18} />
              Ingredients
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-amber-200 shadow-lg z-50">
        <div className="grid grid-cols-5 gap-1 p-2">
          <Link
            href="/markets"
            className={`flex flex-col items-center py-2 ${
              isActive('/markets') ? 'text-emerald-700' : 'text-gray-600'
            }`}
          >
            <ShoppingBag size={20} />
            <span className="text-xs mt-1">Markets</span>
          </Link>
          <Link
            href="/restaurants"
            className={`flex flex-col items-center py-2 ${
              isActive('/restaurants') ? 'text-emerald-700' : 'text-gray-600'
            }`}
          >
            <UtensilsCrossed size={20} />
            <span className="text-xs mt-1">Food</span>
          </Link>
          <Link
            href="/wellness"
            className={`flex flex-col items-center py-2 ${
              isActive('/wellness') ? 'text-emerald-700' : 'text-gray-600'
            }`}
          >
            <Heart size={20} />
            <span className="text-xs mt-1">Wellness</span>
          </Link>
          <Link
            href="/experiences"
            className={`flex flex-col items-center py-2 ${
              isActive('/experiences') ? 'text-emerald-700' : 'text-gray-600'
            }`}
          >
            <Sparkles size={20} />
            <span className="text-xs mt-1">Do</span>
          </Link>
          <Link
            href="/ingredients"
            className={`flex flex-col items-center py-2 ${
              isActive('/ingredients') ? 'text-emerald-700' : 'text-gray-600'
            }`}
          >
            <Leaf size={20} />
            <span className="text-xs mt-1">Foods</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
