# Puerto Escondido Guide for Jennifer Sweenie

A personalized nutrition and wellness travel guide for Puerto Escondido, Oaxaca, Mexico.

## About This Guide

This guide was created specifically for **Jennifer Sweenie** - functional nutritional therapy practitioner, certified health-supportive chef, and health journalist. It features:

- 🛒 **5 Organic Markets & Shops** - Farm-direct produce, traditional vendors
- 🍽️ **18 Restaurants & Cafes** - Vegan, vegetarian, and sustainable seafood
- 🧘 **3 Wellness Centers** - Yoga retreats and holistic experiences
- ✨ **4 Unique Experiences** - Cooking classes, market tours, mezcal tastings
- 🌿 **12 Local Superfoods** - Nutritional info on traditional Oaxacan ingredients

## Features

- **Personalized for nutrition professionals** - Every location curated with functional nutrition in mind
- **Jennifer's Notes** - Special insights and tips for each location
- **Ingredient Spotlight** - Deep dives into local superfoods like heirloom corn, chia, amaranth
- **Mobile-first design** - Easy to use while exploring Puerto Escondido
- **Organic & sustainable focus** - Highlighting farm-to-table and traditional food practices

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide Icons** - Beautiful iconography

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the guide.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment

### Netlify Deployment

This app is ready to deploy on Netlify:

1. Push to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18+

The app will automatically deploy on every push to the main branch.

## Structure

```
/app                    # Next.js app directory
  /markets             # Markets & shops page
  /restaurants         # Restaurants & cafes page
  /wellness            # Wellness & yoga page
  /experiences         # Cooking classes & tours page
  /ingredients         # Local ingredients page
/components            # Reusable components
  Navigation.tsx       # Main navigation
  LocationCard.tsx     # Location display component
/data                  # Location and ingredient data
  locations.ts         # All locations data
  ingredients.ts       # Oaxacan ingredients data
/lib                   # Utilities and types
  utils.ts            # Helper functions
  types.ts            # TypeScript interfaces
```

## Data

All location and ingredient data is stored in TypeScript files:
- `data/locations.ts` - All markets, restaurants, wellness centers, and experiences
- `data/ingredients.ts` - Oaxacan superfoods and traditional ingredients

## Customization

To add new locations, edit `data/locations.ts` following the `Location` interface defined in `lib/types.ts`.

## Made With Love

Created with ❤️ for Jennifer Sweenie's Puerto Escondido adventure.

---

**Happy exploring, Jennifer! 🌮🥑🌺**
