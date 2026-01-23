export interface Product {
  id: string;
  name: string;
  category: 'heart-health' | 'brain-health' | 'diabetes-control' | 'bone-strength' | 'immunity-boost' | 'weight-management' | 'hair-health';
  price: number;
  image: string;
  healthBenefits: string[];
  hairBenefits?: string[];
  nutrients: string[];
  consumptionMethod: string[];
  dailyLimit: string;
  precautions: string;
  description: string;
}

export const products: Product[] = [
  // Heart Health Seeds
  {
    id: 'hh1',
    name: 'Almond Seeds',
    category: 'heart-health',
    price: 250,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Heart Health', 'Brain Function', 'Cholesterol Control'],
    nutrients: ['Vitamin E', 'Magnesium', 'Healthy Fats'],
    consumptionMethod: ['Raw', 'Soaked', 'Roasted', 'Almond Milk'],
    dailyLimit: '8-10 almonds per day',
    precautions: 'Avoid excess intake if you have kidney stones',
    description: 'Premium almonds rich in heart-healthy fats and antioxidants'
  },
  {
    id: 'hh2',
    name: 'Flax Seeds',
    category: 'heart-health',
    price: 150,
    image: 'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Heart Health', 'Digestion', 'Cholesterol Reduction'],
    nutrients: ['Omega-3', 'Fiber', 'Lignans'],
    consumptionMethod: ['Ground Powder', 'Soaked', 'With Smoothies'],
    dailyLimit: '1 tablespoon per day',
    precautions: 'Always consume ground flax seeds for better absorption',
    description: 'Omega-3 rich flax seeds for cardiovascular wellness'
  },
  {
    id: 'hh3',
    name: 'Watermelon Seeds',
    category: 'heart-health',
    price: 120,
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Heart Health', 'Blood Pressure Control', 'Hydration'],
    nutrients: ['Magnesium', 'Iron', 'Zinc'],
    consumptionMethod: ['Roasted', 'Raw', 'Powder'],
    dailyLimit: '1-2 tablespoons per day',
    precautions: 'Consume in moderation',
    description: 'Nutrient-dense watermelon seeds for heart and kidney health'
  },

  // Brain Health Seeds
  {
    id: 'bh1',
    name: 'Pumpkin Seeds',
    category: 'brain-health',
    price: 180,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Brain Health', 'Immunity Boost', 'Prostate Health'],
    nutrients: ['Zinc', 'Magnesium', 'Antioxidants'],
    consumptionMethod: ['Roasted', 'Raw', 'Powder', 'With Smoothies'],
    dailyLimit: '1-2 tablespoons per day',
    precautions: 'Avoid if allergic to seeds',
    description: 'Zinc-rich pumpkin seeds for cognitive function and immunity'
  },
  {
    id: 'bh2',
    name: 'Sunflower Seeds',
    category: 'brain-health',
    price: 140,
    image: 'https://images.pexels.com/photos/53588/sunflower-seeds-nuts-snack-healthy-53588.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Brain Health', 'Mood Enhancement', 'Energy Boost'],
    nutrients: ['Vitamin E', 'Selenium', 'B Vitamins'],
    consumptionMethod: ['Roasted', 'Raw', 'Salad Topping'],
    dailyLimit: '1/4 cup per day',
    precautions: 'Choose unsalted varieties for better health',
    description: 'Vitamin E rich sunflower seeds for mental clarity'
  },

  // Diabetes Control Seeds
  {
    id: 'dc1',
    name: 'Fenugreek Seeds (Methi)',
    category: 'diabetes-control',
    price: 90,
    image: 'https://images.pexels.com/photos/6489052/pexels-photo-6489052.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Diabetes Control', 'Blood Sugar Management', 'Digestion'],
    nutrients: ['Fiber', 'Iron', 'Protein'],
    consumptionMethod: ['Soaked Water', 'Powder', 'Sprouted'],
    dailyLimit: '1 teaspoon soaked seeds per day',
    precautions: 'Consult doctor if on diabetes medication',
    description: 'Natural blood sugar regulator with proven benefits'
  },
  {
    id: 'dc2',
    name: 'Chia Seeds',
    category: 'diabetes-control',
    price: 200,
    image: 'https://images.pexels.com/photos/2377045/pexels-photo-2377045.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Diabetes Control', 'Weight Loss', 'Heart Health'],
    nutrients: ['Omega-3', 'Fiber', 'Protein'],
    consumptionMethod: ['Soaked', 'Pudding', 'Smoothies', 'Yogurt'],
    dailyLimit: '1-2 tablespoons per day',
    precautions: 'Always soak before consuming',
    description: 'Superfood chia seeds for stable blood sugar levels'
  },

  // Bone Strength Seeds
  {
    id: 'bs1',
    name: 'Sesame Seeds (Til)',
    category: 'bone-strength',
    price: 110,
    image: 'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Bone Strength', 'Calcium Rich', 'Joint Health'],
    nutrients: ['Calcium', 'Magnesium', 'Zinc'],
    consumptionMethod: ['Roasted', 'Tahini', 'Ladoo', 'Chikki'],
    dailyLimit: '1 tablespoon per day',
    precautions: 'Avoid if allergic to sesame',
    description: 'Calcium-packed sesame seeds for strong bones'
  },

  // Immunity Boosting Seeds
  {
    id: 'ib1',
    name: 'Black Cumin Seeds (Kalonji)',
    category: 'immunity-boost',
    price: 130,
    image: 'https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Immunity Boost', 'Respiratory Health', 'Anti-inflammatory'],
    nutrients: ['Antioxidants', 'Thymoquinone', 'Essential Oils'],
    consumptionMethod: ['With Honey', 'Tea', 'Roasted'],
    dailyLimit: '1/2 teaspoon per day',
    precautions: 'Pregnant women should consult doctor',
    description: 'Powerful immunity booster with medicinal properties'
  },
  {
    id: 'ib2',
    name: 'Tulsi Seeds (Holy Basil)',
    category: 'immunity-boost',
    price: 100,
    image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Immunity Boost', 'Stress Relief', 'Respiratory Health'],
    nutrients: ['Antioxidants', 'Vitamin K', 'Essential Oils'],
    consumptionMethod: ['Soaked in Water', 'Drinks', 'Desserts'],
    dailyLimit: '1 teaspoon soaked seeds',
    precautions: 'Safe for most people',
    description: 'Sacred tulsi seeds for holistic immunity'
  },

  // Weight Management Seeds
  {
    id: 'wm1',
    name: 'Sabja Seeds (Basil Seeds)',
    category: 'weight-management',
    price: 95,
    image: 'https://images.pexels.com/photos/5503116/pexels-photo-5503116.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Weight Loss', 'Appetite Control', 'Digestion'],
    nutrients: ['Fiber', 'Omega-3', 'Iron'],
    consumptionMethod: ['Soaked in Water', 'Drinks', 'Smoothies'],
    dailyLimit: '1 tablespoon soaked seeds',
    precautions: 'Always consume soaked, never dry',
    description: 'Natural appetite suppressant for weight management'
  },
  {
    id: 'wm2',
    name: 'Hemp Seeds',
    category: 'weight-management',
    price: 350,
    image: 'https://images.pexels.com/photos/7262775/pexels-photo-7262775.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Weight Management', 'Protein Rich', 'Heart Health'],
    nutrients: ['Complete Protein', 'Omega-3', 'Omega-6'],
    consumptionMethod: ['Raw', 'Smoothies', 'Salads', 'Yogurt'],
    dailyLimit: '2-3 tablespoons per day',
    precautions: 'Start with small amounts',
    description: 'Complete protein source for healthy weight management'
  },

  // Hair Health Seeds
  {
    id: 'hh1',
    name: 'Flax Seeds (Alsi)',
    category: 'hair-health',
    price: 150,
    image: 'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Hair Strength', 'Reduces Breakage', 'Scalp Health'],
    hairBenefits: ['Hair Fall Control', 'Scalp Health'],
    nutrients: ['Omega-3', 'Vitamin E', 'Lignans', 'Protein'],
    consumptionMethod: ['Ground Powder', 'Soaked', 'With Smoothies'],
    dailyLimit: '1 tablespoon per day',
    precautions: 'Always consume ground flax seeds for better absorption',
    description: 'Strengthens hair roots, reduces dryness and breakage'
  },
  {
    id: 'hh2',
    name: 'Chia Seeds',
    category: 'hair-health',
    price: 200,
    image: 'https://images.pexels.com/photos/2377045/pexels-photo-2377045.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Hair Thickness', 'New Growth', 'Protein Rich'],
    hairBenefits: ['Hair Density', 'Hair Fall Control'],
    nutrients: ['Protein', 'Zinc', 'Omega-3', 'Iron'],
    consumptionMethod: ['Soaked', 'Pudding', 'Smoothies', 'Yogurt'],
    dailyLimit: '1-2 tablespoons per day',
    precautions: 'Always soak before consuming',
    description: 'Improves hair thickness and promotes new growth'
  },
  {
    id: 'hh3',
    name: 'Pumpkin Seeds',
    category: 'hair-health',
    price: 180,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Reduces Hair Thinning', 'Scalp Health', 'Hair Growth'],
    hairBenefits: ['Hair Fall Control', 'Scalp Health'],
    nutrients: ['Zinc', 'Magnesium', 'Iron', 'Omega-6'],
    consumptionMethod: ['Roasted', 'Raw', 'Powder', 'With Smoothies'],
    dailyLimit: '1-2 tablespoons per day',
    precautions: 'Avoid if allergic to seeds',
    description: 'Reduces hair thinning and supports scalp health'
  },
  {
    id: 'hh4',
    name: 'Sesame Seeds (Til)',
    category: 'hair-health',
    price: 110,
    image: 'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Prevents Hair Fall', 'Strengthens Hair', 'Scalp Nourishment'],
    hairBenefits: ['Hair Fall Control', 'Hair Density'],
    nutrients: ['Calcium', 'Magnesium', 'Zinc', 'Vitamin B6'],
    consumptionMethod: ['Roasted', 'Tahini', 'Ladoo', 'Oil'],
    dailyLimit: '1 tablespoon per day',
    precautions: 'Avoid if allergic to sesame',
    description: 'Prevents premature hair fall and strengthens strands'
  },
  {
    id: 'hh5',
    name: 'Sunflower Seeds',
    category: 'hair-health',
    price: 140,
    image: 'https://images.pexels.com/photos/53588/sunflower-seeds-nuts-snack-healthy-53588.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Scalp Circulation', 'Hair Shine', 'Hair Growth'],
    hairBenefits: ['Scalp Health', 'Hair Density'],
    nutrients: ['Vitamin E', 'Selenium', 'Biotin'],
    consumptionMethod: ['Roasted', 'Raw', 'Salad Topping'],
    dailyLimit: '1/4 cup per day',
    precautions: 'Choose unsalted varieties for better health',
    description: 'Improves blood circulation to scalp and boosts shine'
  },
  {
    id: 'hh6',
    name: 'Fenugreek Seeds (Methi)',
    category: 'hair-health',
    price: 90,
    image: 'https://images.pexels.com/photos/6489052/pexels-photo-6489052.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Reduces Hair Fall', 'Strengthens Follicles', 'Hair Growth'],
    hairBenefits: ['Hair Fall Control', 'Hair Density'],
    nutrients: ['Protein', 'Iron', 'Lecithin', 'Nicotinic Acid'],
    consumptionMethod: ['Soaked Water', 'Powder', 'Paste', 'Sprouted'],
    dailyLimit: '1 teaspoon soaked seeds per day',
    precautions: 'Consult doctor if pregnant',
    description: 'Reduces hair fall and strengthens follicles'
  },
  {
    id: 'hh7',
    name: 'Watermelon Seeds',
    category: 'hair-health',
    price: 120,
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Hair Growth', 'Scalp Nourishment', 'Protein Rich'],
    hairBenefits: ['Hair Density', 'Scalp Health'],
    nutrients: ['Zinc', 'Iron', 'Protein', 'Fatty Acids'],
    consumptionMethod: ['Roasted', 'Raw', 'Powder'],
    dailyLimit: '1-2 tablespoons per day',
    precautions: 'Consume in moderation',
    description: 'Supports hair growth and scalp nourishment'
  },
  {
    id: 'hh8',
    name: 'Almond Seeds',
    category: 'hair-health',
    price: 250,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Hair Strength', 'Reduces Breakage', 'Hair Growth'],
    hairBenefits: ['Hair Fall Control', 'Hair Density'],
    nutrients: ['Vitamin E', 'Magnesium', 'Healthy Fats', 'Biotin'],
    consumptionMethod: ['Raw', 'Soaked', 'Roasted', 'Almond Milk', 'Oil'],
    dailyLimit: '8-10 almonds per day',
    precautions: 'Avoid excess intake if you have kidney stones',
    description: 'Improves hair strength and reduces breakage'
  },
  {
    id: 'hh9',
    name: 'Coriander Seeds (Dhaniya)',
    category: 'hair-health',
    price: 60,
    image: 'https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Scalp Circulation', 'Hair Growth', 'Antioxidant Rich'],
    hairBenefits: ['Scalp Health', 'Hair Density'],
    nutrients: ['Iron', 'Vitamin C', 'Antioxidants'],
    consumptionMethod: ['Powder', 'Soaked Water', 'Tea'],
    dailyLimit: '1 teaspoon per day',
    precautions: 'Safe for most people',
    description: 'Improves blood flow to scalp and supports growth'
  },
  {
    id: 'hh10',
    name: 'Nigella Seeds (Kalonji)',
    category: 'hair-health',
    price: 130,
    image: 'https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400',
    healthBenefits: ['Reduces Hair Fall', 'Hair Density', 'Scalp Health'],
    hairBenefits: ['Hair Fall Control', 'Hair Density'],
    nutrients: ['Thymoquinone', 'Omega-3', 'Omega-6', 'Iron'],
    consumptionMethod: ['With Honey', 'Oil', 'Tea', 'Roasted'],
    dailyLimit: '1/2 teaspoon per day',
    precautions: 'Pregnant women should consult doctor',
    description: 'Reduces hair fall and improves hair density'
  }
];

export const getCategoryProducts = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
