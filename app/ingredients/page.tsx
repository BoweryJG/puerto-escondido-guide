import { ingredients } from '@/data/ingredients';
import { Leaf } from 'lucide-react';

export default function IngredientsPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="bg-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Leaf size={40} />
            <h1 className="text-4xl font-bold">Oaxacan Ingredients</h1>
          </div>
          <p className="text-green-100 text-lg">
            Local superfoods, traditional ingredients, and nutritional information
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ingredients.map(ingredient => (
            <div key={ingredient.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{ingredient.name}</h3>

              {ingredient.scientificName && (
                <p className="text-sm italic text-gray-600 mb-3">{ingredient.scientificName}</p>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-1">Season</h4>
                  <p className="text-gray-700">{ingredient.season}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 mb-1">Nutrition Benefits</h4>
                  <p className="text-gray-700">{ingredient.nutritionBenefits}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 mb-1">Traditional Uses</h4>
                  <p className="text-gray-700">{ingredient.traditionalUses}</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-3">
                  <h4 className="font-semibold text-green-900 mb-1">Where to Find</h4>
                  <p className="text-sm text-green-800">{ingredient.whereToFind}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
