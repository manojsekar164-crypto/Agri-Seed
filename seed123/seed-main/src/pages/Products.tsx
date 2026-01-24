import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, getCategoryProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, Filter, Heart, Brain, Activity, Bone, Shield, Scale, Sparkles, Gem } from 'lucide-react';

const categoryInfo = {
  'heart-health': {
    name: 'Heart Health Seeds',
    icon: Heart,
    description: 'Seeds that support cardiovascular health and cholesterol control',
    color: 'from-red-500 to-pink-600'
  },
  'brain-health': {
    name: 'Brain Health Seeds',
    icon: Brain,
    description: 'Boost cognitive function and mental clarity',
    color: 'from-purple-500 to-indigo-600'
  },
  'diabetes-control': {
    name: 'Diabetes Control Seeds',
    icon: Activity,
    description: 'Natural blood sugar management and metabolic support',
    color: 'from-blue-500 to-cyan-600'
  },
  'bone-strength': {
    name: 'Bone Strength Seeds',
    icon: Bone,
    description: 'Calcium-rich seeds for strong bones and joints',
    color: 'from-amber-500 to-orange-600'
  },
  'immunity-boost': {
    name: 'Immunity Boosting Seeds',
    icon: Shield,
    description: 'Strengthen your immune system naturally',
    color: 'from-green-500 to-emerald-600'
  },
  'weight-management': {
    name: 'Weight Management Seeds',
    icon: Scale,
    description: 'Support healthy weight loss and metabolism',
    color: 'from-teal-500 to-green-600'
  },
  'hair-health': {
    name: 'Hair Health Seeds',
    icon: Sparkles,
    description: 'Nourish your hair from within - reduce fall, boost growth',
    color: 'from-pink-500 to-rose-600'
  },
  'skin-care': {
    name: 'Skin Care Seeds',
    icon: Gem,
    description: 'Radiant skin from within - brighten, hydrate, anti-aging',
    color: 'from-rose-500 to-pink-600'
  },
  all: {
    name: 'All Health Seeds',
    icon: Heart,
    description: 'Browse our complete collection of health-focused seeds',
    color: 'from-green-600 to-green-700'
  }
};

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  const currentCategory = category || 'all';
  const displayProducts = currentCategory === 'all'
    ? products
    : getCategoryProducts(currentCategory);

  const filteredProducts = displayProducts
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => {
      if (priceFilter === 'all') return true;
      if (priceFilter === 'low') return product.price < 30;
      if (priceFilter === 'medium') return product.price >= 30 && product.price < 60;
      if (priceFilter === 'high') return product.price >= 60;
      return true;
    });

  const info = categoryInfo[currentCategory as keyof typeof categoryInfo] || categoryInfo.all;
  const Icon = info.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className={`bg-gradient-to-r ${info.color} text-white rounded-xl shadow-lg p-8 mb-8`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon className="w-16 h-16" />
              <div>
                <h1 className="text-4xl font-bold mb-2">{info.name}</h1>
                <p className="text-lg opacity-90">{info.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <Link
            to="/products"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
            }`}
          >
            All Seeds
          </Link>
          <Link
            to="/products/heart-health"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'heart-health'
                ? 'bg-red-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-700'
            }`}
          >
            ❤️ Heart Health
          </Link>
          <Link
            to="/products/brain-health"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'brain-health'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
            }`}
          >
            🧠 Brain Health
          </Link>
          <Link
            to="/products/diabetes-control"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'diabetes-control'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
            }`}
          >
            🩸 Diabetes Control
          </Link>
          <Link
            to="/products/bone-strength"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'bone-strength'
                ? 'bg-orange-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700'
            }`}
          >
            🦴 Bone Strength
          </Link>
          <Link
            to="/products/immunity-boost"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'immunity-boost'
                ? 'bg-green-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
            }`}
          >
            💪 Immunity Boost
          </Link>
          <Link
            to="/products/weight-management"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'weight-management'
                ? 'bg-teal-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-gray-700'
            }`}
          >
            ⚖️ Weight Management
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search seeds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as any)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none dark:bg-gray-700 dark:text-white"
              >
                <option value="all">All Prices</option>
                <option value="low">Under ₹30</option>
                <option value="medium">₹30 - ₹60</option>
                <option value="high">Above ₹60</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Showing <span className="font-bold text-green-600 dark:text-green-400">{filteredProducts.length}</span> products
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-400">No products found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
