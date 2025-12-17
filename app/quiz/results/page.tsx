// app/quiz/results/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdSenseBanner from '../../../components/ads/AdSenseBanner';

interface QuizResult {
  destination: string;
  itinerary: string;
  duration: string;
  budget: string;
  matchScore: number;
  reasons: string[];
}

interface DestinationInfo {
  slug: string;
  title: string;
  image: string;
  dailyBudget: string;
  description: string;
}

const destinationMap: Record<string, DestinationInfo> = {
  'Paris': {
    slug: 'paris',
    title: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=400&fit=crop',
    dailyBudget: '€65-85/day',
    description: 'The romantic city of lights with world-class museums, cuisine, and architecture.'
  },
  'Rome': {
    slug: 'rome',
    title: 'Rome, Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=400&fit=crop',
    dailyBudget: '€55-75/day',
    description: 'Ancient history meets modern life in the Eternal City.'
  },
  'Prague': {
    slug: 'prague',
    title: 'Prague, Czech Republic',
    image: 'https://images.unsplash.com/photo-1543321269-9d86d3680e1c?w=800&h=400&fit=crop',
    dailyBudget: '€40-60/day',
    description: 'Fairytale architecture at unbeatable prices.'
  },
  'Barcelona': {
    slug: 'barcelona',
    title: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=400&fit=crop',
    dailyBudget: '€50-70/day',
    description: 'Gaudí masterpieces, beaches, and vibrant nightlife.'
  }
};

export default function QuizResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get results from localStorage
    const savedResult = localStorage.getItem('quizRecommendation');
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    } else {
      // Redirect if no results
      router.push('/quiz');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading your results...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="container py-5 text-center">
        <h2>No quiz results found</h2>
        <p>Please complete the quiz first.</p>
        <Link href="/quiz" className="btn btn-primary">
          Take the Quiz
        </Link>
      </div>
    );
  }

  const destinationInfo = destinationMap[result.destination] || destinationMap['Paris'];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Your Perfect European Trip!</h1>
        <p className="lead text-muted">
          Based on your preferences, we recommend:
        </p>
      </div>

      {/* Main Result Card */}
      <div className="card border-0 shadow-lg overflow-hidden mb-5">
        <div className="row g-0">
          <div className="col-md-6">
            <img 
              src={destinationInfo.image}
              alt={destinationInfo.title}
              className="img-fluid h-100 object-cover"
              style={{ minHeight: '400px' }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-5">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <span className="badge bg-primary mb-2">RECOMMENDED</span>
                  <h2 className="card-title fw-bold mb-2">{destinationInfo.title}</h2>
                  <p className="text-muted">{destinationInfo.description}</p>
                </div>
                <div className="text-center">
                  <div className="display-6 fw-bold text-primary">{result.matchScore}%</div>
                  <small className="text-muted">Match Score</small>
                </div>
              </div>
              
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Itinerary</div>
                    <div className="fw-bold fs-5">🗺️ {result.itinerary}</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Duration</div>
                    <div className="fw-bold fs-5">📅 {result.duration}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Daily Budget</div>
                    <div className="fw-bold fs-5 text-success">💰 {result.budget}</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Destination</div>
                    <div className="fw-bold fs-5">📍 {result.destination}</div>
                  </div>
                </div>
              </div>
              
              {/* Why This Match */}
              <div className="mb-4">
                <h5 className="fw-bold mb-3">✅ Why This Matches You:</h5>
                <ul className="list-unstyled">
                  {result.reasons.map((reason, index) => (
                    <li key={index} className="mb-2">
                      <span className="text-success me-2">✓</span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Buttons */}
              <div className="d-grid gap-3">
                <Link 
                  href={`/destinations/${destinationInfo.slug}`}
                  className="btn btn-primary btn-lg"
                >
                  📖 View {result.destination} Travel Guide
                </Link>
                <Link 
                  href={`/itineraries/${result.itinerary.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn btn-outline-primary"
                >
                  🗺️ View Detailed Itinerary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      <AdSenseBanner 
        slotId="QUIZ_RESULTS_TOP"
        placeholderText="Find great deals on your recommended destination"
      />

      {/* Alternative Destinations */}
      <div className="mb-5">
        <h3 className="h4 mb-4">🌟 Other Destinations You Might Like</h3>
        <div className="row g-4">
          {Object.entries(destinationMap)
            .filter(([name]) => name !== result.destination)
            .slice(0, 3)
            .map(([name, info]) => (
              <div key={name} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <img 
                    src={info.image}
                    alt={info.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{info.title}</h5>
                    <p className="card-text text-muted small">{info.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">{info.dailyBudget}</span>
                      <Link 
                        href={`/destinations/${info.slug}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        View Guide
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* More Options */}
      <div className="card border-0 bg-light">
        <div className="card-body p-4 text-center">
          <h4 className="fw-bold mb-3">Not Quite Right?</h4>
          <p className="text-muted mb-4">
            Explore more options or customize your trip further.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Link href="/destinations" className="btn btn-primary">
              🌍 Browse All Destinations
            </Link>
            <Link href="/itineraries" className="btn btn-outline-primary">
              🗺️ View All Itineraries
            </Link>
            <button 
              className="btn btn-outline-secondary"
              onClick={() => router.push('/quiz')}
            >
              🔄 Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}