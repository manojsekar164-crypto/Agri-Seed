import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Activity, Bone, Shield, Scale, Sparkles, Gem, ChevronLeft, ChevronRight, Star, User } from 'lucide-react';

const carouselSlides = [
  {
    bgGradient: 'from-emerald-900 via-green-900 to-teal-950',
    title: '"Small seeds build strong bodies — eat seeds, grow health."',
    subtitle: 'Discover the power of natural seeds for your wellness journey',
    isQuote: true
  },
  {
    bgGradient: 'from-green-900 via-emerald-800 to-teal-900',
    title: 'Natural Seeds for Better Health 🌱',
    subtitle: 'Discover seeds that support heart health, immunity, digestion, and overall wellness',
    isQuote: false
  },
  {
    bgGradient: 'from-teal-900 via-emerald-900 to-green-950',
    title: 'Premium Quality Seeds',
    subtitle: '100% organic and tested for purity - your health is our priority',
    isQuote: false
  },
  {
    bgGradient: 'from-green-950 via-teal-900 to-emerald-900',
    title: 'Transform Your Health Naturally',
    subtitle: 'From heart care to immunity boost - find the perfect seeds for your goals',
    isQuote: false
  }
];

const categories = [
  {
    name: 'Heart Health Seeds',
    icon: Heart,
    path: '/products/heart-health',
    color: 'from-red-500 to-pink-600'
  },
  {
    name: 'Brain Health Seeds',
    icon: Brain,
    path: '/products/brain-health',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Diabetes Control Seeds',
    icon: Activity,
    path: '/products/diabetes-control',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Bone Strength Seeds',
    icon: Bone,
    path: '/products/bone-strength',
    color: 'from-amber-500 to-orange-600'
  },
  {
    name: 'Immunity Boost Seeds',
    icon: Shield,
    path: '/products/immunity-boost',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Weight Management Seeds',
    icon: Scale,
    path: '/products/weight-management',
    color: 'from-teal-500 to-green-600'
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'These health seeds have transformed my wellness journey. My cholesterol levels improved significantly!',
    rating: 5
  },
  {
    name: 'Lakshmi Devi',
    location: 'Tamil Nadu',
    text: 'Excellent service and genuine products. The tulsi seeds grew beautifully.',
    rating: 5
  },
  {
    name: 'Suresh Patil',
    location: 'Maharashtra',
    text: 'Fast delivery and great prices. Highly recommended for all farmers!',
    rating: 5
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-br ${slide.bgGradient} ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
          <button
            onClick={prevSlide}
            className="bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              {carouselSlides[currentSlide].isQuote ? (
                <>
                  <div className="text-6xl md:text-8xl mb-6 opacity-50">"</div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight italic">
                    {carouselSlides[currentSlide].title.replace(/"/g, '')}
                  </h1>
                  <p className="text-lg md:text-2xl mb-8 text-gray-200 font-light">
                    {carouselSlides[currentSlide].subtitle}
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {carouselSlides[currentSlide].title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    {carouselSlides[currentSlide].subtitle}
                  </p>
                </>
              )}
              <Link
                to="/products"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold animate-pulse">
            🎉 Special Offer: 20% OFF on Kharif Season Seeds! Use code: KHARIF20
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore seeds by health benefit - from heart care to immunity boost, find the perfect seeds for your wellness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.path}
                className={`group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br ${category.color} p-4 flex flex-col items-center justify-center text-white text-center`}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-bold leading-tight">{category.name}</h3>
                <p className="mt-1 text-xs opacity-90 font-medium">Explore</p>
              </Link>
            );
          })}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            What Our Farmers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 rounded-full p-3 mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-200 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-700 to-green-600 dark:from-green-900 dark:to-green-800 text-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose AgriSeed Shop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-bold text-xl mb-2">100% Genuine</h3>
              <p>Certified and tested seeds with guaranteed germination</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🚜</div>
              <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
              <p>Quick delivery across India with secure packaging</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-bold text-xl mb-2">Best Prices</h3>
              <p>Competitive prices directly from verified suppliers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
