import { Location } from '@/lib/types';
import { MapPin, Phone, Globe, Instagram, DollarSign } from 'lucide-react';

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  const priceRangeDisplay = location.priceRange;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
        <div className="flex items-center text-emerald-600 font-semibold">
          <DollarSign size={16} />
          <span>{priceRangeDisplay}</span>
        </div>
      </div>

      {location.subcategory && (
        <div className="text-sm text-emerald-700 font-medium mb-2">
          {location.subcategory}
        </div>
      )}

      <p className="text-gray-700 mb-4">{location.description}</p>

      {location.highlights && location.highlights.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
          <ul className="space-y-1">
            {location.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {location.jenniferNote && (
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 mb-4">
          <p className="text-sm font-semibold text-emerald-900 mb-1">Jennifer&apos;s Note:</p>
          <p className="text-sm text-emerald-800">{location.jenniferNote}</p>
        </div>
      )}

      <div className="space-y-2 text-sm text-gray-600">
        {location.address && (
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gray-400" />
            <span>{location.address}</span>
          </div>
        )}
        {location.hours && (
          <div className="flex items-start gap-2">
            <span className="text-gray-400">⏰</span>
            <span>{location.hours}</span>
          </div>
        )}
        {location.phone && (
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gray-400" />
            <span>{location.phone}</span>
          </div>
        )}
        {location.website && (
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-gray-400" />
            <a
              href={location.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 hover:underline"
            >
              Visit website
            </a>
          </div>
        )}
        {location.instagram && (
          <div className="flex items-center gap-2">
            <Instagram size={16} className="text-gray-400" />
            <a
              href={`https://instagram.com/${location.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 hover:underline"
            >
              {location.instagram}
            </a>
          </div>
        )}
      </div>

      {location.tags && location.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {location.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
