import { locations } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import { Sparkles } from 'lucide-react';

export default function ExperiencesPage() {
  const experiences = locations.filter(loc => loc.category === 'experience');

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="bg-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={40} />
            <h1 className="text-4xl font-bold">Experiences</h1>
          </div>
          <p className="text-purple-100 text-lg">
            Cooking classes, market tours, and mezcal tastings
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map(location => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}
