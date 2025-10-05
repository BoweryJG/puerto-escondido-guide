import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import { UtensilsCrossed } from 'lucide-react';

export default function RestaurantsPage() {
  const restaurants = locations.filter(loc =>
    loc.category === 'restaurant' || loc.category === 'cafe' || loc.category === 'seafood'
  );

  const cafes = restaurants.filter(r => r.category === 'cafe');
  const veganVeg = restaurants.filter(r => r.category === 'restaurant');
  const seafood = restaurants.filter(r => r.category === 'seafood');

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="bg-amber-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <UtensilsCrossed size={40} />
            <h1 className="text-4xl font-bold">Restaurants & Cafes</h1>
          </div>
          <p className="text-amber-100 text-lg">
            Vegan, vegetarian, and fresh seafood spots with healthy options
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cafes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cafes & Breakfast Spots</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cafes.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>

        {/* Vegan/Vegetarian */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vegan & Vegetarian</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {veganVeg.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>

        {/* Seafood */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fresh Seafood</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {seafood.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
