import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Activity, Bone, Shield, Scale, Sparkles, ChevronLeft, ChevronRight, Star, User } from 'lucide-react';

const carouselImages = [
  'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1459334/pexels-photo-1459334.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

const categories = [
  {
    name: 'Heart Health Seeds',
    icon: Heart,
    path: '/products/heart-health',
    color: 'from-red-500 to-pink-600',
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Brain Health Seeds',
    icon: Brain,
    path: '/products/brain-health',
    color: 'from-purple-500 to-indigo-600',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Diabetes Control Seeds',
    icon: Activity,
    path: '/products/diabetes-control',
    color: 'from-blue-500 to-cyan-600',
    image: 'https://images.pexels.com/photos/6489052/pexels-photo-6489052.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Bone Strength Seeds',
    icon: Bone,
    path: '/products/bone-strength',
    color: 'from-amber-500 to-orange-600',
    image: 'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Immunity Boost Seeds',
    icon: Shield,
    path: '/products/immunity-boost',
    color: 'from-green-500 to-emerald-600',
    image: 'https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Weight Management Seeds',
    icon: Scale,
    path: '/products/weight-management',
    color: 'from-teal-500 to-green-600',
    image: 'https://images.pexels.com/photos/5503116/pexels-photo-5503116.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Hair Health Seeds',
    icon: Sparkles,
    path: '/products/hair-health',
    color: 'from-pink-500 to-rose-600',
    image: 'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=400'
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
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-between px-4">
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

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                Natural Seeds for Better Health 🌱
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Discover seeds that support heart health, immunity, digestion, and overall wellness
              </p>
              <Link
                to="/products"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.path}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`} />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <Icon className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-center">{category.name}</h3>
                    <p className="mt-2 text-sm opacity-90">Explore Collection</p>
                  </div>
                </div>
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
