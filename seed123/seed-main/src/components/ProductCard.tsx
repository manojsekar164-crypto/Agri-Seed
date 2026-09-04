import { ShoppingCart, Check, Heart, Info, Sprout, Activity, Brain, Heart as HeartIcon, Bone, Shield, Scale, Sparkles, Gem } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

// Health category color themes
const categoryThemes: Record<string, {
  icon: any;
  label: string;
  gradient: string;
  emblemBg: string;
  badgeBg: string;
  accentText: string;
  borderAccent: string;
  pillBg: string;
}> = {
  'heart-health': {
    icon: HeartIcon,
    label: 'Heart Health',
    gradient: 'from-rose-500/15 via-red-500/10 to-pink-500/5 dark:from-rose-950/40 dark:via-red-900/20 dark:to-gray-800',
    emblemBg: 'bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-rose-200 dark:shadow-none',
    badgeBg: 'bg-rose-100/80 text-rose-800 border-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:border-rose-800',
    accentText: 'text-rose-600 dark:text-rose-400',
    borderAccent: 'border-t-rose-500',
    pillBg: 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300'
  },
  'brain-health': {
    icon: Brain,
    label: 'Brain Health',
    gradient: 'from-indigo-500/15 via-purple-500/10 to-violet-500/5 dark:from-indigo-950/40 dark:via-purple-900/20 dark:to-gray-800',
    emblemBg: 'bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-indigo-200 dark:shadow-none',
    badgeBg: 'bg-indigo-100/80 text-indigo-800 border-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-800',
    accentText: 'text-indigo-600 dark:text-indigo-400',
    borderAccent: 'border-t-indigo-500',
    pillBg: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
  },
  'diabetes-control': {
    icon: Activity,
    label: 'Diabetes Care',
    gradient: 'from-sky-500/15 via-blue-500/10 to-cyan-500/5 dark:from-sky-950/40 dark:via-blue-900/20 dark:to-gray-800',
    emblemBg: 'bg-gradient-to-tr from-sky-500 to-blue-600 text-white shadow-sky-200 dark:shadow-none',
    badgeBg: 'bg-sky-100/80 text-sky-800 border-sky-200 dark:bg-sky-900/40 dark:text-sky-300 dark:border-sky-800',
    accentText: 'text-sky-600 dark:text-sky-400',
    borderAccent: 'border-t-sky-500',
    pillBg: 'bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300'
  },
  'bone-strength': {
    icon: Bone,
    label: 'Bone Strength',
    gradient: 'from-amber-500/15 via-orange-500/10 to-yellow-500/5 dark:from-amber-950/40 dark:via-orange-900/20 dark:to-gray-800',
    emblemBg: 'bg-gradient-to-tr from-amber-500 to-orange-600 text-white shadow-amber-200 dark:shadow-none',
    badgeBg: 'bg-amber-100/80 text-amber-800 border-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-800',
    accentText: 'text-amber-600 dark:text-amber-400',
    borderAccent: 'border-t-amber-500',
    pillBg: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300'
  },
  'immunity-boost': {
    icon: Shield,
    label: 'Immunity Boost',
    gradient: 'from-emerald-500/15 via-green-500/10 to-teal-500/5 dark:from-emerald-950/40 dark:via-green-900/20 dark:to-gray-800',
    emblemBg: 'bg-gradient-to-tr from-emerald-500 to-green-600 text-white shadow-emerald-200 dark:shadow-none',
    badgeBg: 'bg-emerald-100/80 text-emerald-800 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-800',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    borderAccent: 'border-t-emerald-500',
    pillBg: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
  },
  'weight-management': {
    icon: Scale,
    label: 'Weight Control',
    gradient: 'from-teal-500/15 via-emerald-500/10 to-cyan-500/5 dark:from-teal-950/40 dark:via-emerald-900/20 dark:to-gray-800',
    emblemBg: 'bg-gradient-to-tr from-teal-500 to-emerald-600 text-white shadow-teal-200 dark:shadow-none',
    badgeBg: 'bg-teal-100/80 text-teal-800 border-teal-200 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-800',
    accentText: 'text-teal-600 dark:text-teal-400',
    borderAccent: 'border-t-teal-500',
    pillBg: 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300'
  },
  'hair-health': {
    icon: Sparkles,
    label: 'Hair Health',
    gradient: 'from-pink-500/15 via-rose-500/10 to-fuchsia-500/5 dark:from-pink-950/40 dark:via-rose-900/20 dark:to-gray-800',
    emblemBg: 'bg-gradient-to-tr from-pink-500 to-rose-600 text-white shadow-pink-200 dark:shadow-none',
    badgeBg: 'bg-pink-100/80 text-pink-800 border-pink-200 dark:bg-pink-900/40 dark:text-pink-300 dark:border-pink-800',
    accentText: 'text-pink-600 dark:text-pink-400',
    borderAccent: 'border-t-pink-500',
    pillBg: 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300'
  },
  'skin-care': {
    icon: Gem,
    label: 'Skin Care',
    gradient: 'from-rose-500/15 via-pink-500/10 to-orange-500/5 dark:from-rose-950/40 dark:via-pink-900/20 dark:to-gray-800',
    emblemBg: 'bg-gradient-to-tr from-rose-400 to-pink-600 text-white shadow-rose-200 dark:shadow-none',
    badgeBg: 'bg-rose-100/80 text-rose-800 border-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:border-rose-800',
    accentText: 'text-rose-600 dark:text-rose-400',
    borderAccent: 'border-t-rose-500',
    pillBg: 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300'
  }
};

const defaultCategoryTheme = {
  icon: Sprout,
  label: 'Natural Seed',
  gradient: 'from-emerald-500/15 via-green-500/10 to-teal-500/5 dark:from-emerald-950/40 dark:via-green-900/20 dark:to-gray-800',
  emblemBg: 'bg-gradient-to-tr from-emerald-500 to-green-600 text-white shadow-emerald-200 dark:shadow-none',
  badgeBg: 'bg-emerald-100/80 text-emerald-800 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-800',
  accentText: 'text-emerald-600 dark:text-emerald-400',
  borderAccent: 'border-t-emerald-500',
  pillBg: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [justAdded, setJustAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const isInCart = cart.some(item => item.id === product.id);
  const isWishlisted = isInWishlist(product.id);

  const theme = categoryThemes[product.category] || defaultCategoryTheme;
  const CategoryIcon = theme.icon;

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
      <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700 flex flex-col justify-between border-t-4 ${theme.borderAccent}`}>
        {/* Default Seed Card Header - Colorful theme per health category */}
        <div 
          className={`relative overflow-hidden p-4 cursor-pointer bg-gradient-to-br ${theme.gradient} border-b border-gray-100 dark:border-gray-700`}
          onClick={() => setShowInfo(true)}
        >
          {/* Top Actions: Category Badge, Info & Wishlist */}
          <div className="flex items-center justify-between mb-3">
            <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full shadow-xs border ${theme.badgeBg}`}>
              {CategoryIcon && <CategoryIcon className="w-3.5 h-3.5" />}
              <span className="text-xs font-bold">{theme.label}</span>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowInfo(true);
                }}
                className="p-1.5 rounded-full bg-white/90 dark:bg-gray-700/90 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-white shadow-xs transition-all"
                title="View Seed Details"
              >
                <Info className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWishlistToggle();
                }}
                className={`p-1.5 rounded-full shadow-xs transition-all transform hover:scale-110 ${
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
            <div className={`w-14 h-14 rounded-2xl ${theme.emblemBg} flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300`}>
              <Sprout className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
              {product.name}
            </h3>
            <span className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-1 font-medium">
              {product.benefits || product.description}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="mb-3">
            <div className="flex flex-wrap gap-1 mb-2">
              {product.nutrients.slice(0, 2).map((nutrient, idx) => (
                <span key={idx} className={`text-[11px] ${theme.pillBg} px-2 py-0.5 rounded font-medium border border-transparent`}>
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
