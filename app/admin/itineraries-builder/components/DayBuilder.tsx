// app/admin/itineraries-builder/components/DayBuilder.tsx
'use client';

import { Day } from '@/lib/itineraries';
import { useState } from 'react';

interface DayBuilderProps {
  day: Day;
  index: number;
  onUpdate: (day: Day) => void;
  onRemove: () => void;
}

export default function DayBuilder({ day, index, onUpdate, onRemove }: DayBuilderProps) {
  const [localDay, setLocalDay] = useState<Day>(day);

  const handleUpdate = () => {
    onUpdate(localDay);
  };

  const addActivity = () => {
    setLocalDay({
      ...localDay,
      activities: [...localDay.activities, '']
    });
  };

  const updateActivity = (activityIndex: number, value: string) => {
    const newActivities = [...localDay.activities];
    newActivities[activityIndex] = value;
    setLocalDay({ ...localDay, activities: newActivities });
  };

  const removeActivity = (activityIndex: number) => {
    setLocalDay({
      ...localDay,
      activities: localDay.activities.filter((_, i) => i !== activityIndex)
    });
  };

  const addMeal = () => {
    setLocalDay({
      ...localDay,
      meals: [...localDay.meals, '']
    });
  };

  const updateMeal = (mealIndex: number, value: string) => {
    const newMeals = [...localDay.meals];
    newMeals[mealIndex] = value;
    setLocalDay({ ...localDay, meals: newMeals });
  };

  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Day {localDay.day}: {localDay.title || 'Untitled'}</h5>
        <button 
          type="button" 
          className="btn btn-sm btn-danger"
          onClick={onRemove}
        >
          Remove Day
        </button>
      </div>
      
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Day Title</label>
            <input
              type="text"
              className="form-control"
              value={localDay.title}
              onChange={(e) => setLocalDay({...localDay, title: e.target.value})}
              onBlur={handleUpdate}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Daily Budget</label>
            <input
              type="text"
              className="form-control"
              value={localDay.budget}
              onChange={(e) => setLocalDay({...localDay, budget: e.target.value})}
              onBlur={handleUpdate}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={2}
            value={localDay.description}
            onChange={(e) => setLocalDay({...localDay, description: e.target.value})}
            onBlur={handleUpdate}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Accommodation</label>
          <input
            type="text"
            className="form-control"
            value={localDay.accommodation}
            onChange={(e) => setLocalDay({...localDay, accommodation: e.target.value})}
            onBlur={handleUpdate}
          />
        </div>

        {/* Activities */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <label className="form-label">Activities</label>
            <button 
              type="button" 
              className="btn btn-sm btn-outline-success"
              onClick={addActivity}
            >
              + Add Activity
            </button>
          </div>
          
          {localDay.activities.map((activity, activityIndex) => (
            <div key={activityIndex} className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder={`Activity ${activityIndex + 1}`}
                value={activity}
                onChange={(e) => updateActivity(activityIndex, e.target.value)}
                onBlur={handleUpdate}
              />
              <button 
                type="button"
                className="btn btn-outline-danger"
                onClick={() => removeActivity(activityIndex)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Meals */}
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <label className="form-label">Meals</label>
            <button 
              type="button" 
              className="btn btn-sm btn-outline-success"
              onClick={addMeal}
            >
              + Add Meal
            </button>
          </div>
          
          {localDay.meals.map((meal, mealIndex) => (
            <input
              key={mealIndex}
              type="text"
              className="form-control mb-2"
              placeholder={`Meal ${mealIndex + 1} (e.g., Breakfast: Croissant €4)`}
              value={meal}
              onChange={(e) => updateMeal(mealIndex, e.target.value)}
              onBlur={handleUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}