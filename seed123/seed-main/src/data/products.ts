export interface Product {
  id: string;
  name: string;
  category: 'vegetable' | 'fruit' | 'flower' | 'herb';
  price: number;
  image: string;
  benefits: string;
  description: string;
}

export const products: Product[] = [
  // Vegetable Seeds
  {
    id: 'v1',
    name: 'Tomato Seeds (Hybrid)',
    category: 'vegetable',
    price: 45,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6gNN5r3xFr7vynPptJtVpqmHACVyH38OxKExdInYoxzx3QKDQNxebrAjD96lN',
    benefits: 'Rich in Vitamin C, Lycopene',
    description: 'High-yielding hybrid tomato seeds suitable for Indian climate'
  },
  {
    id: 'v2',
    name: 'Brinjal Seeds (Desi)',
    category: 'vegetable',
    price: 35,
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnJ3Q2B3dC0V8hnD9tXhXgcOEV_lJ4uVmKmf-wMpUP0CVZ6ofI0r-CTmvdV4gM',
    benefits: 'High fiber, antioxidants',
    description: 'Traditional Indian brinjal variety, disease resistant'
  },
  {
    id: 'v3',
    name: 'Okra Seeds (Bhindi)',
    category: 'vegetable',
    price: 30,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpk5STOCBym4QjMnwjWFbnFa4f7pjm2zZyG-bxGALQEwkzZsSiQBw4a9XoDJiP',
    benefits: 'Rich in vitamins and minerals',
    description: 'Fast-growing okra seeds for all seasons'
  },
  {
    id: 'v4',
    name: 'Spinach Seeds (Palak)',
    category: 'vegetable',
    price: 25,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFe_Xp8ifGQ2dTu5MqtSGsYejZ7h-TMWoZHYOaITN-fNFsGMzmlwAv3GBtn8B_',
    benefits: 'Iron-rich, boosts immunity',
    description: 'Premium quality spinach seeds for healthy greens'
  },
  {
    id: 'v5',
    name: 'Chilli Seeds (Mirchi)',
    category: 'vegetable',
    price: 40,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdmYe7VaJPh8_laKdqO5pRqf-ypzlVckohca1rLEcWxtO5kzpyHHLNireeTEYl',
    benefits: 'High capsaicin, metabolism booster',
    description: 'Hot Indian chilli variety for spice lovers'
  },
  {
    id: 'v6',
    name: 'Cucumber Seeds (Kheera)',
    category: 'vegetable',
    price: 28,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6J2UznDyzI0lMWLvh08wJ4_chodiFPGtMvSYLGjfk3Hvpfmq5gFSFv90wCvR8',
    benefits: 'Hydrating, low calorie',
    description: 'Crisp cucumber seeds for salads and snacks'
  },

  // Fruit Seeds
  {
    id: 'f1',
    name: 'Mango Seeds (Alphonso)',
    category: 'fruit',
    price: 120,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnOCBxkmBsv6Gl98d39NHFuPfeCq-E085bG8FLOa8k8xzjwauzRibjRdQOCUcF',
    benefits: 'King of fruits, Vitamin A',
    description: 'Premium Alphonso mango seeds for grafting'
  },
  {
    id: 'f2',
    name: 'Papaya Seeds (Red Lady)',
    category: 'fruit',
    price: 55,
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTujDyxjrf_hq1JKnHPfg5iF9XvfyfBbiP5gtQZzMXB-A1htaTJ48DK2ptR8XKj',
    benefits: 'Digestive health, Vitamin C',
    description: 'Fast-growing papaya variety with sweet fruits'
  },
  {
    id: 'f3',
    name: 'Guava Seeds (Amrud)',
    category: 'fruit',
    price: 38,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSS16K8idnHhzwGFXF2bRLT_YbnJtjZPOoG13FGImHrRkY7v1Pek9UAGBb6WAOC',
    benefits: 'High Vitamin C, immunity booster',
    description: 'Aromatic guava seeds for home gardens'
  },
  {
    id: 'f4',
    name: 'Watermelon Seeds',
    category: 'fruit',
    price: 48,
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFRCb6VfSjhvc7xolfIjxPfydc71ZRkYH7A1lxZaQyLGWbsmnxDEOVPraf49OP',
    benefits: 'Hydrating, refreshing',
    description: 'Sweet watermelon seeds for summer harvest'
  },
  {
    id: 'f5',
    name: 'Pomegranate Seeds (Anar)',
    category: 'fruit',
    price: 85,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJxag4wAOlrPIskzl53wx5QlYsb7awp8mSIx_2YYi-p65tU49K8dEXoeXbSaF8',
    benefits: 'Antioxidant-rich, heart health',
    description: 'Ruby-red pomegranate variety for Indian climate'
  },
  {
    id: 'f6',
    name: 'Banana Seeds (Tissue Culture)',
    category: 'fruit',
    price: 95,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSeJQBfsfzTAXSPfdzdd-1-3mi9ClPtE07qnz_cr6D3svgPochCC3_OC1VeF4BP',
    benefits: 'Energy booster, potassium-rich',
    description: 'Disease-free banana plantlets for commercial farming'
  },

  // Flower Seeds
  {
    id: 'fl1',
    name: 'Marigold Seeds (Genda)',
    category: 'flower',
    price: 20,
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSv3rQIKYcQ4pE1Ki_HF56UFet1DW40DYPLffGcDvyLBZLkQMvlkelxK6VL7kR4',
    benefits: 'Auspicious flower, pest repellent',
    description: 'Vibrant orange marigold for festivals and gardens'
  },
  {
    id: 'fl2',
    name: 'Rose Seeds (Gulab)',
    category: 'flower',
    price: 50,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOc-xyfshTlepk-Kcruhr8ayKNoYLvqu8CueId_l8653lWf1DrF2O3ec0IAB0R',
    benefits: 'Fragrant, decorative',
    description: 'Classic rose varieties for Indian gardens'
  },
  {
    id: 'fl3',
    name: 'Sunflower Seeds',
    category: 'flower',
    price: 32,
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS22heVfAhCCBRFcYG1IiE0SJwysKUevlTnAGMpojltmfAQxHQl6sOCiT6XHS0w',
    benefits: 'Bright blooms, edible seeds',
    description: 'Giant sunflower seeds for stunning displays'
  },
  {
    id: 'fl4',
    name: 'Jasmine Seeds (Mogra)',
    category: 'flower',
    price: 42,
    image: 'https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Aromatic, traditional use',
    description: 'Fragrant jasmine for worship and decoration'
  },
  {
    id: 'fl5',
    name: 'Hibiscus Seeds (Gudhal)',
    category: 'flower',
    price: 28,
    image: 'https://images.pexels.com/photos/158857/hibiscus-flower-bloom-blossom-158857.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Medicinal properties, hair care',
    description: 'Beautiful hibiscus flowers with health benefits'
  },
  {
    id: 'fl6',
    name: 'Lotus Seeds (Kamal)',
    category: 'flower',
    price: 68,
    image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Sacred flower, aquatic beauty',
    description: 'Holy lotus seeds for ponds and water gardens'
  },

  // Herbal Seeds
  {
    id: 'h1',
    name: 'Tulsi Seeds (Holy Basil)',
    category: 'herb',
    price: 22,
    image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Immunity booster, sacred plant',
    description: 'Holy basil seeds for worship and wellness'
  },
  {
    id: 'h2',
    name: 'Mint Seeds (Pudina)',
    category: 'herb',
    price: 18,
    image: 'https://images.pexels.com/photos/5503116/pexels-photo-5503116.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Digestive aid, refreshing',
    description: 'Fresh mint seeds for chutney and tea'
  },
  {
    id: 'h3',
    name: 'Coriander Seeds (Dhaniya)',
    category: 'herb',
    price: 15,
    image: 'https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Essential for Indian cuisine',
    description: 'Fast-growing coriander for daily use'
  },
  {
    id: 'h4',
    name: 'Fenugreek Seeds (Methi)',
    category: 'herb',
    price: 16,
    image: 'https://images.pexels.com/photos/6489052/pexels-photo-6489052.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Diabetes management, hair health',
    description: 'Nutritious fenugreek seeds for health and cooking'
  },
  {
    id: 'h5',
    name: 'Ashwagandha Seeds',
    category: 'herb',
    price: 75,
    image: 'https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Stress relief, energy booster',
    description: 'Premium ashwagandha seeds for Ayurvedic benefits'
  },
  {
    id: 'h6',
    name: 'Neem Seeds',
    category: 'herb',
    price: 35,
    image: 'https://images.pexels.com/photos/8413161/pexels-photo-8413161.jpeg?auto=compress&cs=tinysrgb&w=400',
    benefits: 'Natural pesticide, medicinal',
    description: 'Sacred neem tree seeds with multiple benefits'
  }
];

export const getCategoryProducts = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
