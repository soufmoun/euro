// lib/itineraries.ts
export interface Itinerary {
    slug: string;
    title: string;
    description: string;
    duration: string;
    budget: string;
    countries: string[];
    image?: string;
    cover?: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    bestFor: string[];
    highlights: string[];
    days: Day[];
    tips: string[];
    included: string[];
    notIncluded: string[];
  }
  
  export interface Day {
    day: number;
    title: string;
    description: string;
    activities: string[];
    accommodation: string;
    meals: string[];
    budget: string;
  }
  
  export const sampleItineraries: Itinerary[] = [
    {
      slug: "paris-rome-7days",
      title: "7-Day Paris & Rome Express",
      description: "Perfect first-time Europe trip covering two iconic cities with efficient travel between them. Experience the romance of Paris and the ancient history of Rome in one unforgettable week.",
      duration: "7 days",
      budget: "€550-750",
      countries: ["France", "Italy"],
      difficulty: "Easy",
      bestFor: ["First-time travelers", "Couples", "Culture lovers"],
      highlights: [
        "Eiffel Tower and Louvre Museum in Paris",
        "Colosseum and Vatican City in Rome",
        "Seine River cruise in Paris",
        "Roman Forum and Trevi Fountain",
        "Authentic French and Italian cuisine"
      ],
      days: [
        {
          day: 1,
          title: "Arrival in Paris & Eiffel Tower",
          description: "Arrive in Paris, settle in, and visit the iconic Eiffel Tower",
          activities: [
            "Check into accommodation near Montmartre",
            "Evening visit to Eiffel Tower",
            "Seine River walk",
            "Dinner in Latin Quarter"
          ],
          accommodation: "Budget hotel/hostel in Montmartre (€35-50)",
          meals: ["Lunch: Bakery sandwich (€5)", "Dinner: Bistro meal (€15-20)"],
          budget: "€60-85"
        },
        {
          day: 2,
          title: "Paris Museum Day",
          description: "Explore world-class museums and historic neighborhoods",
          activities: [
            "Louvre Museum (book online in advance)",
            "Notre-Dame Cathedral exterior visit",
            "Explore Marais district",
            "Evening in Montmartre"
          ],
          accommodation: "Same accommodation",
          meals: ["Breakfast: Croissant & coffee (€4)", "Lunch: Market food (€8)", "Dinner: Crepes (€10)"],
          budget: "€42-52"
        },
        // Add more days...
      ],
      tips: [
        "Book Louvre tickets online to skip queues",
        "Use Paris Visite pass for transport",
        "Fly from Paris to Rome for cheapest option",
        "Book Colosseum tickets in advance"
      ],
      included: [
        "Detailed day-by-day itinerary",
        "Accommodation recommendations",
        "Restaurant and food suggestions",
        "Transportation guidance",
        "Budget breakdown"
      ],
      notIncluded: [
        "Flights between cities",
        "Travel insurance",
        "Personal expenses",
        "Optional activities"
      ]
    },
    {
      slug: "eastern-europe-10days",
      title: "10-Day Eastern Europe Tour",
      description: "Budget-friendly adventure through Prague, Budapest, and Vienna - amazing value for money with stunning architecture, rich history, and affordable prices.",
      duration: "10 days",
      budget: "€400-600",
      countries: ["Czech Republic", "Hungary", "Austria"],
      difficulty: "Moderate",
      bestFor: ["Budget travelers", "Solo travelers", "History enthusiasts"],
      highlights: [
        "Prague Castle and Charles Bridge",
        "Budapest thermal baths",
        "Vienna's Schönbrunn Palace",
        "Affordable Central European cuisine",
        "Stunning architecture in three capitals"
      ],
      days: [
        // Day details for Eastern Europe itinerary
      ],
      tips: [
        "Use night trains between cities to save on accommodation",
        "Buy city cards for public transport",
        "Eat at local markets for cheapest meals"
      ],
      included: [
        "Detailed day-by-day itinerary",
        "Budget accommodation options",
        "Local food recommendations",
        "Transportation tips"
      ],
      notIncluded: [
        "Intercity transportation",
        "Travel insurance",
        "Museum entry fees"
      ]
    },
    // Add more itineraries...
  ];
  
  export function getItineraryBySlug(slug: string): Itinerary | undefined {
    return sampleItineraries.find(itinerary => itinerary.slug === slug);
  }
  
  export function getAllItineraries(): Itinerary[] {
    return sampleItineraries;
  }