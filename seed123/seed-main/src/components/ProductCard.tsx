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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group relative">
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Wishlist button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all transform hover:scale-110 ${
            isWishlisted || wishlistAdded
              ? 'bg-red-500 text-white'
              : 'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'
          }`}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart 
            className={`w-5 h-5 ${isWishlisted || wishlistAdded ? 'fill-current' : ''}`} 
          />
        </button>

        {/* Info button */}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="absolute top-3 left-3 p-2 rounded-full bg-blue-500 text-white shadow-lg transition-all transform hover:scale-110 hover:bg-blue-600"
          title="View nutritional info"
        >
          <Info className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.healthBenefits.slice(0, 2).map((benefit, index) => (
            <span key={index} className="text-xs text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
              {benefit}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-700 dark:text-green-400">
            ₹{product.price}
          </span>

          <button
            onClick={handleAddToCart}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
              justAdded
                ? 'bg-green-600 text-white'
                : isInCart
                ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm">Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Add</span>
              </>
            )}
          </button>
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
    </div>
  );
};

export default ProductCard;
