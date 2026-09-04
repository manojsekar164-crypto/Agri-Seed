import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, CreditCard, Sprout } from 'lucide-react';
import { RAZORPAY_CONFIG, loadRazorpayScript, RazorpayOptions } from '../config/razorpay';
import { API_ENDPOINTS } from '../config/api';

// Declare Razorpay type for TypeScript
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string>('');

  const totalAmount = getTotalPrice() * 100; // Convert to paise for Razorpay

  // Load Razorpay script on component mount
  useEffect(() => {
    loadRazorpayScript().then((loaded) => {
      setIsRazorpayLoaded(loaded);
    });
  }, []);

  if (cart.length === 0 && !paymentComplete) {
    navigate('/cart');
    return null;
  }

  const handlePayment = async () => {
    if (!isRazorpayLoaded) {
      alert('Payment system is loading. Please try again in a moment.');
      return;
    }

    if (totalAmount < 100) { // Minimum amount for Razorpay is ₹1 (100 paise)
      alert('Minimum payment amount is ₹1. Please add more items to your cart.');
      return;
    }

    setIsProcessing(true);

    try {
      console.log('Initiating payment with amount:', totalAmount, 'paise (₹' + totalAmount / 100 + ')');
      
      const options: RazorpayOptions = {
        key: RAZORPAY_CONFIG.key_id,
        amount: totalAmount,
        currency: 'INR',
        name: 'AgriSeed Shop',
        description: `Payment for ${cart.length} item(s)`,
        prefill: {
          name: 'Customer',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        notes: {
          order_id: `order_${Date.now()}`,
          items: cart.map(item => `${item.name} x${item.quantity}`).join(', '),
        },
        theme: {
          color: '#16a34a', // Green color matching the theme
        },
        handler: (response) => {
          console.log('Payment successful:', response);
          handlePaymentSuccess(response);
        },
        modal: {
          ondismiss: () => {
            console.log('Payment modal dismissed');
            setIsProcessing(false);
          },
        },
      };

      console.log('Razorpay options:', options);
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again. Error: ' + (error as Error).message);
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = async (response?: any) => {
    try {
      // Save order to MongoDB
      const orderData = {
        userId: user?.id || null,
        items: cart.map(item => ({
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image
        })),
        totalAmount: getTotalPrice(),
        paymentId: response?.razorpay_payment_id || `payment_${Date.now()}`,
        address: user?.address || '',
        phone: user?.phone || ''
      };

      const orderResponse = await fetch(API_ENDPOINTS.orders.create, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (orderResponse.ok) {
        const order = await orderResponse.json();
        setOrderId(order._id || `#AS${Math.floor(Math.random() * 1000000)}`);
      } else {
        setOrderId(`#AS${Math.floor(Math.random() * 1000000)}`);
      }
    } catch (error) {
      console.error('Error saving order:', error);
      setOrderId(`#AS${Math.floor(Math.random() * 1000000)}`);
    }

    setPaymentComplete(true);
    clearCart();
    setIsProcessing(false);
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="w-24 h-24 text-green-600 mx-auto animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Thank you for shopping with AgriSeed Shop! 🌾
            </p>

            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Package className="w-6 h-6 text-green-600 dark:text-green-400" />
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  Order Confirmed
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Order ID: {orderId || `#AS${Math.floor(Math.random() * 1000000)}`}
              </p>
              <div className="flex items-center justify-center space-x-3">
                <Truck className="w-6 h-6 text-green-600 dark:text-green-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  Your seeds will be delivered within 3-5 business days
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Redirecting to home page...
            </p>

            <button
              onClick={() => navigate('/')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Checkout</h1>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Order Summary</h2>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-tr from-emerald-500 to-green-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Sprout className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-white">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between text-2xl font-bold text-gray-800 dark:text-white">
                <span>Total Amount:</span>
                <span className="text-green-600 dark:text-green-400">₹{totalAmount / 100}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Payment Method</h2>
            <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 text-white rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-6 h-6" />
                <div>
                  <p className="text-lg mb-1">Secure Payment</p>
                  <p className="text-sm opacity-90">Pay securely using Razorpay</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Supported Payment Methods:</strong> Credit/Debit Cards, Net Banking, UPI, Wallets
              </p>
            </div>

            <button
              onClick={handlePayment}
              disabled={!isRazorpayLoaded || isProcessing}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform ${
                !isRazorpayLoaded || isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 hover:scale-105'
              } text-white`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : !isRazorpayLoaded ? (
                'Loading Payment System...'
              ) : (
                'Pay Now with Razorpay'
              )}
            </button>

            {!isRazorpayLoaded && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                Please wait while we load the payment system...
              </p>
            )}

            {/* Debug information for testing */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs">
                <p><strong>Debug Info:</strong></p>
                <p>Razorpay Loaded: {isRazorpayLoaded ? 'Yes' : 'No'}</p>
                <p>Amount: ₹{totalAmount / 100} ({totalAmount} paise)</p>
                <p>Key ID: {RAZORPAY_CONFIG.key_id}</p>
                <p>Cart Items: {cart.length}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
