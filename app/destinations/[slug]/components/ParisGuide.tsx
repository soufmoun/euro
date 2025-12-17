// app/destinations/[slug]/components/ParisGuide.tsx
'use client';

import { useState } from 'react';
import { Destination } from '@/lib/posts/destinations';
import './ParisGuide.css';

interface ParisGuideProps {
  destination: Destination;
  destinationData?: any;
}

// Paris Budget Calculator Component
function ParisBudgetCalculator({ destinationData }: { destinationData: any }) {
  const [budget, setBudget] = useState({
    accommodation: destinationData?.budgetRanges?.accommodation?.default || 40,
    food: destinationData?.budgetRanges?.food?.default || 20,
    transport: destinationData?.budgetRanges?.transport?.default || 5,
    activities: destinationData?.budgetRanges?.activities?.default || 10,
    duration: 3
  });

  const totalPerDay = budget.accommodation + budget.food + budget.transport + budget.activities;
  const totalTrip = totalPerDay * budget.duration;
  const currency = destinationData?.currencySymbol || '€';

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
              <label className="form-label">Accommodation ({currency}/day)</label>
              <input
                type="range"
                className="form-range"
                min={destinationData?.budgetRanges?.accommodation?.min || 30}
                max={destinationData?.budgetRanges?.accommodation?.max || 150}
                step="5"
                value={budget.accommodation}
                onChange={(e) => updateBudget('accommodation', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>{currency}{destinationData?.budgetRanges?.accommodation?.min || 30}</span>
                <span className="fw-bold">{currency}{budget.accommodation}</span>
                <span>{currency}{destinationData?.budgetRanges?.accommodation?.max || 150}</span>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Food ({currency}/day)</label>
              <input
                type="range"
                className="form-range"
                min={destinationData?.budgetRanges?.food?.min || 15}
                max={destinationData?.budgetRanges?.food?.max || 80}
                step="5"
                value={budget.food}
                onChange={(e) => updateBudget('food', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>{currency}{destinationData?.budgetRanges?.food?.min || 15}</span>
                <span className="fw-bold">{currency}{budget.food}</span>
                <span>{currency}{destinationData?.budgetRanges?.food?.max || 80}</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Transport ({currency}/day)</label>
              <input
                type="range"
                className="form-range"
                min={destinationData?.budgetRanges?.transport?.min || 3}
                max={destinationData?.budgetRanges?.transport?.max || 30}
                step="1"
                value={budget.transport}
                onChange={(e) => updateBudget('transport', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>{currency}{destinationData?.budgetRanges?.transport?.min || 3}</span>
                <span className="fw-bold">{currency}{budget.transport}</span>
                <span>{currency}{destinationData?.budgetRanges?.transport?.max || 30}</span>
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

        <div className="alert alert-info mt-4">
          <div className="row text-center">
            <div className="col-md-6">
              <h5 className="mb-1">Daily Budget</h5>
              <div className="display-6 fw-bold text-primary">{currency}{totalPerDay}</div>
              <small className="text-muted">per person per day</small>
            </div>
            <div className="col-md-6">
              <h5 className="mb-1">Total Trip Cost</h5>
              <div className="display-6 fw-bold text-success">{currency}{totalTrip}</div>
              <small className="text-muted">for {budget.duration} days</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Paris Image Gallery Component 
// Update the ParisImageGallery function in ParisGuide.tsx
function ParisImageGallery() {
  // Correct image filenames based on your error messages
  const images = [
    {
      src: "/images/destinations/paris-hostel.jpg", // Changed from paris-street-food.jpg
      alt: "Affordable Paris hostel",
      caption: "Hostels in Paris start from €25-€40 per night"
    },
    {
      src: "/images/destinations/paris-metro.jpg", // Changed from paris-free-museum.jpg
      alt: "Paris Metro system",
      caption: "The Metro is the cheapest way to get around Paris"
    },
    {
      src: "/images/destinations/paris-boulangerie.jpg", // Changed from paris-walking-tour.jpg
      alt: "Paris boulangerie",
      caption: "Boulangeries offer cheap, delicious meals from €5-€8"
    },
    {
      src: "/images/destinations/paris-market-food.jpg", // Changed from paris-market.jpg
      alt: "Paris food market",
      caption: "Local markets have fresh produce for budget picnics"
    },
    {
      src: "/images/destinations/paris-free-view.jpg", // Changed from paris-metro-night.jpg
      alt: "Free view in Paris",
      caption: "Many Paris viewpoints like Sacré-Cœur are completely free"
    },
    {
      src: "/images/destinations/paris-park.jpg", // Keep this one
      alt: "Paris park picnic",
      caption: "Parks provide free, beautiful spaces to relax and eat"
    }
  ];

  return (
    <div className="my-5">
      <h3 className="mb-4">📷 Paris Budget Travel Gallery</h3>
      <div className="row g-3">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm gallery-item">
              <img 
                src={image.src} 
                alt={image.alt}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
                onError={(e) => {
                  // Fallback to placeholder if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/400x200/0077cc/ffffff?text=${encodeURIComponent(image.alt.substring(0, 20))}`;
                  target.alt = `${image.alt} (placeholder)`;
                }}
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

  const faqs = [
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
  ];

  return (
    <div className="card shadow-sm border-0 my-5">
      <div className="card-body">
        <h3 className="card-title h4 mb-4">❓ Paris Budget Travel FAQ</h3>
        
        <div className="accordion" id="parisFAQAccordion">
          {faqs.map((faq, index) => (
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
        
        <div className="mt-4 text-center">
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
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    bookAccommodation: false,
    downloadMaps: false,
    learnFrench: false,
    getInsurance: false,
    informBank: false,
    walkingShoes: false,
    waterBottle: false,
    powerAdapter: false,
    rainJacket: false,
    crossbodyBag: false,
    metroTickets: false,
    freeMuseumDays: false,
    boulangerieLunch: false,
    freeTours: false,
    parkPicnic: false
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      title: "Before You Go",
      items: [
        { id: "bookAccommodation", label: "Book accommodation 3+ months in advance" },
        { id: "downloadMaps", label: "Download Citymapper/Google Maps offline" },
        { id: "learnFrench", label: "Learn basic French phrases" },
        { id: "getInsurance", label: "Get travel insurance" },
        { id: "informBank", label: "Inform bank of travel plans" }
      ]
    },
    {
      title: "Packing Essentials",
      items: [
        { id: "walkingShoes", label: "Comfortable walking shoes" },
        { id: "waterBottle", label: "Reusable water bottle" },
        { id: "powerAdapter", label: "Power adapter (Type E)" },
        { id: "rainJacket", label: "Light rain jacket" },
        { id: "crossbodyBag", label: "Crossbody bag (anti-theft)" }
      ]
    },
    {
      title: "Money-Saving Must-Dos",
      items: [
        { id: "metroTickets", label: "Buy carnet of 10 Metro tickets" },
        { id: "freeMuseumDays", label: "Visit museums on free days" },
        { id: "boulangerieLunch", label: "Eat at boulangeries for lunch" },
        { id: "freeTours", label: "Take free walking tours" },
        { id: "parkPicnic", label: "Enjoy free park picnics" }
      ]
    }
  ];

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = Object.keys(checkedItems).length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="card shadow-sm border-0 my-5">
      <div className="card-body">
        <h3 className="card-title h4 mb-4">📋 Interactive Paris Checklist</h3>
        
        <div className="row">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="col-md-4">
              <h5 className="h6 mb-3 text-primary fw-bold">{section.title}</h5>
              <div className="list-group">
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

        <div className="mt-4 text-center">
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

function DebugImageTest() {
  return (
    <div className="alert alert-warning my-4">
      <h5>Image Debug Test</h5>
      <p>Testing image loading...</p>
      <div className="row">
        <div className="col-md-4">
          <h6>Local Path:</h6>
          <img 
            src="/images/destinations/paris-street-food.jpg" 
            alt="Test Local"
            style={{ width: '100%', height: '150px', border: '3px solid red' }}
          />
          <small>/images/destinations/paris-street-food.jpg</small>
        </div>
        <div className="col-md-4">
          <h6>External URL:</h6>
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop" 
            alt="Test External"
            style={{ width: '100%', height: '150px', border: '3px solid green' }}
          />
          <small>Unsplash URL</small>
        </div>
        <div className="col-md-4">
          <h6>Placeholder:</h6>
          <img 
            src="https://via.placeholder.com/400x200/0077cc/ffffff?text=Paris+Image" 
            alt="Test Placeholder"
            style={{ width: '100%', height: '150px', border: '3px solid blue' }}
          />
          <small>Placeholder.com</small>
        </div>
      </div>
      <p className="mt-2">If you see red/green/blue borders but no images, check browser console (F12) for errors.</p>
    </div>
  );
}

// MAIN DEFAULT EXPORT - WITH GALLERY INCLUDED
export default function ParisGuide({ destination, destinationData }: ParisGuideProps) {
  return (
    <div className="paris-guide">
      <ParisBudgetCalculator destinationData={destinationData} />
      <ParisImageGallery />
      <ParisChecklist />
      <ParisFAQ />
    </div>
  );
}