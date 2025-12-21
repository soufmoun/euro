// app/destinations/[slug]/components/DestinationGuide.tsx
'use client';

import { useState } from 'react';
import { Destination } from '@/lib/posts/destinations';
import './DestinationGuide.css';

interface DestinationGuideProps {
  destination: Destination;
  destinationData?: any;
}

// Generic Budget Calculator
function BudgetCalculator({ destinationData }: { destinationData: any }) {
  const [budget, setBudget] = useState({
    accommodation: destinationData?.budgetRanges?.accommodation?.default || 50,
    food: destinationData?.budgetRanges?.food?.default || 25,
    transport: destinationData?.budgetRanges?.transport?.default || 10,
    activities: destinationData?.budgetRanges?.activities?.default || 15,
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
        <h3 className="card-title h4 mb-4">💰 Budget Calculator</h3>
        
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Accommodation ({currency}/day)</label>
              <input
                type="range"
                className="form-range"
                min={destinationData?.budgetRanges?.accommodation?.min || 20}
                max={destinationData?.budgetRanges?.accommodation?.max || 200}
                step="5"
                value={budget.accommodation}
                onChange={(e) => updateBudget('accommodation', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <small>{currency}{destinationData?.budgetRanges?.accommodation?.min || 20}</small>
                <span className="fw-bold">{currency}{budget.accommodation}</span>
                <small>{currency}{destinationData?.budgetRanges?.accommodation?.max || 200}</small>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Food ({currency}/day)</label>
              <input
                type="range"
                className="form-range"
                min={destinationData?.budgetRanges?.food?.min || 10}
                max={destinationData?.budgetRanges?.food?.max || 100}
                step="5"
                value={budget.food}
                onChange={(e) => updateBudget('food', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <small>{currency}{destinationData?.budgetRanges?.food?.min || 10}</small>
                <span className="fw-bold">{currency}{budget.food}</span>
                <small>{currency}{destinationData?.budgetRanges?.food?.max || 100}</small>
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
                max={destinationData?.budgetRanges?.transport?.max || 50}
                step="1"
                value={budget.transport}
                onChange={(e) => updateBudget('transport', parseInt(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <small>{currency}{destinationData?.budgetRanges?.transport?.min || 3}</small>
                <span className="fw-bold">{currency}{budget.transport}</span>
                <small>{currency}{destinationData?.budgetRanges?.transport?.max || 50}</small>
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
                <small>1 day</small>
                <span className="fw-bold">{budget.duration} days</span>
                <small>14 days</small>
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-info mt-4">
          <div className="row text-center">
            <div className="col-md-6">
              <h5 className="mb-1">Daily Budget</h5>
              <div className="display-6 fw-bold text-primary">
                {currency}{totalPerDay}
              </div>
              <small className="text-muted">per person per day</small>
            </div>
            <div className="col-md-6">
              <h5 className="mb-1">Total Trip Cost</h5>
              <div className="display-6 fw-bold text-success">
                {currency}{totalTrip}
              </div>
              <small className="text-muted">for {budget.duration} days</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// MAIN DEFAULT EXPORT
export default function DestinationGuide({ destination, destinationData }: DestinationGuideProps) {
  return (
    <div className="destination-guide">
      <BudgetCalculator destinationData={destinationData} />
      
      <div className="alert alert-info mt-4">
        <h4>📊 Plan Your {destination.title} Trip</h4>
        <p className="mb-0">
          Use the calculator above to estimate your costs. Scroll down for detailed 
          information about accommodation, food, transportation, and activities in 
          {destination.title.replace(/ on a Budget.*/, '')}.
        </p>
      </div>
    </div>
  );
}