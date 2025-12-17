// app/admin/itineraries-builder/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { ItineraryManager } from '@/lib/itineraries-manager';
import { Itinerary, Day } from '@/lib/itineraries';
import ItineraryForm from './components/ItineraryForm';
import DayBuilder from './components/DayBuilder';

export default function ItinerariesBuilder() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [editingItinerary, setEditingItinerary] = useState<Itinerary | null>(null);
  const [mode, setMode] = useState<'list' | 'add' | 'edit'>('list');

  useEffect(() => {
    ItineraryManager.initialize();
    setItineraries(ItineraryManager.getAllItineraries());
  }, []);

  const handleSave = (itinerary: Itinerary) => {
    if (editingItinerary) {
      ItineraryManager.updateItinerary(editingItinerary.slug, itinerary);
    } else {
      ItineraryManager.addItinerary(itinerary);
    }
    setItineraries(ItineraryManager.getAllItineraries());
    setMode('list');
    setEditingItinerary(null);
  };

  const handleDelete = (slug: string) => {
    if (confirm('Delete this itinerary?')) {
      ItineraryManager.deleteItinerary(slug);
      setItineraries(ItineraryManager.getAllItineraries());
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Itineraries Builder</h1>
        <button 
          className="btn btn-primary"
          onClick={() => { setMode('add'); setEditingItinerary(null); }}
        >
          + Add New Itinerary
        </button>
      </div>

      {mode === 'list' && (
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Slug</th>
                  <th>Duration</th>
                  <th>Budget</th>
                  <th>Days</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {itineraries.map((it) => (
                  <tr key={it.slug}>
                    <td>{it.title}</td>
                    <td><code>{it.slug}</code></td>
                    <td>{it.duration}</td>
                    <td>{it.budget}</td>
                    <td>{it.days?.length || 0} days</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => { setEditingItinerary(it); setMode('edit'); }}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(it.slug)}
                      >
                        Delete
                      </button>
                      <a 
                        href={`/itineraries/${it.slug}`}
                        className="btn btn-sm btn-outline-info ms-2"
                        target="_blank"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {(mode === 'add' || mode === 'edit') && (
        <ItineraryForm
          itinerary={editingItinerary}
          onSave={handleSave}
          onCancel={() => { setMode('list'); setEditingItinerary(null); }}
        />
      )}
    </div>
  );
}