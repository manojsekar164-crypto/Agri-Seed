import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, AlertCircle } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const hairConcerns = [
  { id: 'hair-fall', label: 'Hair Fall', filter: 'Hair Fall Control' },
  { id: 'thin-hair', label: 'Thin Hair / Low Density', filter: 'Hair Density' },
  { id: 'dry-scalp', label: 'Dry Scalp', filter: 'Scalp Health' },
  { id: 'weak-roots', label: 'Weak Hair Roots', filter: 'Hair Fall Control' }
];

const HairCare = () => {
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
      concernId => hairConcerns.find(c => c.id === concernId)?.filter
    );

    return products.filter(product =>
      product.category === 'hair-health' &&
      product.hairBenefits?.some(benefit => filters.includes(benefit))
    );
  };

  const recommendedSeeds = getRecommendedSeeds();

  const getRecommendationText = () => {
    if (selectedConcerns.includes('hair-fall') && selectedConcerns.includes('thin-hair')) {
      return 'These seeds are rich in Zinc, Protein, and Omega-3 fatty acids that support hair strength and reduce hair shedding.';
    }
    if (selectedConcerns.includes('dry-scalp')) {
      return 'These seeds contain Vitamin E and essential fatty acids that nourish your scalp and improve moisture retention.';
    }
    if (selectedConcerns.includes('weak-roots')) {
      return 'These seeds provide Iron, Biotin, and Protein to strengthen hair follicles from the roots.';
    }
    return 'These seeds contain essential nutrients that support overall hair health.';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hair Care Recommendation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get personalized seed recommendations based on your hair concerns
          </p>
        </div>

        {/* Step 1: Select Concerns */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What are your hair concerns?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hairConcerns.map(concern => (
              <button
                key={concern.id}
                onClick={() => handleConcernToggle(concern.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  selectedConcerns.includes(concern.id)
                    ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {concern.label}
                  </span>
                  {selectedConcerns.includes(concern.id) && (
                    <Check className="w-6 h-6 text-pink-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {selectedConcerns.length > 0 && (
            <button
              onClick={() => setShowRecommendations(true)}
              className="mt-6 w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-rose-700 transition-all"
            >
              Get Recommendations
            </button>
          )}
        </div>

        {/* Step 2: Recommendations */}
        {showRecommendations && recommendedSeeds.length > 0 && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Recommended Seeds for You
              </h2>
              <p className="text-pink-100 text-lg">
                {getRecommendationText()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedSeeds.map(product => (
                <div key={product.id}>
                  <ProductCard product={product} />
                  <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      How to Consume:
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {product.consumptionMethod.map((method, idx) => (
                        <li key={idx}>✓ {method}</li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-pink-600 dark:text-pink-400">
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
                Hair health depends on overall diet, lifestyle, and genetics. These seeds support hair health but are not medical treatment. This platform provides nutritional information only and does not replace medical advice. Consult a healthcare professional for persistent hair concerns.
              </p>
            </div>
          </div>
        </div>

        {/* View All Hair Seeds */}
        <div className="mt-8 text-center">
          <Link
            to="/products/hair-health"
            className="inline-block bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-pink-500"
          >
            View All Hair Health Seeds
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HairCare;
