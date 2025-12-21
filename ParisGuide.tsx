// app/destinations/[slug]/components/ParisGuide.tsx
'use client';

import { useState } from 'react';
import { Destination } from '@/lib/posts/destinations';
import './ParisGuide.css';

interface ParisGuideProps {
  destination: Destination;
  destinationData?: any;
}

// Paris-specific configuration data
const PARIS_CONFIG = {
  currency: '€',
  budgetRanges: {
    accommodation: { min: 30, max: 150, default: 40 },
    food: { min: 15, max: 80, default: 20 },
    transport: { min: 3, max: 30, default: 5 },
    activities: { min: 5, max: 50, default: 10 }
  },
  
  // Dynamic images - update these URLs to change images
  images: [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      alt: "Affordable Paris hostel",
      caption: "Hostels in Paris start from €25-€40 per night"
    },
    {
      src: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=400&h=300&fit=crop",
      alt: "Paris Metro system",
      caption: "The Metro is the cheapest way to get around Paris"
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      alt: "Paris boulangerie",
      caption: "Boulangeries offer cheap, delicious meals from €5-€8"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      alt: "Paris food market",
      caption: "Local markets have fresh produce for budget picnics"
    },
    {
      src: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
      alt: "Free view in Paris",
      caption: "Many Paris viewpoints like Sacré-Cœur are completely free"
    },
    {
      src: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=400&h=300&fit=crop",
      alt: "Paris park picnic",
      caption: "Parks provide free, beautiful spaces to relax and eat"
    }
  ],

  // Dynamic FAQ data
  faqs: [
    {
      id: 'faq1',
      question: 'How much money do I need per day in Paris?',
      answer: 'For budget travelers, €65-€85 per day is realistic. This covers hostel accommodation, supermarket/bakery meals, public transport, and 1-2 paid attractions.'
    },
    {
      id: 'faq2',
      question: 'What is the best time to visit Paris on a budget?',
      answer: 'November to March (excluding Christmas) offers the lowest prices. January is particularly good for flight and accommodation deals.'
    },
    {
      id: 'faq3',
      question: 'Is the Paris Museum Pass worth it?',
      answer: 'Only if you plan to visit 3+ museums in 2 days. For most budget travelers, free museum days (first Sunday of each month) are better.'
    },
    {
      id: 'faq4',
      question: 'How can I save on transportation in Paris?',
      answer: 'Buy a carnet of 10 Metro tickets (€16.90 instead of €2.10 each), use Velib bikes for short trips, and walk whenever possible.'
    },
    {
      id: 'faq5',
      question: 'Where can I find cheap eats in Paris?',
      answer: 'Visit boulangeries for €5-€8 sandwiches, food markets like Marché d\'Aligre, and student areas like the Latin Quarter.'
    }
  ],

  // Dynamic checklist data
  checklist: {
    beforeYouGo: [
      { id: "bookAccommodation", label: "Book accommodation 3+ months in advance" },
      { id: "downloadMaps", label: "Download Citymapper/Google Maps offline" },
      { id: "learnFrench", label: "Learn basic French phrases" },
      { id: "getInsurance", label: "Get travel insurance" },
      { id: "informBank", label: "Inform bank of travel plans" }
    ],
    packing: [
      { id: "walkingShoes", label: "Comfortable walking shoes" },
      { id: "waterBottle", label: "Reusable water bottle" },
      { id: "powerAdapter", label: "Power adapter (Type E)" },
      { id: "rainJacket", label: "Light rain jacket" },
      { id: "crossbodyBag", label: "Crossbody bag (anti-theft)" }
    ],
    moneySaving: [
      { id: "metroTickets", label: "Buy carnet of 10 Metro tickets" },
      { id: "freeMuseumDays", label: "Visit museums on free days" },
      { id: "boulangerieLunch", label: "Eat at boulangeries for lunch" },
      { id: "freeTours", label: "Take free walking tours" },
      { id: "parkPicnic", label: "Enjoy free park picnics" }
    ]
  },

  // Dynamic neighborhood data
  neighborhoods: [
    {
      name: "Latin Quarter (5th)",
      bestFor: "Student meals",
      priceRange: "€8-€12",
      mustTry: "Rue Mouffetard market lunch",
      tip: "Visit Tuesday, Thursday & Saturday mornings for the best market prices"
    },
    {
      name: "Belleville (19th/20th)",
      bestFor: "Authentic ethnic food",
      priceRange: "€6-€10",
      mustTry: "Vietnamese pho shops",
      tip: "Largest Chinatown in Paris - perfect for budget Asian cuisine"
    },
    {
      name: "Le Marais (4th)",
      bestFor: "Quick bites & Jewish delicacies",
      priceRange: "€8-€15",
      mustTry: "Falafel on Rue des Rosiers",
      tip: "L'As du Fallafel is legendary - expect a queue but worth it"
    }
  ],

  // Dynamic walking routes
  walkingRoutes: [
    {
      name: "Louvre → Notre-Dame",
      distance: "1.5 km",
      time: "20 mins",
      savings: "€4.20",
      description: "Tuileries Garden, Pont des Arts, Île de la Cité",
      tip: "Perfect for photography - bridges offer best Seine River shots"
    },
    {
      name: "Montmartre Village Loop",
      distance: "3 km",
      time: "1 hour",
      savings: "€8.45",
      description: "Sacré-Cœur, Place du Tertre artists, Moulin Rouge",
      tip: "Best in morning before crowds arrive at Sacré-Cœur"
    },
    {
      name: "Seine River Stroll",
      distance: "4 km",
      time: "1 hour",
      savings: "€12+",
      description: "All major bridges, bookstalls, Eiffel Tower views",
      tip: "Evening walks offer illuminated monuments - magical and free!"
    }
  ]
};

// Paris Budget Calculator Component
function ParisBudgetCalculator() {
  const [budget, setBudget] = useState({
    accommodation: PARIS_CONFIG.budgetRanges.accommodation.default,
    food: PARIS_CONFIG.budgetRanges.food.default,
    transport: PARIS_CONFIG.budgetRanges.transport.default,
    activities: PARIS_CONFIG.budgetRanges.activities.default,
    duration: 3
  });

  const totalPerDay = budget.accommodation + budget.food + budget.transport + budget.activities;
  const totalTrip = totalPerDay * budget.duration;

  const updateBudget = (category: string, value: number) => {
    setBudget(prev => ({ ...prev, [category]: value }));
  };

  return (
    <div className="card shadow-lg border-0 mb-5">
      <div className="card-body">
        <h3 className="card-title h4 mb-4">💰 Interactive Paris Budget Calculator</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Accommodation ({PARIS_CONFIG.currency}/day)</label>
              <input
                type="range"
                className="form-range"
                min={PARIS_CONFIG.budgetRanges.accommodation.min}
                max={PARIS_CONFIG.budgetRanges.accommodation.max}
                step="5"
                value={budget.accommodation}
                onChange={(e) => updateBudget('accommodation', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>{PARIS_CONFIG.currency}{PARIS_CONFIG.budgetRanges.accommodation.min}</span>
                <span className="fw-bold">{PARIS_CONFIG.currency}{budget.accommodation}</span>
                <span>{PARIS_CONFIG.currency}{PARIS_CONFIG.budgetRanges.accommodation.max}</span>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Food ({PARIS_CONFIG.currency}/day)</label>
              <input
                type="range"
                className="form-range"
                min={PARIS_CONFIG.budgetRanges.food.min}
                max={PARIS_CONFIG.budgetRanges.food.max}
                step="5"
                value={budget.food}
                onChange={(e) => updateBudget('food', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>{PARIS_CONFIG.currency}{PARIS_CONFIG.budgetRanges.food.min}</span>
                <span className="fw-bold">{PARIS_CONFIG.currency}{budget.food}</span>
                <span>{PARIS_CONFIG.currency}{PARIS_CONFIG.budgetRanges.food.max}</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Transport ({PARIS_CONFIG.currency}/day)</label>
              <input
                type="range"
                className="form-range"
                min={PARIS_CONFIG.budgetRanges.transport.min}
                max={PARIS_CONFIG.budgetRanges.transport.max}
                step="1"
                value={budget.transport}
                onChange={(e) => updateBudget('transport', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>{PARIS_CONFIG.currency}{PARIS_CONFIG.budgetRanges.transport.min}</span>
                <span className="fw-bold">{PARIS_CONFIG.currency}{budget.transport}</span>
                <span>{PARIS_CONFIG.currency}{PARIS_CONFIG.budgetRanges.transport.max}</span>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Trip Duration (days)</label>
              <input
                type="range"
                className="form-range"
                min="1"
                max="14"
                step="1"
                value={budget.duration}
                onChange={(e) => updateBudget('duration', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>1 day</span>
                <span className="fw-bold">{budget.duration} days</span>
                <span>14 days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="budget-summary mt-4">
          <div className="row text-center">
            <div className="col-md-6">
              <h5 className="mb-1">Daily Budget</h5>
              <div className="display-6 fw-bold text-primary">
                {PARIS_CONFIG.currency}{totalPerDay}
              </div>
              <small className="text-muted">per person per day</small>
            </div>
            <div className="col-md-6">
              <h5 className="mb-1">Total Trip Cost</h5>
              <div className="display-6 fw-bold text-success">
                {PARIS_CONFIG.currency}{totalTrip}
              </div>
              <small className="text-muted">for {budget.duration} days</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Paris Image Gallery Component
function ParisImageGallery() {
  return (
    <div className="paris-image-gallery my-5">
      <h3 className="mb-4">📷 Paris Budget Travel Gallery</h3>
      <div className="row g-3">
        {PARIS_CONFIG.images.map((image, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm gallery-item">
              <img 
                src={image.src} 
                alt={image.alt}
                className="card-img-top"
                loading="lazy"
              />
              <div className="card-body">
                <p className="card-text small">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Paris FAQ Component
function ParisFAQ() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>('faq1');

  const toggleFAQ = (id: string) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="card shadow-sm border-0 my-5">
      <div className="card-body">
        <h3 className="card-title h4 mb-4">❓ Paris Budget Travel FAQ</h3>
        
        <div className="accordion" id="parisFAQAccordion">
          {PARIS_CONFIG.faqs.map((faq) => (
            <div key={faq.id} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${activeFAQ === faq.id ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={activeFAQ === faq.id}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${activeFAQ === faq.id ? 'show' : ''}`}
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-tip mt-4 text-center">
          <p className="text-muted small">
            <strong>Pro Tip:</strong> Most museums offer free admission on the first Sunday of each month.
            Arrive early to avoid long queues!
          </p>
        </div>
      </div>
    </div>
  );
}

// Paris Checklist Component
function ParisChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Initialize all checklist items as unchecked
  const allItems = [
    ...PARIS_CONFIG.checklist.beforeYouGo,
    ...PARIS_CONFIG.checklist.packing,
    ...PARIS_CONFIG.checklist.moneySaving
  ];
  
  allItems.forEach(item => {
    if (!(item.id in checkedItems)) {
      checkedItems[item.id] = false;
    }
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = Object.keys(checkedItems).length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  const checklistSections = [
    { title: "Before You Go", items: PARIS_CONFIG.checklist.beforeYouGo },
    { title: "Packing Essentials", items: PARIS_CONFIG.checklist.packing },
    { title: "Money-Saving Must-Dos", items: PARIS_CONFIG.checklist.moneySaving }
  ];

  return (
    <div className="card shadow-sm border-0 my-5">
      <div className="card-body">
        <h3 className="card-title h4 mb-4">📋 Interactive Paris Checklist</h3>
        
        <div className="row">
          {checklistSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="col-md-4">
              <h5 className="h6 mb-3 text-primary fw-bold">{section.title}</h5>
              <div className="list-group checklist-group">
                {section.items.map((item) => (
                  <div 
                    key={item.id}
                    className={`list-group-item list-group-item-action cursor-pointer ${checkedItems[item.id] ? 'list-group-item-success' : ''}`}
                    onClick={() => toggleCheck(item.id)}
                  >
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        checked={checkedItems[item.id]}
                        onChange={() => toggleCheck(item.id)}
                        id={item.id}
                      />
                      <label className="form-check-label flex-grow-1" htmlFor={item.id}>
                        {item.label}
                      </label>
                      {checkedItems[item.id] && (
                        <span className="text-success ms-2">✓</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="checklist-progress mt-4 text-center">
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div 
              className="progress-bar bg-success" 
              role="progressbar" 
              style={{ width: `${percentage}%` }}
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {percentage}%
            </div>
          </div>
          
          <div className="badge bg-primary fs-6 p-3">
            {completedCount} / {totalCount} items completed
          </div>
          
          <p className="text-muted mt-2 small">
            Click items to check them off. Print or screenshot before your trip!
          </p>
          
          <button 
            className="btn btn-outline-secondary btn-sm mt-2 no-print"
            onClick={() => window.print()}
          >
            🖨️ Print Checklist
          </button>
        </div>
      </div>
    </div>
  );
}

// Paris Neighborhoods Component
function ParisNeighborhoods() {
  return (
    <div className="paris-neighborhoods my-5">
      <h3 className="mb-4">🍽️ Where Locals Eat Cheap in Paris</h3>
      <div className="row">
        {PARIS_CONFIG.neighborhoods.map((neighborhood, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{neighborhood.name}</h5>
                <div className="neighborhood-details">
                  <p><strong>Best For:</strong> {neighborhood.bestFor}</p>
                  <p><strong>Price Range:</strong> {neighborhood.priceRange}</p>
                  <p><strong>Must Try:</strong> {neighborhood.mustTry}</p>
                </div>
                <div className="neighborhood-tip mt-3">
                  <p className="small text-muted mb-0">💡 {neighborhood.tip}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Paris Walking Routes Component
function ParisWalkingRoutes() {
  return (
    <div className="paris-walking-routes my-5">
      <h3 className="mb-4">🚶 Walkable Paris Routes (Save €5-€10 Daily)</h3>
      <div className="row">
        {PARIS_CONFIG.walkingRoutes.map((route, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{route.name}</h5>
                <div className="route-stats d-flex justify-content-between mb-3">
                  <span className="badge bg-light text-dark">📍 {route.distance}</span>
                  <span className="badge bg-light text-dark">⏱️ {route.time}</span>
                  <span className="badge bg-success text-white">💰 Save: {route.savings}</span>
                </div>
                <p><strong>What you'll see:</strong> {route.description}</p>
                <div className="route-tip mt-3">
                  <p className="small text-muted mb-0">👣 {route.tip}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// MAIN DEFAULT EXPORT
export default function ParisGuide({ destination, destinationData }: ParisGuideProps) {
  return (
    <div className="paris-guide">
      <ParisBudgetCalculator />
      <ParisNeighborhoods />
      <ParisWalkingRoutes />
      <ParisImageGallery />
      <ParisChecklist />
      <ParisFAQ />
    </div>
  );
}