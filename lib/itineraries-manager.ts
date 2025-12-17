// lib/itineraries-manager.ts - ADMIN ONLY VERSION
import { Itinerary } from './itineraries';

export class ItineraryManager {
  private static STORAGE_KEY = 'eurobudget_itineraries';

  // Initialize with sample data if empty
  static initialize() {
    if (typeof window === 'undefined') return;
    
    const existing = localStorage.getItem(this.STORAGE_KEY);
    if (!existing) {
      // Load sample data dynamically
      try {
        // Use dynamic import to avoid server-side issues
        import('./itineraries').then(({ sampleItineraries }) => {
          if (sampleItineraries && sampleItineraries.length > 0) {
            localStorage.setItem(
              this.STORAGE_KEY, 
              JSON.stringify(sampleItineraries)
            );
          }
        });
      } catch (error) {
        console.error('Error loading sample itineraries:', error);
      }
    }
  }

  // For admin panel only - uses localStorage
  static getAllItineraries(): Itinerary[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) {
      this.initialize();
      return [];
    }
    return JSON.parse(data);
  }

  static getItineraryBySlug(slug: string): Itinerary | undefined {
    const itineraries = this.getAllItineraries();
    return itineraries.find(it => it.slug === slug);
  }

  static addItinerary(itinerary: Itinerary): void {
    const itineraries = this.getAllItineraries();
    itineraries.push(itinerary);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(itineraries));
  }

  static updateItinerary(slug: string, updates: Partial<Itinerary>): void {
    const itineraries = this.getAllItineraries();
    const index = itineraries.findIndex(it => it.slug === slug);
    if (index !== -1) {
      itineraries[index] = { ...itineraries[index], ...updates };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(itineraries));
    }
  }

  static deleteItinerary(slug: string): void {
    const itineraries = this.getAllItineraries();
    const filtered = itineraries.filter(it => it.slug !== slug);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
  }

  // Export/Import functionality for admin
  static exportToJSON(): string {
    return JSON.stringify(this.getAllItineraries(), null, 2);
  }

  static importFromJSON(json: string): boolean {
    try {
      const data = JSON.parse(json);
      if (Array.isArray(data)) {
        localStorage.setItem(this.STORAGE_KEY, json);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
}