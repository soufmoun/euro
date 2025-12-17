// app/admin/itineraries-builder/components/ItineraryForm.tsx
'use client';

import { useState } from 'react';
import { Itinerary, Day } from '@/lib/itineraries';
import DayBuilder from './DayBuilder';

interface ItineraryFormProps {
  itinerary: Itinerary | null;
  onSave: (itinerary: Itinerary) => void;
  onCancel: () => void;
}

const emptyDay: Day = {
  day: 1,
  title: '',
  description: '',
  activities: [''],
  accommodation: '',
  meals: [''],
  budget: ''
};

const emptyItinerary: Itinerary = {
  slug: '',
  title: '',
  description: '',
  duration: '',
  budget: '',
  countries: [],
  difficulty: 'Easy',
  bestFor: [],
  highlights: [],
  days: [],
  tips: [],
  included: [],
  notIncluded: []
};

export default function ItineraryForm({ itinerary, onSave, onCancel }: ItineraryFormProps) {
  const [form, setForm] = useState<Itinerary>(itinerary || emptyItinerary);
  const [days, setDays] = useState<Day[]>(itinerary?.days || []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...form, days });
  };

  const handleArrayInput = (field: keyof Itinerary, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value.split(',').map(item => item.trim()).filter(Boolean)
    }));
  };

  const addDay = () => {
    const newDay = { ...emptyDay, day: days.length + 1 };
    setDays([...days, newDay]);
  };

  const updateDay = (index: number, updatedDay: Day) => {
    const newDays = [...days];
    newDays[index] = updatedDay;
    setDays(newDays);
  };

  const removeDay = (index: number) => {
    setDays(days.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3>{itinerary ? 'Edit' : 'Add'} Itinerary</h3>
        
        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Title *</label>
              <input
                type="text"
                className="form-control"
                value={form.title}
                onChange={(e) => setForm({...form, title: e.target.value})}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Slug * (URL-friendly)</label>
              <input
                type="text"
                className="form-control"
                value={form.slug}
                onChange={(e) => setForm({...form, slug: e.target.value.replace(/\s+/g, '-').toLowerCase()})}
                required
              />
              <small className="text-muted">e.g., "paris-rome-7days"</small>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Description *</label>
              <textarea
                className="form-control"
                rows={3}
                value={form.description}
                onChange={(e) => setForm({...form, description: e.target.value})}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Duration *</label>
              <input
                type="text"
                className="form-control"
                value={form.duration}
                onChange={(e) => setForm({...form, duration: e.target.value})}
                required
              />
              <small className="text-muted">e.g., "7 days"</small>
            </div>
            <div className="col-md-3">
              <label className="form-label">Budget *</label>
              <input
                type="text"
                className="form-control"
                value={form.budget}
                onChange={(e) => setForm({...form, budget: e.target.value})}
                required
              />
              <small className="text-muted">e.g., "€550-750"</small>
            </div>
          </div>

          {/* Array Fields */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Countries (comma-separated) *</label>
              <input
                type="text"
                className="form-control"
                value={form.countries.join(', ')}
                onChange={(e) => handleArrayInput('countries', e.target.value)}
                required
              />
              <small className="text-muted">e.g., "France, Italy"</small>
            </div>
            <div className="col-md-6">
              <label className="form-label">Best For (comma-separated)</label>
              <input
                type="text"
                className="form-control"
                value={form.bestFor.join(', ')}
                onChange={(e) => handleArrayInput('bestFor', e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Highlights (comma-separated)</label>
              <textarea
                className="form-control"
                rows={3}
                value={form.highlights.join(', ')}
                onChange={(e) => handleArrayInput('highlights', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Difficulty</label>
              <select
                className="form-select"
                value={form.difficulty}
                onChange={(e) => setForm({...form, difficulty: e.target.value as any})}
              >
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Challenging">Challenging</option>
              </select>
            </div>
          </div>

          {/* Days Builder */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Daily Itinerary</h4>
              <button type="button" className="btn btn-sm btn-success" onClick={addDay}>
                + Add Day
              </button>
            </div>
            
            {days.map((day, index) => (
              <DayBuilder
                key={index}
                day={day}
                index={index}
                onUpdate={(updatedDay) => updateDay(index, updatedDay)}
                onRemove={() => removeDay(index)}
              />
            ))}
          </div>

          {/* Tips and Included/Not Included */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Tips (comma-separated)</label>
              <textarea
                className="form-control"
                rows={3}
                value={form.tips.join(', ')}
                onChange={(e) => handleArrayInput('tips', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">What's Included</label>
              <textarea
                className="form-control"
                rows={3}
                value={form.included.join(', ')}
                onChange={(e) => handleArrayInput('included', e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Not Included</label>
              <textarea
                className="form-control"
                rows={3}
                value={form.notIncluded.join(', ')}
                onChange={(e) => handleArrayInput('notIncluded', e.target.value)}
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Itinerary
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}