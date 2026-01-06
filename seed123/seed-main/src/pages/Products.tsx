import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, getCategoryProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, Filter, Sprout, Leaf, Flower2, Flower } from 'lucide-react';

const categoryInfo = {
  vegetable: {
    name: 'Vegetable Seeds',
    icon: Sprout,
    description: 'Grow fresh and healthy vegetables in your garden',
    color: 'from-green-500 to-green-600'
  },
  fruit: {
    name: 'Fruit Seeds',
    icon: Leaf,
    description: 'Plant delicious fruits for your orchard',
    color: 'from-orange-500 to-red-500'
  },
  flower: {
    name: 'Flower Seeds',
    icon: Flower2,
    description: 'Beautiful blooms for your garden',
    color: 'from-pink-500 to-purple-500'
  },
  herb: {
    name: 'Herbal Seeds',
    icon: Flower,
    description: 'Medicinal and culinary herbs for wellness',
    color: 'from-teal-500 to-green-600'
  },
  all: {
    name: 'All Products',
    icon: Sprout,
    description: 'Browse our complete collection of seeds',
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
            All Products
          </Link>
          <Link
            to="/products/vegetable"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'vegetable'
                ? 'bg-green-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
            }`}
          >
            Vegetables
          </Link>
          <Link
            to="/products/fruit"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'fruit'
                ? 'bg-orange-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700'
            }`}
          >
            Fruits
          </Link>
          <Link
            to="/products/flower"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'flower'
                ? 'bg-pink-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700'
            }`}
          >
            Flowers
          </Link>
          <Link
            to="/products/herb"
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              currentCategory === 'herb'
                ? 'bg-teal-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-gray-700'
            }`}
          >
            Herbs
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
