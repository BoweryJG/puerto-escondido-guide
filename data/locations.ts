import { Location } from '@/lib/types';

export const locations: Location[] = [
  // MARKETS & SHOPS
  {
    id: 'mercado-benito-juarez',
    name: 'Mercado Benito Juárez',
    category: 'market',
    description: 'The main traditional market in Puerto Escondido. A bustling hub of local vendors selling fresh produce, traditional ingredients, meats, seafood, and prepared foods. Best visited early morning for freshest selection.',
    address: 'Calle Octava Nte. S/N, Puerto Escondido',
    latitude: 15.8721,
    longitude: -97.0561,
    hours: 'Daily 6:00 AM - 3:00 PM (best before 10 AM)',
    priceRange: '$',
    tags: ['local', 'traditional'],
    highlights: [
      'Fresh local produce',
      'Chapulines (grasshoppers)',
      'Heirloom corn varieties',
      'Traditional herbs (epazote, hoja santa)',
      'Local comedores for breakfast'
    ],
    jenniferNote: 'Meet local vendors and learn about traditional Oaxacan ingredients. Perfect for ingredient photography and understanding local food culture.'
  },
  {
    id: 'zicatela-market',
    name: 'Zicatela Market',
    category: 'market',
    description: 'A more holistic-oriented market with better quality produce and a more health-conscious vibe than the main market.',
    address: 'Centro, Zicatela area',
    priceRange: '$',
    tags: ['local', 'organic', 'healthy'],
    highlights: [
      'Higher quality produce',
      'Holistic atmosphere',
      'Health-conscious vendors'
    ],
    jenniferNote: 'More aligned with functional nutrition principles. Compare quality and prices with Mercado Benito Juárez.'
  },
  {
    id: 'verde-puerto',
    name: 'Verde Puerto',
    category: 'market',
    description: 'Direct from the owners\' local organic farm. The best source for certified organic produce in Puerto Escondido.',
    address: 'Puerto Escondido (exact location TBD)',
    priceRange: '$$',
    tags: ['organic', 'farm-to-table', 'sustainable'],
    highlights: [
      'Certified organic produce',
      'Direct from local farm',
      'Freshest organic selection'
    ],
    jenniferNote: 'Essential stop for organic ingredient sourcing. Ask about their farming practices and certification.'
  },
  {
    id: 'moringa-fresh-wild',
    name: 'Moringa Fresh & Wild',
    category: 'market',
    description: 'Organic produce shop offering fresh fruits, vegetables, and superfoods. Limited selection but high quality.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['organic', 'healthy'],
    highlights: [
      'Organic produce',
      'Superfoods',
      'Health-focused selection'
    ]
  },
  {
    id: 'canela-organic',
    name: 'Canela Organic & Vegan Store',
    category: 'market',
    description: 'Organic and vegan specialty store with multiple locations. Great for vegan products, organic staples, and health foods.',
    address: 'Multiple locations in Puerto Escondido and Mazunte',
    priceRange: '$$',
    tags: ['organic', 'vegan', 'healthy'],
    highlights: [
      'Wide vegan product selection',
      'Organic staples',
      'Health food items',
      'Multiple convenient locations'
    ],
    jenniferNote: 'Excellent resource for packaged organic goods and vegan specialties.'
  },

  // CAFES & BREAKFAST
  {
    id: 'cafe-ole',
    name: 'Café Olé',
    category: 'cafe',
    description: 'Popular breakfast spot at the entrance to La Punta beach zone. Known for quick turnover despite lines. Streamlined service with no menu substitutions.',
    address: 'Calle Alejandro Cardenas, La Punta entrance',
    priceRange: '$$',
    tags: ['breakfast', 'local'],
    highlights: [
      'Popular breakfast destination',
      'Consistent quality',
      'Beach zone location'
    ]
  },
  {
    id: 'cafe-mar-y-cielo',
    name: 'Café Mar y Cielo',
    category: 'cafe',
    description: 'A gem for breakfast in Puerto Escondido with beautiful ocean views and fresh, quality food.',
    address: 'La Punta',
    priceRange: '$$',
    tags: ['breakfast', 'healthy'],
    highlights: [
      'Ocean views',
      'Quality breakfast',
      'Relaxing atmosphere'
    ]
  },
  {
    id: 'barrio-cafe',
    name: 'Barrio Cafe',
    category: 'cafe',
    description: 'Breakfast, lunch, fresh juices, smoothies and the best coffee in town! Located in the heart of La Punta next to Hostal Akumal.',
    address: 'Alejandro Cárdenas, next to Hostal Akumal, La Punta',
    priceRange: '$$',
    tags: ['juice-bar', 'breakfast', 'healthy'],
    highlights: [
      'Fresh juices and smoothies',
      'Excellent coffee',
      'Healthy breakfast and lunch options'
    ],
    jenniferNote: 'Perfect for fresh juice and nutritious meals. Great spot for morning fuel.'
  },
  {
    id: 'disfruita',
    name: 'Disfruita',
    category: 'cafe',
    description: 'Healthy breakfast spot worth multiple visits. Fresh, nutritious options in a welcoming atmosphere.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['breakfast', 'healthy'],
    highlights: [
      'Healthy breakfast options',
      'Fresh ingredients',
      'Consistent quality'
    ]
  },
  {
    id: 'dulce-tierra',
    name: 'Dulce Tierra',
    category: 'cafe',
    description: 'Bakery and cafe with three locations around Puerto Escondido. Known for the best croissants and baguettes in town, plus excellent coffee.',
    address: 'Three locations around Puerto Escondido',
    priceRange: '$$',
    tags: ['breakfast'],
    highlights: [
      'Best croissants in town',
      'Excellent baguettes',
      'Quality coffee',
      'Fresh pastries'
    ]
  },
  {
    id: 'cafe-nopal',
    name: 'Café Nopal',
    category: 'cafe',
    description: 'Hidden treasure for digital nomads with delectable baked goods, vegetarian dishes, nutritious drinks, and reliable WiFi in a trendy yet cozy ambiance.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['vegetarian', 'healthy', 'breakfast'],
    highlights: [
      'Vegetarian options',
      'Nutritious drinks',
      'Good WiFi',
      'Cozy atmosphere'
    ]
  },

  // RESTAURANTS - VEGAN/VEGETARIAN
  {
    id: 'spirulina',
    name: 'Spirulina',
    category: 'restaurant',
    description: 'Fully vegan/vegetarian restaurant offering plant-based Mexican cuisine with fresh, organic ingredients.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['vegan', 'vegetarian', 'organic', 'healthy'],
    highlights: [
      'Plant-based Mexican dishes',
      'Organic ingredients',
      'Health-conscious menu'
    ],
    jenniferNote: 'Excellent example of traditional Mexican cuisine adapted for plant-based diets.'
  },
  {
    id: 'maya-papaya',
    name: 'Maya Papaya',
    category: 'restaurant',
    description: 'Vegetarian and healthy food restaurant with fresh, organic options.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['vegetarian', 'healthy', 'organic'],
    highlights: [
      'Fresh vegetarian dishes',
      'Organic options',
      'Health-focused menu'
    ]
  },
  {
    id: 'bonito-bowl',
    name: 'Bonito Bowl',
    category: 'restaurant',
    description: 'Specializing in healthy bowls including acai bowls, poke bowls, and nutritious meal bowls.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['healthy', 'vegetarian'],
    highlights: [
      'Acai bowls',
      'Poke bowls',
      'Healthy meal options'
    ]
  },
  {
    id: 'trigo-verde',
    name: 'Trigo Verde',
    category: 'restaurant',
    description: 'Vegetarian restaurant offering wholesome, meat-free meals.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['vegetarian', 'local'],
    highlights: [
      'Vegetarian specialties',
      'Wholesome meals'
    ]
  },

  // RESTAURANTS - SEAFOOD
  {
    id: 'el-curandero',
    name: 'El Curandero',
    category: 'seafood',
    description: 'Bustling seafood joint specializing in ceviches, Mexican seafood cocktails, grilled and fried fish, and oversized micheladas. Known for tiritas de pescado (raw fish marinated in lime).',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['seafood', 'ceviche', 'local', 'traditional'],
    highlights: [
      'Fresh ceviches',
      'Tiritas de pescado',
      'Seafood cocktails',
      'Grilled fish',
      'Authentic local atmosphere'
    ],
    jenniferNote: 'Great example of traditional Mexican seafood preparation. Fresh daily catches.'
  },
  {
    id: 'chicama',
    name: 'Chicama',
    category: 'seafood',
    description: 'Authentic Peruvian-style ceviche restaurant in Zicatela area.',
    address: 'Zicatela',
    priceRange: '$$',
    tags: ['seafood', 'ceviche'],
    highlights: [
      'Peruvian ceviche',
      'Fresh fish',
      'Authentic preparation'
    ]
  },
  {
    id: 'fish-shack',
    name: 'Fish Shack',
    category: 'seafood',
    description: 'Tucked down a sandy alley leading to the beach, perfect spot for fresh seafood tacos and mezcal. Famous for their fish sandwich.',
    address: 'Sandy alley to beach, La Punta',
    priceRange: '$$',
    tags: ['seafood', 'local'],
    highlights: [
      'Fresh seafood tacos',
      'Famous fish sandwich',
      'Beach atmosphere',
      'Mezcal selection'
    ]
  },
  {
    id: 'mariinera',
    name: 'Mariinera',
    category: 'seafood',
    description: 'Japanese-Mexican fusion restaurant offering fresh sashimi and tostadas.',
    address: 'Zicatela',
    priceRange: '$$$',
    tags: ['seafood'],
    highlights: [
      'Fresh sashimi',
      'Seafood tostadas',
      'Fusion cuisine'
    ]
  },
  {
    id: 'ceviches-claudio',
    name: 'Ceviches Claudio',
    category: 'seafood',
    description: 'Popular La Punta restaurant known for variety of fresh ceviches made with shrimp, octopus, and fish.',
    address: 'La Punta',
    priceRange: '$$',
    tags: ['seafood', 'ceviche'],
    highlights: [
      'Variety of ceviches',
      'Shrimp, octopus, fish options',
      'Unique recipes',
      'Fresh daily'
    ]
  },
  {
    id: 'turtle-bay',
    name: 'Turtle Bay Restaurant',
    category: 'seafood',
    description: 'Seafood restaurant with wonderful food and great service.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['seafood'],
    highlights: [
      'Excellent service',
      'Fresh seafood',
      'Consistent quality'
    ]
  },
  {
    id: 'el-nene',
    name: 'El Nene',
    category: 'seafood',
    description: 'Highly-rated upscale seafood restaurant. Considered one of the best in Puerto Escondido.',
    address: 'Puerto Escondido',
    priceRange: '$$$',
    tags: ['seafood'],
    highlights: [
      'Upscale dining',
      'Premium seafood',
      'Excellent reputation'
    ]
  },

  // WELLNESS & YOGA
  {
    id: 'barbarenas',
    name: 'Barbarenas Eco Retreat Center',
    category: 'wellness',
    description: 'Community dedicated to hosting yoga and holistic retreats, facilitating healing and personal growth. Located in the heart of La Punta Zicatela.',
    address: 'La Punta Zicatela',
    website: 'https://barbarenas.mx/',
    priceRange: '$$$',
    tags: ['yoga', 'retreat', 'wellness'],
    highlights: [
      'Yoga and holistic retreats',
      'Personal growth programs',
      'Community atmosphere',
      'Prime surfing location'
    ],
    jenniferNote: 'Perfect for immersive wellness experiences. Great community for connecting with like-minded health professionals.'
  },
  {
    id: 'casa-calibra',
    name: 'Casa Calibra Wellness Hotel',
    category: 'wellness',
    description: 'All-inclusive wellness retreats for individuals, couples, and small groups. Comprehensive wellness experience.',
    address: 'Puerto Escondido',
    website: 'https://www.calibra.life/',
    priceRange: '$$$$',
    tags: ['wellness', 'retreat'],
    highlights: [
      'All-inclusive wellness retreats',
      'Customized programs',
      'Luxury accommodations',
      'Holistic approach'
    ]
  },
  {
    id: 'casamar-suites',
    name: 'Casamar Suites',
    category: 'wellness',
    description: 'Offers specialized wellness programs including "Breathe and Release Wellness Yoga Retreat" and Personal Juice Detox programs. Daily yoga, meditation, and healthy cuisine.',
    address: 'Puerto Escondido',
    priceRange: '$$$',
    tags: ['yoga', 'wellness', 'retreat'],
    highlights: [
      'Juice detox programs',
      'Daily yoga and meditation',
      'Healthy cuisine',
      'Structured wellness programs'
    ],
    jenniferNote: 'Excellent for understanding holistic wellness approaches and juice cleanse protocols.'
  },
  {
    id: 'marea-yoga-studio',
    name: 'Marea Yoga Studio',
    category: 'wellness',
    description: 'Stunning ocean-view yoga studio specializing in sunrise and sunset sessions. Offers hatha, vinyasa, power flow, yin, aerial yoga, acro yoga, kundalini, meditation, and kids yoga. Harnesses natural energy transitions of the day.',
    address: 'Puerto Escondido (oceanfront)',
    website: 'https://www.mareayogastudio.com/',
    priceRange: '$$',
    tags: ['yoga', 'wellness'],
    highlights: [
      'Ocean views',
      'Sunrise & sunset sessions',
      'Multiple yoga styles',
      'Aerial yoga',
      'Kids yoga classes',
      'Meditation & pranayama'
    ],
    jenniferNote: 'Perfect for experiencing different yoga modalities in a breathtaking setting. Great for understanding mind-body practices.'
  },
  {
    id: 'vida-yoga-center',
    name: 'Vida Yoga Center',
    category: 'wellness',
    description: 'Comprehensive yoga center offering daily classes, wellness retreats, and yoga teacher training programs. Community-focused with experienced instructors.',
    address: 'Puerto Escondido',
    website: 'https://www.vidayogacenter.com/',
    priceRange: '$$',
    tags: ['yoga', 'wellness', 'retreat'],
    highlights: [
      'Daily yoga classes',
      'Wellness retreats',
      'Teacher training programs',
      'Experienced instructors',
      'Community atmosphere'
    ],
    jenniferNote: 'Great for deepening yoga practice or exploring teacher training. Strong community of wellness practitioners.'
  },
  {
    id: 'suave-studio',
    name: 'Suave Studio - Yoga & Wellness Center',
    category: 'wellness',
    description: 'Modern yoga and wellness center offering variety of classes and holistic therapies in a peaceful setting.',
    address: 'Puerto Escondido',
    instagram: '@suave__studio',
    priceRange: '$$',
    tags: ['yoga', 'wellness'],
    highlights: [
      'Variety of yoga styles',
      'Wellness therapies',
      'Modern facilities',
      'Peaceful atmosphere'
    ]
  },
  {
    id: 'go-with-flo',
    name: 'Go With The Flo - Wellness Therapy',
    category: 'wellness',
    description: 'Flo is a wellness therapist offering yoga, sound healing, and spiritual ceremonies including cacao ceremonies. Personalized approach to feeling better in body and mind.',
    address: 'Puerto Escondido',
    website: 'https://gowiththeflo-yoga.com/',
    priceRange: '$$',
    tags: ['yoga', 'wellness', 'sound-healing'],
    highlights: [
      'Yoga sessions',
      'Sound healing',
      'Cacao ceremonies',
      'Spiritual practices',
      'Personalized wellness'
    ],
    jenniferNote: 'Unique approach combining traditional and spiritual wellness practices. Great for exploring alternative healing modalities.'
  },
  {
    id: 'enforma-wellness',
    name: 'EnForma Wellness Hub',
    category: 'wellness',
    description: 'Comprehensive wellness directory connecting you to gyms, yoga studios, sound baths, Reiki, shamanic healing, breathwork, and integrative medicine in Puerto Escondido.',
    address: 'Multiple locations',
    website: 'https://puertoescondido.enformawellness.com/',
    priceRange: '$$',
    tags: ['wellness', 'holistic'],
    highlights: [
      'Wide range of wellness services',
      'Shamanic healing',
      'Breathwork sessions',
      'Reiki treatments',
      'Sound baths',
      'Integrative medicine'
    ],
    jenniferNote: 'Excellent resource for discovering various holistic practitioners and wellness modalities in one place.'
  },
  {
    id: 'temazcal-ceremonies',
    name: 'Traditional Temazcal Ceremonies',
    category: 'wellness',
    description: 'Authentic traditional Mexican sweat lodge ceremonies for purification, healing, and spiritual connection. Led by experienced facilitators.',
    address: 'Various locations in Puerto Escondido',
    priceRange: '$$',
    tags: ['wellness', 'traditional', 'holistic'],
    highlights: [
      'Traditional sweat lodge',
      'Purification ceremony',
      'Spiritual healing',
      'Authentic Mexican tradition',
      'Experienced guides'
    ],
    jenniferNote: 'Important cultural wellness practice. Excellent for understanding traditional Mexican healing ceremonies and their therapeutic benefits.'
  },

  // EXPERIENCES
  {
    id: 'the-mexykan',
    name: 'The Mexykan - Cooking Classes & Market Tours',
    category: 'experience',
    description: 'Mexican cooking class & local market tour offering insider experience at Benito Juarez Market. Includes Oaxacan breakfast at local comedor, market tour with vendors, and hands-on cooking with professional chef.',
    address: 'Starts at Mercado Benito Juárez',
    website: 'https://themexykan.com/',
    priceRange: '$$$',
    tags: ['cooking-class', 'traditional', 'local'],
    highlights: [
      'Market tour with locals',
      'Traditional Oaxacan breakfast',
      'Hands-on cooking class',
      'Professional chef instruction',
      'Meet local vendors'
    ],
    jenniferNote: 'Essential for understanding traditional Oaxacan cuisine and ingredient sourcing. Great networking with chef and vendors.'
  },
  {
    id: 'traditional-oaxacan-cooking',
    name: 'Traditional Oaxacan Cuisine Tour with Jazmin',
    category: 'experience',
    description: 'Hands-on cooking class focused on traditional Oaxacan techniques and recipes.',
    address: 'Puerto Escondido',
    priceRange: '$$$',
    tags: ['cooking-class', 'traditional'],
    highlights: [
      'Traditional Oaxacan techniques',
      'Hands-on experience',
      'Authentic recipes'
    ]
  },
  {
    id: 'puerto-mezcal-tours',
    name: 'Puerto Mezcal Tours',
    category: 'experience',
    description: 'Visit ancestral mezcal distillery just outside Puerto Escondido. Taste 10+ handcrafted mezcals, learn history and production methods. 700+ five-star reviews. Tours run Tuesdays, Thursdays, Saturdays at 3:30pm.',
    address: 'Pickup in Puerto Escondido, distillery outside town',
    website: 'https://www.puertomezcal.mx/',
    instagram: '@puertomezcaltours',
    priceRange: '$$$',
    tags: ['mezcal', 'traditional', 'local'],
    highlights: [
      'Ancestral distillery visit',
      'Taste 10+ mezcals',
      'Learn production process',
      'Highly rated (700+ 5-star reviews)',
      'English and Spanish tours',
      'Interactive presentation'
    ],
    jenniferNote: 'Perfect for understanding traditional agave cultivation and mezcal production. Potential article topic on artisanal spirits.'
  },
  {
    id: 'me-encanta-oaxaca',
    name: 'Me Encanta Oaxaca - Food Tours',
    category: 'experience',
    description: 'Food tours and cooking classes promoting sustainable tourism and local consumption. Authentic local food experiences.',
    address: 'Various locations in Oaxaca',
    website: 'https://meencantaoaxaca.com/',
    priceRange: '$$$',
    tags: ['cooking-class', 'sustainable', 'local'],
    highlights: [
      'Sustainable tourism focus',
      'Authentic local food',
      'Cooking classes',
      'Food tours'
    ]
  },
  {
    id: 'puerto-food-tours',
    name: 'Puerto Food Tours',
    category: 'experience',
    description: 'Delicious culinary walking tours supporting family-run local businesses. Meet the proud people behind your food, hear fascinating stories, and taste antique recipes on insider experiences.',
    address: 'Multiple locations in Puerto Escondido',
    website: 'https://www.puertofoodtours.com/',
    priceRange: '$$$',
    tags: ['food-tour', 'local', 'traditional'],
    highlights: [
      'Support local family businesses',
      'Traditional recipes',
      'Food storytelling',
      'Walking tours',
      'Insider access to vendors'
    ],
    jenniferNote: 'Perfect for understanding local food culture and meeting artisanal food producers. Great networking opportunity.'
  },
  {
    id: 'roberts-ecotours',
    name: 'Robert\'s Ecotours - Mezcal & Coffee Tour',
    category: 'experience',
    description: 'Visit a local palenque (mezcal distillery) to learn about ancestral mezcal espadín production process, followed by coffee farm tour. Taste and learn about traditional agave cultivation.',
    address: 'Pickup in Puerto Escondido',
    website: 'https://robertsecotours.com/tours/mezcal-and-coffe-tour/',
    priceRange: '$$',
    tags: ['mezcal', 'coffee', 'traditional', 'eco-tour'],
    highlights: [
      'Palenque distillery visit',
      'Coffee farm tour',
      'Ancestral production methods',
      'Tastings included',
      'Learn agave cultivation'
    ],
    jenniferNote: 'Combines two important Oaxacan agricultural products. Great for understanding traditional farming and production.'
  },
  {
    id: 'oaxacan-cooking-etno',
    name: 'Etno Food - Oaxacan Vegetarian Cooking Class',
    category: 'experience',
    description: 'Immersive cooking class blending culinary and cultural experiences in cozy courtyard setting. Vegetarian-focused with vegan adaptations. Learn traditional Oaxacan techniques.',
    address: 'Oaxaca City',
    priceRange: '$$$',
    tags: ['cooking-class', 'vegetarian', 'traditional'],
    highlights: [
      'Vegetarian Oaxacan cooking',
      'Vegan adaptations available',
      'Cultural immersion',
      'Cozy courtyard setting',
      'Traditional techniques'
    ],
    jenniferNote: 'Excellent for learning plant-based versions of traditional Oaxacan dishes. Cultural context included.'
  },
  {
    id: 'mezcal-pairing-dinner',
    name: 'Puerto Mezcal - Pairing Dinner Experience',
    category: 'experience',
    description: 'Exclusive 6-course dinner paired with 6 different artisanal mezcals. From appetizers to dessert, each dish expertly paired to enhance flavors. Unique setting in Puerto Escondido\'s only mezcal distillery.',
    address: 'Puerto Mezcal Distillery',
    website: 'https://www.puertomezcal.mx/',
    priceRange: '$$$$',
    tags: ['mezcal', 'dining', 'traditional'],
    highlights: [
      '6-course gourmet dinner',
      '6 mezcal pairings',
      'Only distillery in Puerto',
      'Magical atmosphere',
      'Expert pairing guidance'
    ],
    jenniferNote: 'Upscale culinary experience showcasing mezcal\'s versatility. Great for understanding flavor profiles and traditional spirits.'
  },
  {
    id: 'market-photography-tour',
    name: 'Mercado Photography & Culture Tour',
    category: 'experience',
    description: 'Guided photography tour through Mercado Benito Juárez focusing on vibrant colors, traditional vendors, and local ingredients. Learn about Oaxacan food culture while capturing stunning images.',
    address: 'Mercado Benito Juárez',
    priceRange: '$$',
    tags: ['photography', 'local', 'traditional'],
    highlights: [
      'Photography guidance',
      'Cultural education',
      'Meet local vendors',
      'Learn ingredient stories',
      'Vibrant market scenes'
    ],
    jenniferNote: 'Perfect for content creation and understanding traditional food systems. Great for Instagram and blog content.'
  },
  {
    id: 'chocolate-workshop',
    name: 'Traditional Oaxacan Chocolate Workshop',
    category: 'experience',
    description: 'Hands-on workshop learning traditional chocolate-making from cacao bean to finished chocolate. Grind on metate, mix with spices, and create your own blend to take home.',
    address: 'Puerto Escondido',
    priceRange: '$$',
    tags: ['cooking-class', 'traditional', 'chocolate'],
    highlights: [
      'Bean-to-bar process',
      'Traditional metate grinding',
      'Spice blending',
      'Take home your creation',
      'Learn Oaxacan chocolate history'
    ],
    jenniferNote: 'Essential for understanding cacao as superfood and traditional preparation methods. Great hands-on experience.'
  },
  {
    id: 'sunrise-beach-yoga',
    name: 'Sunrise Beach Yoga Sessions',
    category: 'experience',
    description: 'Start your day with oceanfront yoga on Zicatela or La Punta beaches. Various styles offered by different instructors. Drop-in classes welcome.',
    address: 'Zicatela & La Punta beaches',
    priceRange: '$',
    tags: ['yoga', 'wellness', 'beach'],
    highlights: [
      'Beach setting',
      'Sunrise timing',
      'Various yoga styles',
      'Drop-in friendly',
      'Ocean sounds meditation'
    ],
    jenniferNote: 'Accessible way to experience yoga with spectacular natural setting. Great for morning mindfulness practice.'
  }
];
