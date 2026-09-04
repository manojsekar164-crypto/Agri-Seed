import { ShoppingCart, Check, Heart, Info, Sprout, Activity, Brain, Heart as HeartIcon, Bone, Shield, Scale, Sparkles, Gem } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

// Health category mapping
const healthCategoryIcons: Record<string, { icon: any; color: string; label: string }> = {
  'heart-health': { icon: HeartIcon, color: 'text-red-500', label: 'Heart' },
  'brain-health': { icon: Brain, color: 'text-purple-500', label: 'Brain' },
  'diabetes-control': { icon: Activity, color: 'text-blue-500', label: 'Diabetes' },
  'bone-strength': { icon: Bone, color: 'text-orange-500', label: 'Bones' },
  'immunity-boost': { icon: Shield, color: 'text-green-500', label: 'Immunity' },
  'weight-management': { icon: Scale, color: 'text-teal-500', label: 'Weight' },
  'hair-health': { icon: Sparkles, color: 'text-pink-500', label: 'Hair' },
  'skin-care': { icon: Gem, color: 'text-rose-500', label: 'Skin' }
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [justAdded, setJustAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const isInCart = cart.some(item => item.id === product.id);
  const isWishlisted = isInWishlist(product.id);

  const categoryInfo = healthCategoryIcons[product.category];
  const CategoryIcon = categoryInfo?.icon;

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      setWishlistAdded(true);
      setTimeout(() => setWishlistAdded(false), 2000);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
        {/* Default Seed Card Header - No image, only seed name & badges */}
        <div 
          className="relative overflow-hidden p-4 cursor-pointer bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 border-b border-gray-100 dark:border-gray-700"
          onClick={() => setShowInfo(true)}
        >
          {/* Top Actions: Category Badge, Info & Wishlist */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-gray-800 dark:text-white px-2.5 py-1 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              {CategoryIcon && <CategoryIcon className={`w-3.5 h-3.5 ${categoryInfo.color}`} />}
              <span className="text-xs font-bold">{categoryInfo?.label}</span>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowInfo(true);
                }}
                className="p-1.5 rounded-full bg-white/90 dark:bg-gray-700/90 text-green-600 dark:text-green-400 hover:bg-white shadow-sm transition-all"
                title="View Seed Details"
              >
                <Info className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWishlistToggle();
                }}
                className={`p-1.5 rounded-full shadow-sm transition-all transform hover:scale-110 ${
                  isWishlisted || wishlistAdded
                    ? 'bg-red-500 text-white'
                    : 'bg-white/90 dark:bg-gray-700/90 text-gray-600 hover:text-red-500'
                }`}
                title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart 
                  className={`w-4 h-4 ${isWishlisted || wishlistAdded ? 'fill-current' : ''}`} 
                />
              </button>
            </div>
          </div>

          {/* Default Seed Emblem & Seed Name */}
          <div className="flex flex-col items-center text-center py-2">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-700 shadow-sm border border-green-100 dark:border-gray-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
              <Sprout className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
              {product.name}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
              {product.benefits || product.description}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="mb-3">
            <div className="flex flex-wrap gap-1 mb-2">
              {product.nutrients.slice(0, 2).map((nutrient, idx) => (
                <span key={idx} className="text-[11px] bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-0.5 rounded font-medium">
                  {nutrient}
                </span>
              ))}
            </div>
          </div>

          {/* Price and Action Row */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
            <div>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                ₹{product.price}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">/ pack</span>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-md hover:shadow-lg ${
                justAdded
                  ? 'bg-green-600 text-white'
                  : isInCart
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Info Popup */}
      {showInfo && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowInfo(false)}
          />
          
          {/* Popup */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 w-11/12 max-w-md max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <button
                  onClick={() => setShowInfo(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Health Benefits */}
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Health Benefits
                </h4>
                <ul className="space-y-1">
                  {product.healthBenefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 pl-6">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutrients */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-blue-600 mr-2">💊</span> Key Nutrients
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.nutrients.map((nutrient, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full font-semibold">
                      {nutrient}
                    </span>
                  ))}
                </div>
              </div>

              {/* How to Consume */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-orange-600 mr-2">🥄</span> How to Consume
                </h4>
                <ul className="space-y-1">
                  {product.consumptionMethod.map((method, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 pl-6">
                      • {method}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Daily Limit */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-purple-600 mr-2">⏰</span> Recommended Daily Intake
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  {product.dailyLimit}
                </p>
              </div>

              {/* Precautions */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="text-red-600 mr-2">⚠️</span> Precautions
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  {product.precautions}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  handleAddToCart();
                  setShowInfo(false);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all"
              >
                Add to Cart - ₹{product.price}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
