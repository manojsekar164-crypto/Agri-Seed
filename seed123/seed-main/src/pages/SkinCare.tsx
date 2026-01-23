import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, AlertCircle } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const skinConcerns = [
  { id: 'brightening', label: 'Dull Skin / Need Brightening', filter: 'Brightening' },
  { id: 'pigmentation', label: 'Dark Spots / Pigmentation', filter: 'Pigmentation Control' },
  { id: 'hydration', label: 'Dry Skin / Dehydration', filter: 'Hydration Support' },
  { id: 'anti-aging', label: 'Fine Lines / Aging Signs', filter: 'Anti-Aging' },
  { id: 'skin-repair', label: 'Damaged Skin / Need Repair', filter: 'Skin Repair' }
];

const SkinCare = () => {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleConcernToggle = (concernId: string) => {
    setSelectedConcerns(prev =>
      prev.includes(concernId)
        ? prev.filter(id => id !== concernId)
        : [...prev, concernId]
    );
    setShowRecommendations(false);
  };

  const getRecommendedSeeds = () => {
    if (selectedConcerns.length === 0) return [];

    const filters = selectedConcerns.map(
      concernId => skinConcerns.find(c => c.id === concernId)?.filter
    );

    return products.filter(product =>
      product.category === 'skin-care' &&
      product.skinBenefits?.some(benefit => filters.includes(benefit))
    );
  };

  const recommendedSeeds = getRecommendedSeeds();

  const getRecommendationText = () => {
    if (selectedConcerns.includes('brightening')) {
      return 'These seeds are rich in Vitamin C and antioxidants that naturally brighten your complexion and improve skin glow.';
    }
    if (selectedConcerns.includes('pigmentation')) {
      return 'These seeds contain powerful antioxidants and Vitamin E that help reduce dark spots and even out skin tone.';
    }
    if (selectedConcerns.includes('hydration')) {
      return 'These seeds provide Omega-3, Omega-6, and essential fatty acids that deeply hydrate and maintain skin moisture balance.';
    }
    if (selectedConcerns.includes('anti-aging')) {
      return 'These seeds are packed with polyphenols and antioxidants that protect skin from aging and improve elasticity.';
    }
    if (selectedConcerns.includes('skin-repair')) {
      return 'These seeds contain Vitamin A, enzymes, and nutrients that support skin renewal and repair damaged skin.';
    }
    return 'These seeds contain essential nutrients that support overall skin health and radiance.';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skin Care Recommendation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get personalized seed recommendations for glowing, healthy skin
          </p>
        </div>

        {/* Step 1: Select Concerns */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What are your skin concerns?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skinConcerns.map(concern => (
              <button
                key={concern.id}
                onClick={() => handleConcernToggle(concern.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  selectedConcerns.includes(concern.id)
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {concern.label}
                  </span>
                  {selectedConcerns.includes(concern.id) && (
                    <Check className="w-6 h-6 text-rose-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {selectedConcerns.length > 0 && (
            <button
              onClick={() => setShowRecommendations(true)}
              className="mt-6 w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-rose-600 hover:to-pink-700 transition-all"
            >
              Get Recommendations
            </button>
          )}
        </div>

        {/* Step 2: Recommendations */}
        {showRecommendations && recommendedSeeds.length > 0 && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Recommended Seeds for Your Skin
              </h2>
              <p className="text-rose-100 text-lg">
                {getRecommendationText()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedSeeds.map(product => (
                <div key={product.id}>
                  <ProductCard product={product} />
                  <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      How to Use:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {product.consumptionMethod.map((method, idx) => (
                        <li key={idx}>✓ {method}</li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">
                        Daily Limit: {product.dailyLimit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 dark:text-amber-200 mb-2">
                Important Disclaimer
              </h3>
              <p className="text-amber-800 dark:text-amber-300 text-sm">
                This platform provides nutritional information for skin health and does not replace medical or dermatological advice. Skin health depends on overall diet, lifestyle, genetics, and proper skincare routine. These seeds support skin health but are not medical treatment. Consult a dermatologist for persistent skin concerns.
              </p>
            </div>
          </div>
        </div>

        {/* View All Skin Seeds */}
        <div className="mt-8 text-center">
          <Link
            to="/products/skin-care"
            className="inline-block bg-white dark:bg-gray-800 text-rose-600 dark:text-rose-400 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-rose-500"
          >
            View All Skin Care Seeds
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkinCare;
