// app/itineraries/[slug]/page.tsx
import { getItineraryBySlug, getAllItineraries } from '../../../lib/itineraries';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import FadeIn from '../../../components/FadeIn';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static paths
export async function generateStaticParams() {
  const itineraries = getAllItineraries();
  return itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const itinerary = getItineraryBySlug(params.slug);
  
  if (!itinerary) {
    return {
      title: 'Itinerary Not Found - EuroBudget',
    };
  }
  
  return {
    title: `${itinerary.title} - EuroBudget`,
    description: itinerary.description,
  };
}

export default function ItineraryDetailPage({ params }: PageProps) {
  const itinerary = getItineraryBySlug(params.slug);
  
  if (!itinerary) {
    notFound();
  }

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <FadeIn>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/itineraries">Itineraries</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {itinerary.title}
            </li>
          </ol>
        </nav>
      </FadeIn>

      {/* Header Section */}
      <FadeIn delay={100}>
        <div className="row align-items-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-primary mb-2">{itinerary.duration}</span>
            <h1 className="display-4 fw-bold mb-3">{itinerary.title}</h1>
            <p className="lead text-muted mb-4">{itinerary.description}</p>
            
            <div className="d-flex flex-wrap gap-3 mb-4">
              <div className="d-flex align-items-center">
                <span className="badge bg-success me-2">💰 {itinerary.budget}</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="badge bg-info me-2">🌍 {itinerary.countries.length} countries</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="badge bg-warning me-2">📊 {itinerary.difficulty}</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card border-0 bg-light">
              <div className="card-body">
                <h5 className="card-title">Quick Facts</h5>
                <div className="mb-2">
                  <strong>Duration:</strong> {itinerary.duration}
                </div>
                <div className="mb-2">
                  <strong>Budget:</strong> {itinerary.budget}
                </div>
                <div className="mb-2">
                  <strong>Countries:</strong> {itinerary.countries.join(' → ')}
                </div>
                <div className="mb-2">
                  <strong>Best For:</strong> {itinerary.bestFor.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Highlights Section */}
      <FadeIn delay={200}>
        <section className="mb-5">
          <h2 className="h3 mb-4">Trip Highlights</h2>
          <div className="row g-3">
            {itinerary.highlights.map((highlight, index) => (
              <div key={index} className="col-md-6">
                <div className="d-flex align-items-start">
                  <span className="text-primary me-2">⭐</span>
                  <span>{highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Daily Itinerary */}
      <FadeIn delay={300}>
        <section className="mb-5">
          <h2 className="h3 mb-4">Daily Itinerary</h2>
          <div className="accordion" id="itineraryAccordion">
            {itinerary.days.map((day) => (
              <div key={day.day} className="accordion-item border-0 mb-3">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#day${day.day}`}
                  >
                    <span className="badge bg-primary me-3">Day {day.day}</span>
                    {day.title}
                  </button>
                </h3>
                <div
                  id={`day${day.day}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#itineraryAccordion"
                >
                  <div className="accordion-body">
                    <p className="text-muted mb-3">{day.description}</p>
                    
                    <h6 className="fw-bold mb-2">Activities:</h6>
                    <ul className="mb-3">
                      {day.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="fw-bold mb-2">Accommodation:</h6>
                        <p className="text-muted">{day.accommodation}</p>
                      </div>
                      <div className="col-md-6">
                        <h6 className="fw-bold mb-2">Daily Budget:</h6>
                        <p className="text-success fw-bold">{day.budget}</p>
                      </div>
                    </div>
                    
                    <h6 className="fw-bold mb-2">Meals:</h6>
                    <ul>
                      {day.meals.map((meal, index) => (
                        <li key={index}>{meal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Tips & Important Info */}
      <FadeIn delay={400}>
        <div className="row">
          <div className="col-lg-6">
            <div className="card border-0 bg-warning bg-opacity-10 mb-4">
              <div className="card-body">
                <h5 className="card-title">💡 Pro Tips</h5>
                <ul>
                  {itinerary.tips.map((tip, index) => (
                    <li key={index} className="mb-2">{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card border-0 bg-light">
              <div className="card-body">
                <h5 className="card-title">📋 What's Included</h5>
                <ul className="mb-4">
                  {itinerary.included.map((item, index) => (
                    <li key={index} className="text-success">✓ {item}</li>
                  ))}
                </ul>
                
                <h6 className="fw-bold">Not Included:</h6>
                <ul>
                  {itinerary.notIncluded.map((item, index) => (
                    <li key={index} className="text-muted small">⨯ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn delay={500}>
        <div className="text-center mt-5">
          <div className="card bg-primary text-white">
            <div className="card-body py-5">
              <h3 className="fw-bold mb-3">Ready to Book This Trip?</h3>
              <p className="mb-4 opacity-75">
                Use this detailed itinerary to plan your perfect European adventure.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link href="/itineraries" className="btn btn-light btn-lg">
                  ← Back to All Itineraries
                </Link>
                <Link href="/destinations" className="btn btn-outline-light btn-lg">
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}