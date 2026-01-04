// Day data for weekly menu
export const dayData = {
  monday: {
    name: 'Monday',
    emoji: '💪',
    tagline: 'Start strong',
    calories: '2,540',
    protein: '125g',
    meals: [
      { type: 'breakfast', emoji: '🍳', name: 'Power Scramble', desc: '4 eggs + toast + avocado + banana' },
      { type: 'shake', emoji: '🥤', name: 'Protein Boost', desc: 'Post-breakfast shake' },
      { type: 'lunch', emoji: '🍛', name: 'Oriental Bowl', desc: 'Rice + dal + oriental chicken + salad' },
      { type: 'dinner', emoji: '🍝', name: 'Italian Night', desc: 'Pasta + pesto + grilled chicken' },
      { type: 'snack', emoji: '🥞', name: 'Sweet Finish', desc: 'High-protein pancakes' }
    ],
    shopping: ['4 eggs', '2 slices bread', '1 avocado', '1 banana', '150g rice', 'Dal (lentils)', '180g chicken breast', 'Oriental marinade ingredients', 'Lettuce, cucumber, tomato', '100g pasta', 'Pesto sauce', 'Protein powder']
  },
  tuesday: {
    name: 'Tuesday',
    emoji: '🔥',
    tagline: 'Keep the momentum',
    calories: '2,470',
    protein: '118g',
    meals: [
      { type: 'breakfast', emoji: '🥚', name: 'Spinach Omelette', desc: 'Fluffy eggs + overnight oats' },
      { type: 'shake', emoji: '🥤', name: 'Protein Boost', desc: 'Post-breakfast shake' },
      { type: 'lunch', emoji: '🐟', name: 'Tuna Power Rice', desc: 'Fried rice + fresh salad + orange' },
      { type: 'dinner', emoji: '🥣', name: 'Yogurt Paradise', desc: 'Greek yogurt + berries + nuts' },
      { type: 'snack', emoji: '🥪', name: 'Deli Stack', desc: 'Protein-packed sandwich' }
    ],
    shopping: ['4 eggs', 'Spinach', 'Oats', 'Berries', 'Milk/yogurt', '1 can tuna', '150g rice', 'Mixed vegetables', '1 orange', '200g Greek yogurt', 'Mixed nuts', 'Deli meat', 'Bread']
  },
  wednesday: {
    name: 'Wednesday',
    emoji: '⚡',
    tagline: 'Midweek fuel',
    calories: '2,630',
    protein: '130g',
    meals: [
      { type: 'breakfast', emoji: '🥜', name: 'PB Power', desc: 'Boiled eggs (4) + toast + peanut butter' },
      { type: 'shake', emoji: '🥤', name: 'Protein Boost', desc: 'Post-breakfast shake' },
      { type: 'lunch', emoji: '🌯', name: 'Fajita Fiesta', desc: 'Rice + chole + fajita chicken + salad' },
      { type: 'dinner', emoji: '🥘', name: 'Indian Spice', desc: 'Air-fried veggies + Indian chicken' },
      { type: 'snack', emoji: '🍨', name: 'Protein Treat', desc: 'High-protein ice cream + fruit' }
    ],
    shopping: ['4 eggs', 'Bread', 'Peanut butter', '150g rice', 'Chickpeas', 'Fajita marinade', '180g chicken breast', 'Mixed vegetables', 'Indian marinade', 'High-protein ice cream']
  },
  thursday: {
    name: 'Thursday',
    emoji: '🎯',
    tagline: 'Stay on target',
    calories: '2,490',
    protein: '122g',
    meals: [
      { type: 'breakfast', emoji: '🐟', name: 'Tuna Sunrise', desc: 'Eggs + tuna + toast + apple' },
      { type: 'shake', emoji: '🥤', name: 'Protein Boost', desc: 'Post-breakfast shake' },
      { type: 'lunch', emoji: '🫘', name: 'Rajma Power', desc: 'Rice + rajma + oriental chicken' },
      { type: 'dinner', emoji: '🍝', name: 'Pesto Perfection', desc: 'Pasta + pesto + grilled chicken' },
      { type: 'snack', emoji: '🥒', name: 'Cool Down', desc: 'Greek yogurt with cucumber' }
    ],
    shopping: ['4 eggs', '1 can tuna', 'Bread', '1 apple', '150g rice', 'Rajma (kidney beans)', '180g chicken breast', '100g pasta', 'Pesto', 'Greek yogurt', 'Cucumber']
  },
  friday: {
    name: 'Friday',
    emoji: '🌟',
    tagline: 'Finish strong',
    calories: '2,560',
    protein: '120g',
    meals: [
      { type: 'breakfast', emoji: '🍳', name: 'Classic Scramble', desc: 'Fluffy eggs + overnight oats' },
      { type: 'shake', emoji: '🥤', name: 'Protein Boost', desc: 'Post-breakfast shake' },
      { type: 'lunch', emoji: '🐟', name: 'Tuna Fried Rice', desc: 'Savory rice + salad + apple' },
      { type: 'dinner', emoji: '🥣', name: 'Berry Bliss', desc: 'Greek yogurt + berries + nuts' },
      { type: 'snack', emoji: '🥗', name: 'Feta Fresh', desc: 'Mixed salad with feta' }
    ],
    shopping: ['4 eggs', 'Oats', '1 banana', 'Milk/yogurt', '1 can tuna', '150g rice', 'Mixed vegetables', '1 apple', '200g Greek yogurt', 'Berries', 'Mixed nuts', 'Feta cheese']
  },
  saturday: {
    name: 'Saturday',
    emoji: '🎉',
    tagline: 'Weekend vibes',
    calories: '2,600',
    protein: '126g',
    meals: [
      { type: 'breakfast', emoji: '🥑', name: 'Avo Toast Deluxe', desc: 'Omelette + toast + avocado + berries' },
      { type: 'shake', emoji: '🥤', name: 'Protein Boost', desc: 'Post-breakfast shake' },
      { type: 'lunch', emoji: '🇮🇹', name: 'Italian Fusion', desc: 'Rice + dal + Italian chicken + salad' },
      { type: 'dinner', emoji: '🌮', name: 'Fajita Feast', desc: 'Air-fried veggies + fajita chicken' },
      { type: 'snack', emoji: '🥞', name: 'Pancake Party', desc: 'Protein pancakes + ice cream' }
    ],
    shopping: ['4 eggs', 'Bread', '1 avocado', 'Berries', '150g rice', 'Dal (lentils)', 'Italian marinade', '180g chicken breast', 'Mixed vegetables', 'Fajita marinade', 'High-protein ice cream']
  },
  sunday: {
    name: 'Sunday',
    emoji: '🧘',
    tagline: 'Prep day',
    calories: '2,550',
    protein: '124g',
    meals: [
      { type: 'breakfast', emoji: '🥜', name: 'Simple Start', desc: 'Boiled eggs (3) + toast + PB' },
      { type: 'shake', emoji: '🥤', name: 'Protein Boost', desc: 'Post-breakfast shake' },
      { type: 'lunch', emoji: '👨‍🍳', name: 'Fresh Cook', desc: 'Cooking during meal prep' },
      { type: 'dinner', emoji: '🍲', name: 'Curry Night', desc: 'Fresh curry + rice + chicken' },
      { type: 'snack', emoji: '🥪', name: 'Deli Bite', desc: 'Protein sandwich' }
    ],
    shopping: ['6 eggs', 'Bread', 'Peanut butter', 'Rice (2 cups)', 'Chicken breasts (6 portions)', 'All marinade ingredients', 'Chickpeas/Rajma/Dal', 'Potatoes', 'Vegetables', 'Deli meat']
  }
};

// Meal options with calories and protein
export const mealOptions = {
  breakfast: [
    {
      name: 'Standard Egg Breakfast',
      calories: 650,
      protein: 35,
      ingredients: ['4 eggs', '2 slices bread', '1 avocado or peanut butter', '1 banana or apple']
    },
    {
      name: 'Eggs + Tuna',
      calories: 595,
      protein: 52,
      ingredients: ['4 eggs', '1 can tuna in brine', '2 slices bread', '1 fruit']
    },
    {
      name: 'Overnight Oats + Eggs',
      calories: 545,
      protein: 38,
      ingredients: ['1/2 cup oats', 'Milk or yogurt', '4 eggs', 'Berries']
    }
  ],
  lunch: [
    {
      name: 'Rice + Curry + Chicken',
      calories: 690,
      protein: 45,
      ingredients: ['150g rice', '100g curry (dal/chole/rajma)', '180g chicken breast', 'Salad ingredients', '1 fruit']
    },
    {
      name: 'Tuna Fried Rice',
      calories: 605,
      protein: 35,
      ingredients: ['1 can tuna', '150g rice', 'Mixed vegetables', 'Soy sauce', '1 fruit']
    }
  ],
  dinner: [
    {
      name: 'Pasta Bowl',
      calories: 615,
      protein: 42,
      ingredients: ['100g pasta', 'Pesto sauce', '180g chicken breast']
    },
    {
      name: 'Yogurt Bowl',
      calories: 450,
      protein: 38,
      ingredients: ['200g Greek yogurt', '100g cottage cheese', 'Berries', '30g mixed nuts']
    },
    {
      name: 'Veggie & Protein Plate',
      calories: 475,
      protein: 40,
      ingredients: ['200g mixed vegetables', '180g chicken breast', 'Salad greens']
    }
  ],
  snacks: [
    {
      name: 'Protein Shake',
      calories: 160,
      protein: 28,
      ingredients: ['1 scoop protein powder', 'Water or milk']
    },
    {
      name: 'Deli Sandwich',
      calories: 300,
      protein: 18,
      ingredients: ['2 slices bread', 'Deli meat', 'Lettuce, tomato, cheese']
    },
    {
      name: 'Protein Pancakes',
      calories: 275,
      protein: 22,
      ingredients: ['2 eggs', '1 banana', 'Protein powder']
    }
  ]
};

// Marinades
export const marinades = [
  {
    id: 'oriental',
    name: 'Oriental',
    color: '#E8C4B0',
    ingredients: ['Honey', 'Soy sauce', 'Fresh ginger (grated)', 'Garlic (minced)', 'Lemon juice', 'Black pepper'],
    link: 'https://www.thelittlepine.com/asian-chicken-marinade/'
  },
  {
    id: 'indian',
    name: 'Indian',
    color: '#D4A574',
    ingredients: ['Chicken masala', 'Ginger-garlic paste', 'Lemon juice', 'Coriander powder', 'Red chilli powder', 'Haldi (turmeric)'],
    link: null
  },
  {
    id: 'italian',
    name: 'Italian',
    color: '#A8C4A0',
    ingredients: ['Lemon juice', 'Oregano or mixed herbs', 'Garlic (minced)', 'Olive oil'],
    link: 'https://www.billyparisi.com/italian-chicken-marinade/'
  },
  {
    id: 'fajita',
    name: 'Fajita',
    color: '#C4A8B0',
    ingredients: ['Lime juice', 'Jeera powder (cumin)', 'Chilli powder', 'Black pepper', 'Garlic (grated)'],
    link: 'https://meaningfuleats.com/the-best-chicken-fajitas/'
  }
];

// Shopping lists
export const shoppingLists = {
  freezer: {
    title: 'Freezer Essentials',
    description: 'Stock up weekly for easy protein access',
    items: [
      'Chicken breasts (3-4 portions, pre-marinated)',
      'Frozen vegetables (mixed, broccoli, cauliflower)',
      'Low-fat, high-protein ice cream'
    ]
  },
  fridge: {
    title: 'Refrigerator Essentials',
    description: 'Fresh items to replenish every few days',
    items: [
      'Deli meat for quick sandwiches',
      'Low-fat Greek yogurt (large tub)',
      'Eggs (pack of 30)',
      'Fresh fruits (apples, bananas, berries)',
      'Greens (lettuce, spinach)',
      'Cucumber, tomato, cilantro',
      'Avocado',
      'Jar of pesto',
      'Thai red curry paste',
      'Ginger-garlic paste'
    ]
  },
  pantry: {
    title: 'Pantry Essentials',
    description: 'Long-lasting staples to always have on hand',
    items: [
      'Onions, garlic, ginger',
      'Potatoes & sweet potatoes',
      'Pasta (fettuccine, spaghetti)',
      'Rice',
      'Chickpeas (kabuli chana)',
      'Rajma (kidney beans)',
      'Dals (lentils)',
      'Canned tuna in brine (not oil)',
      'Mixed nuts (almonds, cashews, walnuts)',
      'Protein powder',
      'Oats'
    ]
  }
};

// Prep steps
export const prepSteps = [
  {
    number: 1,
    title: 'Cook Carbs',
    description: 'Cook 2 cups of rice. Use what you need that day, store the rest in an airtight container.',
    duration: '20 min'
  },
  {
    number: 2,
    title: 'Prep Proteins',
    description: 'Boil 3-6 eggs. Marinate 6 batches of chicken breasts – freeze 4 batches, keep 2 out.',
    duration: '30 min'
  },
  {
    number: 3,
    title: 'Prep Vegetables',
    description: 'Boil 3-4 potatoes. Chop capsicum, cauliflower, and carrots. Store in glass containers.',
    duration: '25 min'
  },
  {
    number: 4,
    title: 'Cook Curries',
    description: 'Prepare 1-2 curries for the week: dals, chickpea curry (chole), or rajma.',
    duration: '45 min'
  },
  {
    number: 5,
    title: 'Pickle Onions',
    description: 'Make a batch of pickled onions for salads and meals throughout the week.',
    duration: '10 min'
  }
];

// Protein reference
export const proteinReference = [
  { item: '1 large egg', protein: '~6g' },
  { item: '100g chicken breast', protein: '~20-22g' },
  { item: '1 can tuna (in brine)', protein: '~20g' },
  { item: '100g Greek yogurt', protein: '~9-10g' },
  { item: '1 scoop protein powder', protein: '~25-30g' },
  { item: '100g dal/lentils (cooked)', protein: '~7-9g' },
  { item: '100g chickpeas (cooked)', protein: '~8-9g' },
  { item: '100g cottage cheese', protein: '~11-13g' },
  { item: '30g nuts', protein: '~5-7g' },
  { item: '100g deli meat', protein: '~15-20g' }
];

// Tips
export const tips = [
  { title: 'Thaw the Night Before', description: 'Always move one chicken batch from freezer to fridge each evening.' },
  { title: 'Batch Cook on Sundays', description: '2-3 hours of prep saves time all week and keeps you on track.' },
  { title: 'Use Glass Containers', description: 'Better for storing chopped vegetables and cooked food safely.' },
  { title: 'Air Fryer is Your Friend', description: 'Quick, healthy cooking for chicken and vegetables without added oil.' },
  { title: 'Rotate Marinades', description: 'Use all 4 chicken marinades to avoid taste fatigue throughout the week.' },
  { title: 'Keep it Simple', description: 'When in doubt, make a quick sandwich or Greek yogurt bowl.' }
];

// Resources
export const resources = [
  {
    category: 'Meal Prep Guides',
    links: [
      { title: 'Ultimate Guide to Meal Prepping', url: 'https://www.healthline.com/nutrition/meal-prep-for-weight-loss' },
      { title: '7-Day Meal Prep Plan', url: 'https://www.asweetpeachef.com/meal-prep-for-weight-loss/' },
      { title: 'Meal Prep for Beginners', url: 'https://www.weightwatchers.com/us/blog/food/meal-prep' }
    ]
  },
  {
    category: 'Chicken Recipes',
    links: [
      { title: '40 Chicken Meal Prep Ideas', url: 'https://www.tasteofhome.com/collection/chicken-meal-prep-recipes/' },
      { title: 'Air Fryer Frozen Chicken', url: 'https://savaskitchen.com/frozen-chicken-breasts-in-air-fryer/' },
      { title: 'Budget Chicken Meal Prep', url: 'https://www.budgetbytes.com/category/extra-bytes/budget-friendly-meal-prep/chicken-meal-prep/' }
    ]
  },
  {
    category: 'Breakfast Ideas',
    links: [
      { title: 'High Protein Overnight Oats', url: 'https://autumnellenutrition.com/high-protein-overnight-oats-47-grams-protein/' },
      { title: 'Protein Pancakes Recipe', url: 'https://mattsfitchef.com/banana-protein-pancakes/' },
      { title: 'Perfect Hard Boiled Eggs', url: 'https://www.loveandlemons.com/how-to-make-hard-boiled-eggs/' }
    ]
  },
  {
    category: 'Container Tips',
    links: [
      { title: 'Best Meal Prep Containers', url: 'https://therealfooddietitians.com/favorite-meal-prep-containers/' },
      { title: 'Glass Container Guide', url: 'https://cookingwithelo.com/best-glass-food-storage-containers/' },
      { title: 'Storage Organization Tips', url: 'https://www.organizeyourselfskinny.com/glass-meal-prep-containers/' }
    ]
  }
];

// Nav items - matching section IDs
export const navItems = [
  { id: 'schedule', label: 'Schedule' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'prep', label: 'Meal Prep' },
  { id: 'marinades', label: 'Marinades' },
  { id: 'ideas', label: 'Meals' },
  { id: 'menu', label: 'Weekly Menu' },
  { id: 'tips', label: 'Tips' },
  { id: 'protein', label: 'Protein' },
  { id: 'resources', label: 'Resources' }
];
