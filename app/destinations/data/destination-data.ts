// app/destinations/data/destination-data.ts
export interface DestinationComponentData {
    name: string;
    currencySymbol: string;
    budgetRanges: {
      accommodation: { min: number; max: number; default: number };
      food: { min: number; max: number; default: number };
      transport: { min: number; max: number; default: number };
      activities: { min: number; max: number; default: number };
    };
    images?: {
      streetFood?: string;
      landmark?: string;
      transport?: string;
      market?: string;
      night?: string;
      park?: string;
    };
    checklist?: {
      beforeYouGo?: string[];
      packing?: string[];
      moneySaving?: string[];
    };
  }
  
  export function getDestinationData(slug: string): DestinationComponentData | null {
    const data: Record<string, DestinationComponentData> = {
      'paris': {
        name: "Paris",
        currencySymbol: "€",
        budgetRanges: {
          accommodation: { min: 30, max: 150, default: 40 },
          food: { min: 15, max: 80, default: 20 },
          transport: { min: 3, max: 30, default: 5 },
          activities: { min: 5, max: 50, default: 10 }
        },
        images: {
          streetFood: "/images/destinations/paris-street-food.jpg",
          landmark: "/images/destinations/paris-eiffel.jpg",
          transport: "/images/destinations/paris-metro.jpg",
          market: "/images/destinations/paris-market.jpg",
          night: "/images/destinations/paris-night.jpg",
          park: "/images/destinations/paris-park.jpg"
        },
        checklist: {
          beforeYouGo: [
            "Book accommodation 3+ months in advance",
            "Download offline maps",
            "Learn basic French phrases",
            "Get travel insurance"
          ],
          packing: [
            "Comfortable walking shoes",
            "Reusable water bottle",
            "Power adapter (Type E)",
            "Light rain jacket"
          ],
          moneySaving: [
            "Buy carnet of 10 Metro tickets",
            "Visit museums on free days",
            "Eat at boulangeries for lunch",
            "Enjoy free park picnics"
          ]
        }
      },
      'rome': {
        name: "Rome",
        currencySymbol: "€",
        budgetRanges: {
          accommodation: { min: 25, max: 120, default: 35 },
          food: { min: 12, max: 60, default: 18 },
          transport: { min: 3, max: 25, default: 4 },
          activities: { min: 5, max: 40, default: 8 }
        },
        images: {
          streetFood: "/images/destinations/rome-street-food.jpg",
          landmark: "/images/destinations/rome-colosseum.jpg",
          transport: "/images/destinations/rome-metro.jpg",
          market: "/images/destinations/rome-market.jpg",
          night: "/images/destinations/rome-night.jpg",
          park: "/images/destinations/rome-park.jpg"
        },
        checklist: {
          beforeYouGo: [
            "Book Vatican tickets in advance",
            "Download Roma Pass app",
            "Learn basic Italian greetings",
            "Get travel insurance"
          ],
          packing: [
            "Comfortable walking shoes",
            "Light scarf for churches",
            "Power adapter (Type L)",
            "Sunscreen and hat"
          ],
          moneySaving: [
            "Free Vatican on last Sunday",
            "Drink from public fountains",
            "Aperitivo for cheap drinks & snacks",
            "Free entrance to most churches"
          ]
        }
      }
    };
  
    // Return data for the slug, or generic data if not found
    return data[slug] || {
      name: slug.charAt(0).toUpperCase() + slug.slice(1),
      currencySymbol: "€",
      budgetRanges: {
        accommodation: { min: 20, max: 200, default: 50 },
        food: { min: 10, max: 100, default: 25 },
        transport: { min: 3, max: 50, default: 10 },
        activities: { min: 5, max: 80, default: 15 }
      }
    };
  }