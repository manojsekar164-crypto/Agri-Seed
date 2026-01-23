import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Sprout, Sun, Moon, Heart, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const { getWishlistCount } = useWishlist();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [showSpecialCare, setShowSpecialCare] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const isActive = (path: string) => location.pathname === path;
  const isSpecialCareActive = isActive('/hair-care') || isActive('/skin-care');

  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 dark:from-green-900 dark:via-green-800 dark:to-green-900 text-white shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sprout className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold tracking-wide">AgriSeed Shop</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`hover:text-yellow-300 transition-colors ${
                isActive('/') ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`hover:text-yellow-300 transition-colors ${
                isActive('/products') ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              Products
            </Link>
            
            {/* Special Care Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowSpecialCare(true)}
              onMouseLeave={() => setShowSpecialCare(false)}
            >
              <button
                className={`flex items-center space-x-1 hover:text-yellow-300 transition-colors ${
                  isSpecialCareActive ? 'text-yellow-300 font-semibold' : ''
                }`}
              >
                <span>✨ Special Care</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showSpecialCare ? 'rotate-180' : ''}`} />
              </button>
              
              {showSpecialCare && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 border border-gray-200 dark:border-gray-700">
                  <Link
                    to="/hair-care"
                    className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">✨</span>
                      <span className="font-semibold">Hair Care</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Reduce fall, boost growth
                    </p>
                  </Link>
                  <Link
                    to="/skin-care"
                    className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">💎</span>
                      <span className="font-semibold">Skin Care</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Brighten, hydrate, anti-aging
                    </p>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/wishlist"
              className={`relative hover:text-yellow-300 transition-colors ${
                isActive('/wishlist') ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              <Heart className="w-6 h-6" />
              {getWishlistCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {getWishlistCount()}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className={`relative hover:text-yellow-300 transition-colors ${
                isActive('/cart') ? 'text-yellow-300 font-semibold' : ''
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="hover:text-yellow-300 transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`flex items-center space-x-1 hover:text-yellow-300 transition-colors ${
                    isActive('/login') ? 'text-yellow-300 font-semibold' : ''
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  className={`hover:text-yellow-300 transition-colors ${
                    isActive('/signup') ? 'text-yellow-300 font-semibold' : ''
                  }`}
                >
                  Sign Up
                </Link>
              </>
            )}

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-green-800 dark:hover:bg-green-700 rounded-full transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
