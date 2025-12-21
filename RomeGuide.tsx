// app/destinations/rome/components/RomeGuide.tsx
'use client';

import { useState } from 'react';
import { Destination } from '@/lib/posts/destinations';

interface RomeGuideProps {
  destination: Destination;
}

export function BudgetCalculator() {
  const [budget, setBudget] = useState({
    accommodation: 35,
    food: 18,
    transport: 4,
    activities: 8,
    duration: 3
  });

  const totalPerDay = budget.accommodation + budget.food + budget.transport + budget.activities;
  const totalTrip = totalPerDay * budget.duration;

  const updateBudget = (category: keyof typeof budget, value: number) => {
    setBudget(prev => ({ ...prev, [category]: value }));
  };

  return (
    <div className="card shadow-lg border-0 mb-5">
      <div className="card-body">
        <h3 className="card-title h4 mb-4">💰 Interactive Rome Budget Calculator</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Accommodation (€/day)</label>
              <input
                type="range"
                className="form-range"
                min="25"
                max="120"
                step="5"
                value={budget.accommodation}
                onChange={(e) => updateBudget('accommodation', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>€25</span>
                <span className="fw-bold">€{budget.accommodation}</span>
                <span>€120</span>
              </div>
              <small className="text-muted">Hostel dorm to budget hotel</small>
            </div>

            <div className="mb-3">
              <label className="form-label">Food (€/day)</label>
              <input
                type="range"
                className="form-range"
                min="15"
                max="60"
                step="5"
                value={budget.food}
                onChange={(e) => updateBudget('food', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>€15</span>
                <span className="fw-bold">€{budget.food}</span>
                <span>€60</span>
              </div>
              <small className="text-muted">Street food to restaurant meals</small>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Transport (€/day)</label>
              <input
                type="range"
                className="form-range"
                min="3"
                max="20"
                step="1"
                value={budget.transport}
                onChange={(e) => updateBudget('transport', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>€3</span>
                <span className="fw-bold">€{budget.transport}</span>
                <span>€20</span>
              </div>
              <small className="text-muted">Walking to taxis</small>
            </div>

            <div className="mb-3">
              <label className="form-label">Trip Duration (days)</label>
              <input
                type="range"
                className="form-range"
                min="1"
                max="10"
                step="1"
                value={budget.duration}
                onChange={(e) => updateBudget('duration', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>1 day</span>
                <span className="fw-bold">{budget.duration} days</span>
                <span>10 days</span>
              </div>
              <small className="text-muted">Weekend to extended stay</small>
            </div>
          </div>
        </div>

        <div className="alert alert-warning mt-4" style={{borderLeft: '4px solid #8B4513'}}>
          <div className="row text-center">
            <div className="col-md-6">
              <h5 className="mb-1">Daily Budget</h5>
              <div className="display-6 fw-bold" style={{color: '#8B4513'}}>€{totalPerDay}</div>
              <small className="text-muted">per person per day</small>
            </div>
            <div className="col-md-6">
              <h5 className="mb-1">Total Trip Cost</h5>
              <div className="display-6 fw-bold text-success">€{totalTrip}</div>
              <small className="text-muted">for {budget.duration} days in Rome</small>
            </div>
          </div>
          <div className="mt-3">
            <small className="text-muted">
              💡 <strong>Budget Tip:</strong> Visit on first Sunday of month for free museum entry!
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImageGallery() {
  const images = [
    {
      src: "/images/destinations/rome-street-food.jpg",
      alt: "Affordable Rome street food",
      caption: "Pizza al taglio (€3-€5) makes for delicious, cheap meals"
    },
    {
      src: "/images/destinations/rome-colosseum.jpg",
      alt: "Colosseum in Rome",
      caption: "Book tickets online to skip the long queues"
    },
    {
      src: "/images/destinations/rome-trastevere.jpg",
      alt: "Trastevere neighborhood",
      caption: "Wander through authentic, cobblestone streets for free"
    },
    {
      src: "/images/destinations/rome-market.jpg",
      alt: "Rome food market",
      caption: "Markets like Testaccio offer fresh produce at local prices"
    },
    {
      src: "/images/destinations/rome-pantheon.jpg",
      alt: "Pantheon interior",
      caption: "Completely free entry to this ancient wonder"
    },
    {
      src: "/images/destinations/rome-fountain.jpg",
      alt: "Trevi Fountain",
      caption: "Iconic landmarks require no entrance fee"
    }
  ];

  return (
    <div className="my-5">
      <h3 className="mb-4">📷 Rome Budget Travel Gallery</h3>
      <div className="row g-3">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm">
              <img 
                src={image.src} 
                alt={image.alt}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
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

export function Checklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    bookColosseum: false,
    bookVatican: false,
    downloadMaps: false,
    learnItalian: false,
    getInsurance: false,
    walkingShoes: false,
    waterBottle: false,
    powerAdapter: false,
    churchClothes: false,
    crossbodyBag: false,
    romaPass: false,
    freeMuseumDays: false,
    eatStanding: false,
    freeTours: false,
    piazzaPicnic: false,
    validateTickets: false,
    avoidTouristMenus: false,
    useWaterFountains: false,
    planAperitivo: false,
    bookGalleria: false
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      title: "Before You Go",
      items: [
        { id: "bookColosseum", label: "Book Colosseum tickets 2-3 weeks ahead" },
        { id: "bookVatican", label: "Book Vatican Museums 2+ weeks in advance" },
        { id: "bookGalleria", label: "Reserve Galleria Borghese (mandatory)" },
        { id: "downloadMaps", label: "Download offline maps (cobblestone navigation!)" },
        { id: "learnItalian", label: "Learn basic Italian phrases" },
        { id: "getInsurance", label: "Get travel insurance" }
      ]
    },
    {
      title: "Packing Essentials",
      items: [
        { id: "walkingShoes", label: "Comfortable walking shoes (cobblestones!)" },
        { id: "waterBottle", label: "Reusable water bottle (free fountains everywhere)" },
        { id: "powerAdapter", label: "Power adapter (Type F/L)" },
        { id: "churchClothes", label: "Clothes covering shoulders/knees (for churches)" },
        { id: "crossbodyBag", label: "Crossbody bag (anti-theft)" }
      ]
    },
    {
      title: "Money-Saving Must-Dos",
      items: [
        { id: "romaPass", label: "Buy Roma Pass if visiting 2+ museums" },
        { id: "freeMuseumDays", label: "Visit museums on first Sunday (free)" },
        { id: "eatStanding", label: "Eat/drink standing at bars (50% cheaper)" },
        { id: "freeTours", label: "Take free walking tours" },
        { id: "piazzaPicnic", label: "Enjoy piazza picnics with market food" },
        { id: "validateTickets", label: "Validate transport tickets before boarding" },
        { id: "avoidTouristMenus", label: "Avoid restaurants with tourist menus" },
        { id: "useWaterFountains", label: "Use free nasone water fountains" },
        { id: "planAperitivo", label: "Plan for aperitivo time (6-9pm)" }
      ]
    }
  ];

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = Object.keys(checkedItems).length;

  return (
    <div className="card shadow-sm border-0 my-5">
      <div className="card-body">
        <h3 className="card-title h4 mb-4">📋 Interactive Rome Checklist</h3>
        
        <div className="row">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="col-md-4">
              <h5 className="h6 mb-3" style={{color: '#8B4513'}}>{section.title}</h5>
              <div className="list-group">
                {section.items.map((item) => (
                  <div 
                    key={item.id}
                    className={`list-group-item list-group-item-action cursor-pointer ${checkedItems[item.id] ? 'list-group-item-success' : ''}`}
                    onClick={() => toggleCheck(item.id)}
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        checked={checkedItems[item.id]}
                        onChange={() => toggleCheck(item.id)}
                        id={item.id}
                      />
                      <label className="form-check-label" htmlFor={item.id}>
                        {item.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <div className="progress mb-3" style={{height: '20px'}}>
            <div 
              className="progress-bar" 
              style={{ 
                width: `${(completedCount / totalCount) * 100}%`,
                backgroundColor: '#8B4513'
              }}
              role="progressbar"
              aria-valuenow={completedCount}
              aria-valuemin={0}
              aria-valuemax={totalCount}
            >
              {completedCount}/{totalCount}
            </div>
          </div>
          
          <div className="badge fs-6 p-3 mb-2" style={{backgroundColor: '#8B4513', color: 'white'}}>
            {completedCount} / {totalCount} items completed
          </div>
          
          <p className="text-muted mt-2 small">
            Click items to check them off. Print or screenshot before your trip!
            {completedCount === totalCount && " 🎉 All set for your Roman adventure!"}
          </p>
          
          {completedCount >= 10 && completedCount < totalCount && (
            <div className="alert alert-info mt-3">
              <small>💡 <strong>Almost there!</strong> Don't forget to book Vatican tickets and pack church-appropriate clothes.</small>
            </div>
          )}
        </div>
        
        <div className="mt-4 border-top pt-3">
          <button 
            className="btn btn-sm btn-outline-secondary me-2"
            onClick={() => {
              const allChecked = Object.keys(checkedItems).reduce((acc, key) => {
                acc[key] = true;
                return acc;
              }, {} as Record<string, boolean>);
              setCheckedItems(allChecked);
            }}
          >
            Check All
          </button>
          <button 
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              const allUnchecked = Object.keys(checkedItems).reduce((acc, key) => {
                acc[key] = false;
                return acc;
              }, {} as Record<string, boolean>);
              setCheckedItems(allUnchecked);
            }}
          >
            Uncheck All
          </button>
        </div>
      </div>
    </div>
  );
}

export function TransportCalculator() {
  const [transport, setTransport] = useState({
    metroTrips: 2,
    busTrips: 1,
    days: 3
  });

  const calculateCost = () => {
    const singleTicket = 1.50;
    const dailyTicket = 7;
    const weeklyTicket = 24;
    
    const totalTrips = (transport.metroTrips + transport.busTrips) * transport.days;
    const singleCost = totalTrips * singleTicket;
    const dailyCost = transport.days * dailyTicket;
    const weeklyCost = transport.days >= 5 ? weeklyTicket : Infinity;
    
    return { singleCost, dailyCost, weeklyCost, totalTrips };
  };

  const costs = calculateCost();
  const bestOption = Math.min(costs.singleCost, costs.dailyCost, costs.weeklyCost);

  return (
    <div className="card shadow-sm border-0 my-4">
      <div className="card-body">
        <h5 className="card-title mb-3">🚇 Rome Transport Cost Calculator</h5>
        
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Metro trips per day</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="6"
              step="1"
              value={transport.metroTrips}
              onChange={(e) => setTransport(prev => ({ ...prev, metroTrips: parseInt(e.target.value) }))}
            />
            <div className="text-center">{transport.metroTrips} trips</div>
          </div>
          
          <div className="col-md-4">
            <label className="form-label">Bus trips per day</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="6"
              step="1"
              value={transport.busTrips}
              onChange={(e) => setTransport(prev => ({ ...prev, busTrips: parseInt(e.target.value) }))}
            />
            <div className="text-center">{transport.busTrips} trips</div>
          </div>
          
          <div className="col-md-4">
            <label className="form-label">Days in Rome</label>
            <input
              type="range"
              className="form-range"
              min="1"
              max="10"
              step="1"
              value={transport.days}
              onChange={(e) => setTransport(prev => ({ ...prev, days: parseInt(e.target.value) }))}
            />
            <div className="text-center">{transport.days} days</div>
          </div>
        </div>
        
        <div className="alert alert-light">
          <div className="row text-center">
            <div className="col-md-4">
              <h6>Single Tickets</h6>
              <div className={`h4 ${costs.singleCost === bestOption ? 'fw-bold text-success' : ''}`}>
                €{costs.singleCost.toFixed(2)}
              </div>
              <small>{costs.totalTrips} × €1.50</small>
            </div>
            <div className="col-md-4">
              <h6>24-hour Pass</h6>
              <div className={`h4 ${costs.dailyCost === bestOption ? 'fw-bold text-success' : ''}`}>
                €{costs.dailyCost.toFixed(2)}
              </div>
              <small>{transport.days} × €7.00</small>
            </div>
            <div className="col-md-4">
              <h6>Weekly Pass</h6>
              <div className={`h4 ${costs.weeklyCost === bestOption ? 'fw-bold text-success' : ''}`}>
                €{costs.weeklyCost === Infinity ? 'N/A' : costs.weeklyCost.toFixed(2)}
              </div>
              <small>{transport.days >= 5 ? 'Good value!' : 'Need 5+ days'}</small>
            </div>
          </div>
          
          <div className="mt-3 text-center">
            <small className="text-muted">
              💡 <strong>Best Option:</strong> {costs.singleCost === bestOption ? 'Single tickets' : costs.dailyCost === bestOption ? '24-hour passes' : 'Weekly pass'}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component that combines everything
export default function RomeGuide({ destination }: RomeGuideProps) {
  return (
    <div className="rome-guide">
      <BudgetCalculator />
      <TransportCalculator />
      <ImageGallery />
      <Checklist />
    </div>
  );
}