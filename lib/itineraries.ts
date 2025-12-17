// lib/itineraries.ts - COMPLETE FIXED VERSION
export interface Itinerary {
  slug: string;
  title: string;
  description: string;
  duration: string;
  budget: string;
  countries: string[];
  image?: string;
  cover?: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging'| 'Adventurous';
  bestFor: string[];
  highlights: string[];
  days: Day[];
  rating?: number; // Add this
  reviews?: number; // Add this
  tags?: string[]; // Add this
  mapImage?: string; // Add this
  tips: string[];
  included: string[];
  notIncluded: string[];
  route?: string[]; 
}

export interface Day {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodation: string;
  meals: string[];
  budget: string;
  image?: string;
}

// Use sample data directly for server-side rendering
export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return sampleItineraries.find(itinerary => itinerary.slug === slug);
}

export function getAllItineraries(): Itinerary[] {
  return sampleItineraries;
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
      {
        day: 3,
        title: "Paris to Rome & Ancient Rome",
        description: "Morning flight to Rome and explore Ancient Rome",
        activities: [
          "Morning flight Paris → Rome",
          "Check into accommodation near Termini",
          "Visit Colosseum and Roman Forum",
          "Trevi Fountain in the evening"
        ],
        accommodation: "Hostel near Termini Station (€30-45)",
        meals: ["Lunch: Airport food (€12)", "Dinner: Roman pasta (€12-18)"],
        budget: "€80-110"
      },
      {
        day: 4,
        title: "Vatican City & Trastevere",
        description: "Explore Vatican City and Rome's most charming neighborhood",
        activities: [
          "Vatican Museums and Sistine Chapel",
          "St. Peter's Basilica",
          "Explore Trastevere district",
          "Evening food tour"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Cornetto & cappuccino (€4)", "Lunch: Pizza al taglio (€6)", "Dinner: Trattoria meal (€15-25)"],
        budget: "€45-60"
      }
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
      {
        day: 1,
        title: "Arrival in Prague",
        description: "Arrive in Prague and explore the Old Town",
        activities: [
          "Check into hostel near Old Town Square",
          "Explore Astronomical Clock",
          "Charles Bridge walk at sunset",
          "Traditional Czech dinner"
        ],
        accommodation: "Hostel in Prague 1 (€20-35)",
        meals: ["Lunch: Trdelník (€3)", "Dinner: Goulash & dumplings (€10-15)"],
        budget: "€40-60"
      },
      {
        day: 2,
        title: "Prague Castle & Jewish Quarter",
        description: "Explore Prague's historic sites",
        activities: [
          "Visit Prague Castle complex",
          "Golden Lane and St. Vitus Cathedral",
          "Jewish Quarter (Josefov)",
          "Evening river cruise"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Pastry & coffee (€4)", "Lunch: Czech pub food (€8-12)", "Dinner: Traditional restaurant (€12-18)"],
        budget: "€35-50"
      }
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
  {
    slug: "mediterranean-14days",
    title: "14-Day Mediterranean Journey",
    description: "Sun, sea, and history across Barcelona, French Riviera, and Italy's Amalfi Coast. Perfect mix of beach relaxation and cultural exploration.",
    duration: "14 days",
    budget: "€800-1000",
    countries: ["Spain", "France", "Italy"],
    difficulty: "Moderate",
    bestFor: ["Beach lovers", "Foodies", "Families"],
    highlights: [
      "Sagrada Familia and Park Güell in Barcelona",
      "French Riviera beaches and Monaco day trip",
      "Cinque Terre colorful villages",
      "Amalfi Coast drive and Positano views",
      "Mediterranean seafood and local wines"
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Barcelona: Gothic Quarter",
        description: "Arrive in Barcelona and explore the historic Gothic Quarter",
        activities: [
          "Check into accommodation in Eixample district",
          "Walk through Gothic Quarter narrow streets",
          "Visit Barcelona Cathedral",
          "Tapas dinner in El Born"
        ],
        accommodation: "Hostel in Eixample (€30-45)",
        meals: ["Lunch: Airport snack (€8)", "Dinner: Tapas tour (€15-25)"],
        budget: "€60-90"
      },
      {
        day: 2,
        title: "Barcelona: Gaudí's Masterpieces",
        description: "Explore Antoni Gaudí's architectural wonders",
        activities: [
          "Morning visit to Sagrada Familia (book in advance)",
          "Park Güell for panoramic city views",
          "Casa Batlló exterior viewing",
          "Evening at Magic Fountain show"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Café con leche & pastry (€5)", "Lunch: Paella (€12-18)", "Dinner: Local restaurant (€15-20)"],
        budget: "€50-65"
      },
      {
        day: 3,
        title: "Barcelona to Nice via Train",
        description: "High-speed train to French Riviera and explore Nice",
        activities: [
          "Morning train Barcelona → Nice (6 hours)",
          "Check into accommodation near Promenade des Anglais",
          "Walk along the famous promenade",
          "Dinner in Old Town (Vieux Nice)"
        ],
        accommodation: "Budget hotel in Nice (€40-60)",
        meals: ["Lunch: Train station food (€10)", "Dinner: Socca & Niçoise salad (€12-18)"],
        budget: "€80-110"
      },
      {
        day: 4,
        title: "French Riviera: Monaco & Cannes",
        description: "Day trip to glamorous Monaco and Cannes",
        activities: [
          "Train to Monaco (30 minutes)",
          "Visit Monte Carlo Casino exterior and Prince's Palace",
          "Train to Cannes, walk the Croisette",
          "Return to Nice for sunset at Castle Hill"
        ],
        accommodation: "Same accommodation in Nice",
        meals: ["Breakfast: Boulangerie items (€6)", "Lunch: Pan bagnat sandwich (€8)", "Dinner: French bistro (€15-25)"],
        budget: "€45-65"
      },
      {
        day: 5,
        title: "Nice to Cinque Terre via Genoa",
        description: "Train journey to Italy's colorful coastal villages",
        activities: [
          "Morning train Nice → Genoa → Cinque Terre",
          "Check into Riomaggiore accommodation",
          "Hike between Riomaggiore and Manarola (Via dell'Amore)",
          "Seafood dinner overlooking the sea"
        ],
        accommodation: "Guesthouse in Riomaggiore (€50-70)",
        meals: ["Lunch: Focaccia in Genoa (€6)", "Dinner: Fresh seafood pasta (€15-22)"],
        budget: "€90-125"
      },
      {
        day: 6,
        title: "Cinque Terre Villages",
        description: "Explore all five villages of Cinque Terre",
        activities: [
          "Buy Cinque Terre Card for trains and hikes",
          "Visit Vernazza harbor and Corniglia on the cliffs",
          "Swim at Monterosso al Mare beach",
          "Sunset in Manarola (most photographed spot)"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Italian pastry (€4)", "Lunch: Pesto pasta in Vernazza (€12)", "Dinner: Local trattoria (€15-20)"],
        budget: "€45-60"
      },
      {
        day: 7,
        title: "Cinque Terre to Amalfi Coast",
        description: "Travel to southern Italy's most scenic coastline",
        activities: [
          "Train to La Spezia, then to Salerno",
          "Ferry from Salerno to Amalfi",
          "Check into Amalfi town accommodation",
          "Evening walk through Amalfi's historic center"
        ],
        accommodation: "Family-run hotel in Amalfi (€60-85)",
        meals: ["Lunch: Train station panini (€7)", "Dinner: Amalfi lemon pasta (€16-24)"],
        budget: "€100-140"
      },
      {
        day: 8,
        title: "Amalfi Coast: Positano & Ravello",
        description: "Explore the most beautiful towns of the coast",
        activities: [
          "Bus to Positano (walk down to beach)",
          "Boat tour along the coast",
          "Bus to Ravello for gardens and views",
          "Return to Amalfi for sunset drinks"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Hotel included", "Lunch: Pizza in Positano (€14-20)", "Dinner: Ravello terrace restaurant (€20-30)"],
        budget: "€60-90"
      },
      {
        day: 9,
        title: "Free Day or Capri Island Trip",
        description: "Choose between relaxation or Capri island adventure",
        activities: [
          "Option 1: Beach day in Amalfi",
          "Option 2: Ferry to Capri, Blue Grotto",
          "Option 3: Pompeii ruins day trip",
          "Evening farewell dinner"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Hotel included", "Lunch: Capri salad (€12-18)", "Dinner: Special farewell meal (€25-35)"],
        budget: "€50-90"
      }
    ],
    tips: [
      "Book Sagrada Familia tickets 1-2 months in advance",
      "Buy Cinque Terre Card for unlimited trains between villages",
      "Use ferries instead of buses on Amalfi Coast (less traffic)",
      "Pack swimwear and hiking shoes"
    ],
    included: [
      "Detailed day-by-day itinerary",
      "Accommodation recommendations for all budgets",
      "Restaurant and local food suggestions",
      "Transportation guidance (trains, ferries, buses)",
      "Budget breakdown with daily estimates"
    ],
    notIncluded: [
      "International flights to/from Europe",
      "Travel insurance",
      "Optional activities (Capri boat tour, etc.)",
      "Personal shopping expenses"
    ]
  },
  {
    slug: "balkan-adventure-12days",
    title: "12-Day Balkan Adventure",
    description: "Off-the-beaten-path exploration through Croatia, Bosnia, and Montenegro. Discover hidden gems, stunning nature, and incredible value.",
    duration: "12 days",
    budget: "€350-550",
    countries: ["Croatia", "Bosnia and Herzegovina", "Montenegro"],
    difficulty: "Adventurous",
    bestFor: ["Adventure seekers", "Nature lovers", "Budget travelers"],
    highlights: [
      "Dubrovnik's medieval walls and Game of Thrones locations",
      "Mostar's iconic Stari Most bridge",
      "Kotor Bay fjord-like scenery",
      "Plitvice Lakes National Park waterfalls",
      "Affordable Balkan cuisine and hospitality"
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Dubrovnik",
        description: "Arrive in Croatia's Pearl of the Adriatic",
        activities: [
          "Check into accommodation near Old Town",
          "Walk the ancient city walls",
          "Explore Stradun (main street)",
          "Dinner in old town restaurant"
        ],
        accommodation: "Hostel in Dubrovnik (€25-40)",
        meals: ["Lunch: Ćevapi (€5-8)", "Dinner: Seafood risotto (€12-18)"],
        budget: "€45-75"
      },
      {
        day: 2,
        title: "Dubrovnik & Lokrum Island",
        description: "Explore Dubrovnik and nearby island",
        activities: [
          "Cable car to Mount Srđ for panoramic views",
          "Ferry to Lokrum Island nature reserve",
          "Swim in the Dead Sea lake",
          "Game of Thrones locations tour"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Pastry & coffee (€4)", "Lunch: Island picnic (€8)", "Dinner: Peka dish (€10-15)"],
        budget: "€35-50"
      },
      {
        day: 3,
        title: "Dubrovnik to Mostar via Coastal Drive",
        description: "Scenic drive to Bosnia and Herzegovina",
        activities: [
          "Rent car or take bus to Mostar",
          "Stop at Počitelj historic village",
          "Check into Mostar accommodation",
          "Evening bridge viewing"
        ],
        accommodation: "Guesthouse in Mostar (€20-35)",
        meals: ["Lunch: Bosnian burek (€3-5)", "Dinner: Ćevapi in old town (€8-12)"],
        budget: "€40-65"
      },
      {
        day: 4,
        title: "Mostar & Blagaj Day",
        description: "Explore Mostar and nearby natural wonders",
        activities: [
          "Watch bridge divers at Stari Most",
          "Visit Koski Mehmed Paša Mosque",
          "Bus to Blagaj (Dervish monastery at spring)",
          "Evening in old bazaar"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Bosnian coffee & pastry (€4)", "Lunch: Grilled meat platter (€7-10)", "Dinner: Local restaurant (€8-12)"],
        budget: "€25-35"
      },
      {
        day: 5,
        title: "Mostar to Sarajevo",
        description: "Travel to Bosnia's capital through mountains",
        activities: [
          "Train or bus to Sarajevo",
          "Check into Baščaršija area accommodation",
          "Walk the Latin Bridge (WWI history)",
          "Dinner in old bazaar"
        ],
        accommodation: "Hostel in Sarajevo (€15-25)",
        meals: ["Lunch: Train/bus snack (€5)", "Dinner: Sarajevo ćevapi (€6-9)"],
        budget: "€30-45"
      },
      {
        day: 6,
        title: "Sarajevo: East Meets West",
        description: "Explore Europe's most culturally diverse capital",
        activities: [
          "Baščaršija market and Sebilj fountain",
          "Sarajevo Tunnel Museum (war history)",
          "Yellow Fortress for sunset views",
          "Try traditional Bosnian coffee"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Burek (€2-3)", "Lunch: Bosnian pot (€5-7)", "Dinner: International cuisine (€8-12)"],
        budget: "€20-30"
      },
      {
        day: 7,
        title: "Sarajevo to Kotor via Trebinje",
        description: "Travel to Montenegro with scenic stops",
        activities: [
          "Bus to Trebinje (wine region)",
          "Visit Trebinje's old town and bridge",
          "Continue to Kotor, Montenegro",
          "Check into accommodation inside old town walls"
        ],
        accommodation: "Guesthouse in Kotor Old Town (€25-40)",
        meals: ["Lunch: Trebinje restaurant (€7-10)", "Dinner: Montenegrin fish dish (€10-15)"],
        budget: "€45-70"
      },
      {
        day: 8,
        title: "Kotor Bay Exploration",
        description: "Discover the fjord-like Bay of Kotor",
        activities: [
          "Hike to Kotor Fortress for sunrise",
          "Boat tour around the bay",
          "Visit Perast and Our Lady of the Rocks",
          "Swim at nearby beach"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Guesthouse included", "Lunch: Bay-side restaurant (€8-12)", "Dinner: Pizza in old town (€7-10)"],
        budget: "€30-45"
      },
      {
        day: 9,
        title: "Kotor to Budva & Sveti Stefan",
        description: "Explore Montenegro's coastal resorts",
        activities: [
          "Bus to Budva (25 minutes)",
          "Explore Budva's old town and beaches",
          "Bus to Sveti Stefan (luxury island view)",
          "Return to Kotor for evening"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Guesthouse included", "Lunch: Budva seafood (€10-15)", "Dinner: Kotor konoba (€8-12)"],
        budget: "€35-50"
      },
      {
        day: 10,
        title: "Optional: Durmitor National Park or Dubrovnik Return",
        description: "Choose between mountain adventure or return to Croatia",
        activities: [
          "Option 1: Bus to Žabljak (Durmitor NP)",
          "Option 2: Return to Dubrovnik for extra day",
          "Option 3: Relax in Kotor and day trips",
          "Evening farewell dinner"
        ],
        accommodation: "Same accommodation or move",
        meals: ["Breakfast: Guesthouse included", "Lunch: Mountain hut or coastal", "Dinner: Celebration meal (€12-20)"],
        budget: "€40-70"
      }
    ],
    tips: [
      "Border crossings can take time - have documents ready",
      "Cash is king in Bosnia (convert some to BAM)",
      "Hike Kotor Fortress early to avoid heat and crowds",
      "Bargain politely in markets"
    ],
    included: [
      "Detailed day-by-day itinerary",
      "Accommodation options from hostels to guesthouses",
      "Local food recommendations",
      "Transportation tips (buses, trains, ferries)",
      "Budget breakdown with daily estimates"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Car rental (optional)",
      "Guided tour fees"
    ]
  },
  {
    slug: "scandinavian-nature-9days",
    title: "9-Day Scandinavian Nature Escape",
    description: "Experience the breathtaking fjords of Norway and charming cities of Sweden and Denmark. Perfect for nature enthusiasts and photography lovers.",
    duration: "9 days",
    budget: "€700-900",
    countries: ["Norway", "Sweden", "Denmark"],
    difficulty: "Easy",
    bestFor: ["Nature photographers", "Outdoor enthusiasts", "Luxury travelers"],
    highlights: [
      "Norway's Geirangerfjord (UNESCO World Heritage)",
      "Flåm Railway - one of world's most scenic train journeys",
      "Stockholm's Gamla Stan archipelago",
      "Copenhagen's Nyhavn and Tivoli Gardens",
      "Northern lights possibilities (seasonal)"
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Oslo: Viking Heritage",
        description: "Arrive in Norway's capital and explore Viking history",
        activities: [
          "Check into accommodation near city center",
          "Visit Viking Ship Museum",
          "Walk along Karl Johans gate",
          "Dinner in trendy Grünerløkka district"
        ],
        accommodation: "Hotel in Oslo (€80-120)",
        meals: ["Lunch: Airport food (€15)", "Dinner: Norwegian salmon (€20-30)"],
        budget: "€130-180"
      },
      {
        day: 2,
        title: "Oslo to Flåm via Scenic Train",
        description: "Norway in a Nutshell journey to fjord country",
        activities: [
          "Train Oslo → Myrdal (Bergensbanen)",
          "Flåm Railway (Flåmsbana) to Flåm village",
          "Check into fjord-side accommodation",
          "Evening fjord cruise"
        ],
        accommodation: "Fjord cabin or hotel (€90-140)",
        meals: ["Breakfast: Hotel included", "Lunch: Train station (€12)", "Dinner: Fjord restaurant (€25-35)"],
        budget: "€150-210"
      },
      {
        day: 3,
        title: "Geirangerfjord Day Trip",
        description: "Visit Norway's most famous UNESCO fjord",
        activities: [
          "Bus and ferry to Geiranger",
          "View from Flydalsjuvet and Dalsnibba",
          "Boat tour of Geirangerfjord",
          "Return to Flåm for evening"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Hotel included", "Lunch: Geiranger café (€15-20)", "Dinner: Flåm restaurant (€20-30)"],
        budget: "€60-85"
      },
      {
        day: 4,
        title: "Flåm to Bergen via Fjord Cruise",
        description: "Journey to Norway's coastal gateway city",
        activities: [
          "Fjord cruise Flåm → Gudvangen",
          "Bus to Voss, then train to Bergen",
          "Check into Bryggen area accommodation",
          "Evening at Fløyen funicular"
        ],
        accommodation: "Hotel in Bergen (€80-120)",
        meals: ["Breakfast: Hotel included", "Lunch: Cruise buffet (€18)", "Dinner: Bergen fish market (€20-30)"],
        budget: "€140-190"
      },
      {
        day: 5,
        title: "Bergen to Stockholm via Flight",
        description: "Fly to Sweden's beautiful capital on water",
        activities: [
          "Morning flight Bergen → Stockholm",
          "Check into Gamla Stan accommodation",
          "Walk through Stockholm's old town",
          "Evening in Södermalm district"
        ],
        accommodation: "Hotel in Stockholm (€90-130)",
        meals: ["Breakfast: Hotel included", "Lunch: Airport food (€15)", "Dinner: Swedish meatballs (€18-25)"],
        budget: "€150-200"
      },
      {
        day: 6,
        title: "Stockholm Archipelago",
        description: "Explore the 'Venice of the North'",
        activities: [
          "Vasa Museum (17th-century warship)",
          "Boat tour through the archipelago",
          "Skansen open-air museum",
          "Sunset at Monteliusvägen viewpoint"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Hotel included", "Lunch: Swedish smörgås (€12-18)", "Dinner: Modern Swedish cuisine (€25-35)"],
        budget: "€60-85"
      },
      {
        day: 7,
        title: "Stockholm to Copenhagen via Train",
        description: "High-speed train to Denmark's design capital",
        activities: [
          "Train Stockholm → Copenhagen (5 hours)",
          "Check into Nyhavn area accommodation",
          "Walk along colorful Nyhavn canal",
          "Dinner in Christianshavn"
        ],
        accommodation: "Hotel in Copenhagen (€85-130)",
        meals: ["Breakfast: Hotel included", "Lunch: Train food (€12)", "Dinner: Danish smørrebrød (€20-28)"],
        budget: "€140-190"
      },
      {
        day: 8,
        title: "Copenhagen Highlights",
        description: "Explore Denmark's bicycle-friendly capital",
        activities: [
          "Rent a bicycle for city exploration",
          "Little Mermaid statue and Kastellet",
          "Tivoli Gardens amusement park",
          "Freetown Christiania visit"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Hotel included", "Lunch: Hot dog from pølsevogn (€5)", "Dinner: New Nordic cuisine (€30-40)"],
        budget: "€60-90"
      },
      {
        day: 9,
        title: "Departure Day",
        description: "Last-minute exploration and departure",
        activities: [
          "Optional: Louisiana Museum of Modern Art",
          "Shopping on Strøget pedestrian street",
          "Relax in Kongens Have park",
          "Transfer to airport for departure"
        ],
        accommodation: "N/A",
        meals: ["Breakfast: Hotel included", "Lunch: Last Danish meal (€15-20)"],
        budget: "€30-50"
      }
    ],
    tips: [
      "Book Norway in a Nutshell tickets in advance",
      "Pack layers - weather changes quickly",
      "Scandinavia is expensive - budget accordingly",
      "Use City Pass cards for public transport"
    ],
    included: [
      "Detailed day-by-day itinerary",
      "Accommodation recommendations with Scandinavian standards",
      "Dining suggestions from street food to fine dining",
      "Transportation guidance (trains, flights, ferries)",
      "Nature activity planning"
    ],
    notIncluded: [
      "International flights to/from Scandinavia",
      "Travel insurance",
      "Optional guided tours",
      "Personal shopping and luxury expenses"
    ]
  },
  {
    slug: "iberian-peninsula-15days",
    title: "15-Day Iberian Peninsula Tour",
    description: "From Lisbon's hills to Madrid's art and Barcelona's beaches. Experience the diverse cultures, cuisines, and landscapes of Spain and Portugal.",
    duration: "15 days",
    budget: "€600-800",
    countries: ["Portugal", "Spain"],
    difficulty: "Moderate",
    bestFor: ["Foodies", "Culture lovers", "Slow travelers"],
    highlights: [
      "Lisbon's Alfama district and tram 28",
      "Porto's Ribeira district and port wine cellars",
      "Madrid's Prado Museum and tapas culture",
      "Seville's Alcázar and flamenco shows",
      "Barcelona's Gaudí architecture and Mediterranean beaches"
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Lisbon: Alfama Exploration",
        description: "Arrive in Portugal's hilly capital",
        activities: [
          "Check into accommodation in Baixa or Alfama",
          "Ride historic Tram 28",
          "Miradouro de Santa Luzia viewpoint",
          "Fado dinner experience"
        ],
        accommodation: "Hostel in Lisbon (€25-40)",
        meals: ["Lunch: Pastel de nata & coffee (€4)", "Dinner: Fado house meal (€15-25)"],
        budget: "€50-85"
      },
      {
        day: 2,
        title: "Lisbon: Belém & Modern Lisbon",
        description: "Explore Lisbon's historic and modern sides",
        activities: [
          "Belém Tower and Jerónimos Monastery",
          "Try pastéis de Belém at original bakery",
          "LX Factory creative space",
          "Evening in Bairro Alto for nightlife"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Pastry & coffee (€4)", "Lunch: Grilled sardines (€8-12)", "Dinner: Bifana sandwich (€5-8)"],
        budget: "€25-35"
      },
      {
        day: 3,
        title: "Day Trip to Sintra",
        description: "Fairy-tale palaces and castles day trip",
        activities: [
          "Train to Sintra (40 minutes)",
          "Visit Pena Palace (book tickets online)",
          "Explore Quinta da Regaleira gardens",
          "Return to Lisbon for evening"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Pastry & coffee (€4)", "Lunch: Sintra restaurant (€10-15)", "Dinner: Lisbon tasca (€10-15)"],
        budget: "€40-55"
      },
      {
        day: 4,
        title: "Lisbon to Porto via Train",
        description: "Travel north to Portugal's wine capital",
        activities: [
          "High-speed train Lisbon → Porto (3 hours)",
          "Check into Ribeira district accommodation",
          "Walk across Dom Luís I Bridge",
          "Port wine tasting at riverside cellar"
        ],
        accommodation: "Guesthouse in Porto (€35-50)",
        meals: ["Breakfast: Pastry & coffee (€4)", "Lunch: Train snack (€6)", "Dinner: Francesinha sandwich (€8-12)"],
        budget: "€65-90"
      },
      {
        day: 5,
        title: "Porto Exploration",
        description: "Discover Porto's historic center and wine culture",
        activities: [
          "Livraria Lello bookshop",
          "São Bento Station azulejo tiles",
          "Port wine cellar tour in Vila Nova de Gaia",
          "Sunset river cruise"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Guesthouse included", "Lunch: Porto tripe dish (€7-10)", "Dinner: Riverfront restaurant (€12-18)"],
        budget: "€35-50"
      },
      {
        day: 6,
        title: "Porto to Madrid via Flight",
        description: "Fly to Spain's vibrant capital",
        activities: [
          "Morning flight Porto → Madrid",
          "Check into accommodation near Puerta del Sol",
          "Walk Gran Vía and Plaza Mayor",
          "Evening tapas crawl in La Latina"
        ],
        accommodation: "Hostel in Madrid (€30-45)",
        meals: ["Breakfast: Guesthouse included", "Lunch: Airport food (€10)", "Dinner: Tapas hopping (€15-20)"],
        budget: "€70-95"
      },
      {
        day: 7,
        title: "Madrid: Art & Culture",
        description: "Explore Madrid's world-class museums",
        activities: [
          "Prado Museum (free hours 6-8pm)",
          "Retiro Park and Crystal Palace",
          "Royal Palace exterior visit",
          "Flamenco show in evening"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Churros con chocolate (€4)", "Lunch: Museo del Jamón (€8-12)", "Dinner: Spanish tortilla (€7-10)"],
        budget: "€30-45"
      },
      {
        day: 8,
        title: "Day Trip to Toledo",
        description: "Medieval city day trip from Madrid",
        activities: [
          "Bus to Toledo (1 hour)",
          "Explore Cathedral and Alcázar",
          "Walk medieval streets",
          "Return to Madrid for evening"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Churros con chocolate (€4)", "Lunch: Toledo marzipan tasting", "Dinner: Madrid mercado (€10-15)"],
        budget: "€35-50"
      },
      {
        day: 9,
        title: "Madrid to Seville via High-Speed Train",
        description: "Travel to Andalusia's passionate heart",
        activities: [
          "AVE train Madrid → Seville (2.5 hours)",
          "Check into Santa Cruz neighborhood accommodation",
          "Explore Seville Cathedral and Giralda",
          "Evening flamenco show"
        ],
        accommodation: "Hostel in Seville (€25-40)",
        meals: ["Breakfast: Pastry & coffee (€4)", "Lunch: Train snack (€8)", "Dinner: Tapas in El Rinconcillo (€12-18)"],
        budget: "€60-85"
      },
      {
        day: 10,
        title: "Seville: Alcázar & Flamenco",
        description: "Discover Seville's Moorish heritage",
        activities: [
          "Real Alcázar palace (book online)",
          "Plaza de España and Maria Luisa Park",
          "Metropol Parasol (Las Setas) for views",
          "Evening in Triana neighborhood"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Hostel included", "Lunch: Gazpacho & salmorejo (€8-12)", "Dinner: Seville tapas (€10-15)"],
        budget: "€30-45"
      },
      {
        day: 11,
        title: "Seville to Granada via Bus",
        description: "Travel to the foot of the Sierra Nevada",
        activities: [
          "Bus to Granada (3 hours)",
          "Check into Albayzín accommodation",
          "Explore Albaicín Moorish quarter",
          "Free tapas with drinks culture"
        ],
        accommodation: "Hostel in Granada (€20-35)",
        meals: ["Breakfast: Hostel included", "Lunch: Bus stop snack (€6)", "Dinner: Free tapas with drinks (€8-12)"],
        budget: "€40-60"
      },
      {
        day: 12,
        title: "Granada: Alhambra Palace",
        description: "Visit Spain's most famous Moorish monument",
        activities: [
          "Morning Alhambra visit (book MONTHS in advance)",
          "Generalife Gardens",
          "Sacromonte cave neighborhood",
          "Flamenco in caves at night"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Hostel included", "Lunch: Granada restaurant (€10-15)", "Dinner: Moroccan-inspired cuisine (€12-18)"],
        budget: "€35-55"
      },
      {
        day: 13,
        title: "Granada to Barcelona via Flight",
        description: "Fly to Catalonia's vibrant capital",
        activities: [
          "Morning flight Granada → Barcelona",
          "Check into accommodation in Gothic Quarter",
          "Walk Las Ramblas",
          "Evening at Magic Fountain show"
        ],
        accommodation: "Hostel in Barcelona (€30-50)",
        meals: ["Breakfast: Hostel included", "Lunch: Airport food (€10)", "Dinner: Paella by beach (€15-20)"],
        budget: "€70-100"
      },
      {
        day: 14,
        title: "Barcelona: Gaudí Day",
        description: "Explore Barcelona's modernist architecture",
        activities: [
          "Sagrada Familia interior (book in advance)",
          "Park Güell for city views",
          "Casa Batlló exterior",
          "Evening at Barceloneta Beach"
        ],
        accommodation: "Same accommodation",
        meals: ["Breakfast: Café con leche & pastry (€5)", "Lunch: Tapas in Gràcia (€12-18)", "Dinner: Seafood at beach (€18-25)"],
        budget: "€50-70"
      },
      {
        day: 15,
        title: "Departure Day",
        description: "Last-minute exploration and departure",
        activities: [
          "Optional: Montjuïc Castle or Picasso Museum",
          "Shopping on Passeig de Gràcia",
          "Last paella lunch",
          "Transfer to airport"
        ],
        accommodation: "N/A",
        meals: ["Breakfast: Hostel included", "Lunch: Final Spanish meal (€12-18)"],
        budget: "€25-35"
      }
    ],
    tips: [
      "Book Alhambra tickets 2-3 MONTHS in advance",
      "In Granada, drinks come with free tapas",
      "Use Renfe trains for best Spain rail deals",
      "Portuguese trains often cheaper than Spanish"
    ],
    included: [
      "Detailed day-by-day itinerary",
      "Accommodation options for all budgets",
      "Food recommendations from markets to fine dining",
      "Transportation guidance (trains, flights, buses)",
      "Cultural activity planning"
    ],
    notIncluded: [
      "International flights to/from Iberia",
      "Travel insurance",
      "Museum entry fees",
      "Optional activities (flamenco shows, etc.)"
    ]
  }
];