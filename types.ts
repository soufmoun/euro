// app/destinations/[slug]/components/types.ts
export interface DestinationData {
    title: string;
    slug: string;
    dailyBudget: string;
    currency: string;
    bestFor: string[];
    images: {
      streetFood: string;
      attraction: string;
      transport: string;
      market: string;
      night: string;
      park: string;
    };
    budgetRanges: {
      accommodation: { min: number; max: number };
      food: { min: number; max: number };
      transport: { min: number; max: number };
      activities: { min: number; max: number };
    };
    checklistSections: {
      beforeYouGo: string[];
      packingEssentials: string[];
      moneySavingTips: string[];
    };
  }
  
  // Example destinations data
  export const destinations: Record<string, DestinationData> = {
    paris: {
      title: "Paris",
      slug: "paris",
      dailyBudget: "€65-85",
      currency: "€",
      bestFor: ["Romance", "Culture", "Food"],
      images: {
        streetFood: "/images/destinations/paris-street-food.jpg",
        attraction: "/images/destinations/paris-free-museum.jpg",
        transport: "/images/destinations/paris-metro-night.jpg",
        market: "/images/destinations/paris-market.jpg",
        night: "/images/destinations/paris-night.jpg",
        park: "/images/destinations/paris-park.jpg"
      },
      budgetRanges: {
        accommodation: { min: 30, max: 150 },
        food: { min: 15, max: 80 },
        transport: { min: 3, max: 30 },
        activities: { min: 5, max: 50 }
      },
      checklistSections: {
        beforeYouGo: [
          "Book accommodation 3+ months in advance",
          "Download offline maps",
          "Learn basic local phrases",
          "Get travel insurance",
          "Inform bank of travel plans"
        ],
        packingEssentials: [
          "Comfortable walking shoes",
          "Reusable water bottle",
          "Power adapter (Type E)",
          "Light rain jacket",
          "Crossbody bag (anti-theft)"
        ],
        moneySavingTips: [
          "Buy public transport passes",
          "Visit museums on free days",
          "Eat at local bakeries for lunch",
          "Take free walking tours",
          "Enjoy free park picnics"
        ]
      }
    },
    rome: {
      title: "Rome",
      slug: "rome",
      dailyBudget: "€55-75",
      currency: "€",
      bestFor: ["History", "Food", "Photography"],
      images: {
        streetFood: "/images/destinations/rome-street-food.jpg",
        attraction: "/images/destinations/rome-colosseum.jpg",
        transport: "/images/destinations/rome-metro.jpg",
        market: "/images/destinations/rome-market.jpg",
        night: "/images/destinations/rome-night.jpg",
        park: "/images/destinations/rome-park.jpg"
      },
      budgetRanges: {
        accommodation: { min: 25, max: 120 },
        food: { min: 12, max: 60 },
        transport: { min: 3, max: 25 },
        activities: { min: 5, max: 40 }
      },
      checklistSections: {
        beforeYouGo: [
          "Book Vatican tickets in advance",
          "Download Roma Pass app",
          "Learn basic Italian greetings",
          "Get travel insurance",
          "Check religious site dress codes"
        ],
        packingEssentials: [
          "Comfortable walking shoes",
          "Light scarf for churches",
          "Power adapter (Type L)",
          "Sunscreen and hat",
          "Money belt"
        ],
        moneySavingTips: [
          "Free Vatican on last Sunday",
          "Drink from public fountains (nasoni)",
          "Aperitivo for cheap drinks & snacks",
          "Free entrance to most churches",
          "Buy Roma Pass if visiting 3+ attractions"
        ]
      }
    },
    tokyo: {
      title: "Tokyo",
      slug: "tokyo",
      dailyBudget: "¥7,000-10,000",
      currency: "¥",
      bestFor: ["Culture", "Food", "Technology"],
      images: {
        streetFood: "/images/destinations/tokyo-street-food.jpg",
        attraction: "/images/destinations/tokyo-temple.jpg",
        transport: "/images/destinations/tokyo-train.jpg",
        market: "/images/destinations/tokyo-market.jpg",
        night: "/images/destinations/tokyo-night.jpg",
        park: "/images/destinations/tokyo-park.jpg"
      },
      budgetRanges: {
        accommodation: { min: 3000, max: 15000 },
        food: { min: 1500, max: 8000 },
        transport: { min: 500, max: 3000 },
        activities: { min: 500, max: 5000 }
      },
      checklistSections: {
        beforeYouGo: [
          "Book accommodation near Yamanote line",
          "Download Japan Travel app",
          "Learn basic Japanese phrases",
          "Get portable WiFi/pocket WiFi",
          "Exchange currency in advance"
        ],
        packingEssentials: [
          "Comfortable walking shoes",
          "Portable power bank",
          "Small backpack for day trips",
          "Light jacket for air-conditioned places",
          "Reusable shopping bag"
        ],
        moneySavingTips: [
          "Use Suica/Pasmo card for transport",
          "Convenience store meals (7-11, FamilyMart)",
          "Free observation decks (Tokyo Metro Building)",
          "Visit during happy hour (5-7 PM)",
          "Walk between close stations"
        ]
      }
    }
  };