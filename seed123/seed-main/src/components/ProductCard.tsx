import { ShoppingCart, Check, Heart, Info } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [justAdded, setJustAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const isInCart = cart.some(item => item.id === product.id);
  const isWishlisted = isInWishlist(product.id);

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
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700">
        {/* Compact Image Section */}
        <div 
          className="relative overflow-hidden h-40 cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600"
          onClick={() => setShowInfo(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Info Icon - Floating */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/95 dark:bg-gray-800/95 rounded-full p-3 shadow-xl transform group-hover:scale-110 transition-transform">
              <Info className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
          
          {/* Wishlist button - Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleWishlistToggle();
            }}
            className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all transform hover:scale-110 backdrop-blur-sm ${
              isWishlisted || wishlistAdded
                ? 'bg-red-500 text-white'
                : 'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart 
              className={`w-4 h-4 ${isWishlisted || wishlistAdded ? 'fill-current' : ''}`} 
            />
          </button>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>
        </div>

        {/* Content Section - More Spacious */}
        <div className="p-5">
          {/* Product Name */}
          <h3 
            className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 cursor-pointer hover:text-green-600 dark:hover:text-green-400 transition-colors"
            onClick={() => setShowInfo(true)}
          >
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Health Benefits Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.healthBenefits.slice(0, 2).map((benefit, index) => (
              <span 
                key={index} 
                className="inline-flex items-center text-xs font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800"
              >
                <span className="mr-1">✓</span>
                {benefit}
              </span>
            ))}
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
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105 shadow-md hover:shadow-lg ${
                justAdded
                  ? 'bg-green-600 text-white'
                  : isInCart
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
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
