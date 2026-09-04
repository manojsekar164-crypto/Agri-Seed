import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sprout } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <ShoppingBag className="w-32 h-32 mx-auto text-gray-400 dark:text-gray-600 mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Add some seeds to get started!</p>
          <Link
            to="/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Shopping Cart</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-20 h-20 bg-green-50 dark:bg-gray-700 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border border-green-200 dark:border-gray-600 p-2 text-center">
                    <Sprout className="w-7 h-7 text-green-600 dark:text-green-400 mb-1" />
                    <span className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 line-clamp-1 leading-tight">{item.name}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {item.description}
                    </p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">
                      ₹{item.price} each
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </button>
                      <span className="px-3 font-semibold text-gray-800 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors group"
                    >
                      <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <span className="text-xl font-bold text-gray-800 dark:text-white">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span className="font-semibold">₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Delivery Charges</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">FREE</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800 dark:text-white">
                    <span>Total</span>
                    <span className="text-green-600 dark:text-green-400">₹{getTotalPrice()}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/products"
                className="w-full mt-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 rounded-lg font-semibold transition-all text-center block"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-300 text-center">
                  🎉 You're eligible for FREE delivery on this order!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
