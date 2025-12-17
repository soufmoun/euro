// lib/affiliate-config.ts - COMPLETE VERSION (FIXED)
export interface AffiliateProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  platform: 'amazon' | 'booking' | 'getyourguide' | 'viator' | 'skyscanner' | 'airbnb';
  rating: number;
  reviewCount: number;
  productId: string;
  badge?: string;
  destination?: string[];
}

// Pre-made affiliate products
export const parisAffiliateProducts: AffiliateProduct[] = [
  {
    id: 'paris-museum-pass',
    title: 'Paris Museum Pass (2 Days)',
    description: 'Skip-the-line access to 60+ museums and monuments including Louvre, Orsay, and Versailles',
    price: '€52',
    image: 'https://images.unsplash.com/photo-1580569601134-2b3c4d54510a?w=400&h=300&fit=crop',
    platform: 'getyourguide',
    rating: 4.7,
    reviewCount: 1234,
    productId: 'paris-museum-pass-tc1',
    badge: 'BEST SELLER',
    destination: ['paris']
  },
  {
    id: 'eiffel-tower-tickets',
    title: 'Eiffel Tower Skip-the-Line Summit Access',
    description: 'Direct elevator access to all floors with optional Seine cruise',
    price: 'From €35',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop',
    platform: 'viator',
    rating: 4.8,
    reviewCount: 5678,
    productId: 'eiffel-summit-tour',
    badge: 'POPULAR',
    destination: ['paris']
  },
  {
    id: 'portable-wifi-europe',
    title: 'Portable WiFi Device Europe',
    description: 'Unlimited 4G/LTE for all your devices - works in 40+ European countries',
    price: '€59/week',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    platform: 'amazon',
    rating: 4.5,
    reviewCount: 892,
    productId: 'B08XYZ123',
    badge: 'TRAVEL ESSENTIAL',
    destination: ['paris', 'rome', 'barcelona', 'amsterdam']
  }
];

export const romeAffiliateProducts: AffiliateProduct[] = [
  {
    id: 'colosseum-tour',
    title: 'Colosseum Guided Tour with Arena Floor',
    description: 'Skip-the-line access with expert guide, includes Roman Forum & Palatine Hill',
    price: '€65',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop',
    platform: 'getyourguide',
    rating: 4.9,
    reviewCount: 2345,
    productId: 'colosseum-arena-tour',
    badge: 'BEST SELLER',
    destination: ['rome']
  },
  {
    id: 'vatican-tickets',
    title: 'Vatican Museums & Sistine Chapel Skip-the-Line',
    description: 'Fast-track entry with audio guide, includes St. Peter\'s Basilica',
    price: '€45',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    platform: 'viator',
    rating: 4.8,
    reviewCount: 1890,
    productId: 'vatican-skip-line',
    badge: 'HOT DEAL',
    destination: ['rome']
  }
];

export const barcelonaAffiliateProducts: AffiliateProduct[] = [
  {
    id: 'sagrada-familia',
    title: 'Sagrada Familia Skip-the-Line Tickets',
    description: 'Fast entry to Gaudí masterpiece with tower access and audio guide',
    price: '€32',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=300&fit=crop',
    platform: 'getyourguide',
    rating: 4.7,
    reviewCount: 1567,
    productId: 'sagrada-familia-tickets',
    badge: 'MUST-SEE',
    destination: ['barcelona']
  }
];

// Destination mapping
export const destinationAffiliateProducts: Record<string, AffiliateProduct[]> = {
  paris: parisAffiliateProducts,
  rome: romeAffiliateProducts,
  barcelona: barcelonaAffiliateProducts,
  // Default/fallback products
  default: [
    {
      id: 'eurail-global-pass',
      title: 'Eurail Global Pass',
      description: 'Unlimited train travel across 33 European countries',
      price: 'From €185',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop',
      platform: 'skyscanner',
      rating: 4.6,
      reviewCount: 890,
      productId: 'eurail-global-pass',
      badge: 'BEST VALUE',
      destination: ['all']
    },
    {
      id: 'anti-theft-backpack',
      title: 'Anti-Theft Travel Backpack',
      description: 'Waterproof, slash-proof with USB charging port',
      price: '€89',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      platform: 'amazon',
      rating: 4.7,
      reviewCount: 1245,
      productId: 'B07XYZ456',
      badge: 'EDITOR\'S CHOICE',
      destination: ['all']
    }
  ]
};

// Generate affiliate link
export function generateAffiliateLink(
  platform: string,
  productId: string,
  params?: Record<string, string>
): string {
  const baseUrls: Record<string, string> = {
    amazon: 'https://www.amazon.com/dp/',
    booking: 'https://www.booking.com/s/',
    getyourguide: 'https://www.getyourguide.com/',
    viator: 'https://www.viator.com/',
    skyscanner: 'https://www.skyscanner.com/',
    airbnb: 'https://www.airbnb.com/rooms/'
  };

  let url = `${baseUrls[platform] || '#'}${productId}`;
  
  // Add UTM parameters for tracking
  const utmParams = new URLSearchParams({
    utm_source: 'eurobudget',
    utm_medium: 'affiliate',
    utm_campaign: platform,
    ...params
  });
  
  return `${url}?${utmParams.toString()}`;
}

// Get products for a specific destination (WITH DUPLICATE PREVENTION)
export function getAffiliateProductsForDestination(destinationSlug: string): AffiliateProduct[] {
  // Get destination-specific products if they exist
  const specificProducts = destinationAffiliateProducts[destinationSlug] || [];
  
  // Get default products
  const defaultProducts = destinationAffiliateProducts.default || [];
  
  // Create a Set of existing product IDs to avoid duplicates
  const existingIds = new Set(specificProducts.map(p => p.id));
  
  // Filter default products to only include ones not already in specific products
  const uniqueDefaultProducts = defaultProducts.filter(p => !existingIds.has(p.id));
  
  // Calculate how many default products we need to reach minimum of 3
  const neededDefaultCount = Math.max(0, 3 - specificProducts.length);
  
  // Take only the needed number of unique default products
  const selectedDefaults = uniqueDefaultProducts.slice(0, neededDefaultCount);
  
  // Combine specific products with selected unique defaults
  const allProducts = [...specificProducts, ...selectedDefaults];
  
  // If we still have less than 1 product (shouldn't happen), return at least one default
  if (allProducts.length === 0 && defaultProducts.length > 0) {
    return [defaultProducts[0]];
  }
  
  return allProducts;
}