'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, UtensilsCrossed, Heart, Sparkles, Leaf, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PuertoLogo from './PuertoLogo';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: '/markets', icon: ShoppingBag, label: 'Markets', color: '#00B4D8' },
    { href: '/restaurants', icon: UtensilsCrossed, label: 'Restaurants', color: '#FF6B35' },
    { href: '/wellness', icon: Heart, label: 'Wellness', color: '#E91E63' },
    { href: '/experiences', icon: Sparkles, label: 'Experiences', color: '#6A1B9A' },
    { href: '/ingredients', icon: Leaf, label: 'Ingredients', color: '#8BC34A' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="bg-white border-b-4 border-b-[#FF6B35] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
                <PuertoLogo className="w-10 h-10" />
                <span className="text-xl font-bold gradient-text hidden sm:inline">
                  Puerto Escondido
                </span>
                <span className="text-xl font-bold gradient-text sm:hidden">
                  Puerto
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 transition-all ${
                    isActive(item.href)
                      ? 'font-bold scale-110'
                      : 'text-gray-700 hover:scale-105'
                  }`}
                  style={{ color: isActive(item.href) ? item.color : undefined }}
                >
                  <item.icon size={20} />
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Menu Header */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold gradient-text mb-2">Explore</h2>
                  <p className="text-gray-600">Puerto Escondido Guide</p>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                          isActive(item.href)
                            ? 'bg-gradient-to-r shadow-lg scale-105'
                            : 'hover:bg-gray-50'
                        }`}
                        style={{
                          background: isActive(item.href)
                            ? `linear-gradient(135deg, ${item.color}15, ${item.color}05)`
                            : undefined,
                          borderLeft: isActive(item.href) ? `4px solid ${item.color}` : '4px solid transparent',
                        }}
                      >
                        <div
                          className="p-3 rounded-lg"
                          style={{
                            backgroundColor: `${item.color}15`,
                            color: item.color
                          }}
                        >
                          <item.icon size={24} />
                        </div>
                        <div>
                          <div
                            className="font-semibold text-lg"
                            style={{ color: isActive(item.href) ? item.color : '#1f2937' }}
                          >
                            {item.label}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Home Link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-8 border-t border-gray-200"
                >
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <PuertoLogo className="w-8 h-8" />
                    <span className="font-semibold text-gray-700">Home</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
