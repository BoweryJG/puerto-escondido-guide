export type LocationCategory =
  | 'market'
  | 'restaurant'
  | 'cafe'
  | 'wellness'
  | 'experience'
  | 'seafood';

export type Tag =
  | 'organic'
  | 'vegan'
  | 'vegetarian'
  | 'gluten-free'
  | 'paleo'
  | 'local'
  | 'traditional'
  | 'healthy'
  | 'sustainable'
  | 'farm-to-table'
  | 'juice-bar'
  | 'breakfast'
  | 'cooking-class'
  | 'mezcal'
  | 'yoga'
  | 'retreat'
  | 'wellness'
  | 'ceviche'
  | 'seafood'
  | 'sound-healing'
  | 'holistic'
  | 'food-tour'
  | 'coffee'
  | 'eco-tour'
  | 'photography'
  | 'chocolate'
  | 'beach'
  | 'dining';

export interface Location {
  id: string;
  name: string;
  category: LocationCategory;
  subcategory?: string;
  description: string;
  address: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  website?: string;
  instagram?: string;
  hours?: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  tags: Tag[];
  imageUrl?: string;
  highlights?: string[];
  jenniferNote?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  scientificName?: string;
  season: string;
  nutritionBenefits: string;
  traditionalUses: string;
  whereToFind: string;
  imageUrl?: string;
}

export interface Itinerary {
  id: string;
  name: string;
  description: string;
  locations: string[]; // location IDs
  timeSlots: { time: string; locationId: string; activity: string }[];
}
