import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import { ShoppingBag } from 'lucide-react';

export default function MarketsPage() {
  const markets = locations.filter(loc => loc.category === 'market');

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="bg-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag size={40} />
            <h1 className="text-4xl font-bold">Markets & Shops</h1>
          </div>
          <p className="text-emerald-100 text-lg">
            Organic markets, traditional vendors, and farm-direct produce
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {markets.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}
