// app/itineraries/[slug]/page.tsx - FIXED VERSION
import { getItineraryBySlug, getAllItineraries } from '../../../lib/itineraries';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import FadeIn from '../../../components/FadeIn';
import Image from 'next/image';

// Generate static paths
export async function generateStaticParams() {
  const itineraries = getAllItineraries();
  
  console.log(`[STATIC] Generating ${itineraries.length} itinerary pages:`, 
    itineraries.map(i => i.slug));
  
  return itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);
  
  if (!itinerary) {
    return {
      title: 'Itinerary Not Found - EuroBudget',
    };
  }
  
  return {
    title: `${itinerary.title} - EuroBudget`,
    description: itinerary.description,
    openGraph: {
      title: itinerary.title,
      description: itinerary.description,
      type: 'article',
      images: [{
        url: (itinerary as any).image || 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: itinerary.title,
      }],
    },
  };
}

export default async function ItineraryDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);
  
  if (!itinerary) {
    console.error(`[ERROR] Itinerary not found: ${slug}`);
    notFound();
  }

  // Type safe property access with fallbacks
  const tags = (itinerary as any).tags || [];
  const mapImage = (itinerary as any).mapImage || (itinerary as any).image;
  const route = (itinerary as any).route || (itinerary as any).countries || [];
  const gallery = (itinerary as any).gallery || [];
  const image = (itinerary as any).image || 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&auto=format&fit=crop';
  
  // Check if days array exists and has content
  const hasDays = (itinerary as any).days && Array.isArray((itinerary as any).days) && (itinerary as any).days.length > 0;
  const days = hasDays ? (itinerary as any).days : [];

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

      {/* Header Section with Hero Image */}
      <FadeIn delay={100}>
        <div className="row mb-5">
          <div className="col-12 mb-4">
            {/* HERO IMAGE */}
            <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{ height: '400px' }}>
              <Image
                src={image}
                alt={itinerary.title}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ//2Q=="
              />
              <div className="position-absolute top-0 left-0 w-100 h-100 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              
              {/* Content Overlay */}
              <div className="position-absolute bottom-0 left-0 w-100 p-5 text-white">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-primary">{itinerary.duration}</span>
                  <span className="badge bg-success">💰 {itinerary.budget}</span>
                  <span className="badge bg-info">🌍 {itinerary.countries?.length || 0} countries</span>
                  <span className="badge bg-warning">📊 {itinerary.difficulty}</span>
                </div>
                <h1 className="display-4 fw-bold mb-3">{itinerary.title}</h1>
                <p className="lead opacity-90">{itinerary.description}</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8">
            {/* Tags */}
            {tags.length > 0 && (
              <div className="d-flex flex-wrap gap-2 mb-4">
                {tags.map((tag: string, index: number) => (
                  <span key={index} className="badge bg-secondary">{tag}</span>
                ))}
              </div>
            )}
            
            {/* Best For */}
            {itinerary.bestFor && itinerary.bestFor.length > 0 && (
              <div className="mb-4">
                <h5 className="fw-bold mb-2">👥 Best For:</h5>
                <div className="d-flex flex-wrap gap-2">
                  {itinerary.bestFor.map((profile, index) => (
                    <span key={index} className="badge bg-primary bg-opacity-10 text-primary">
                      {profile}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-4">📋 Quick Facts</h5>
                <div className="mb-3">
                  <div className="text-muted small mb-1">Duration</div>
                  <div className="fw-bold">📅 {itinerary.duration}</div>
                </div>
                <div className="mb-3">
                  <div className="text-muted small mb-1">Total Budget</div>
                  <div className="fw-bold text-success">💰 {itinerary.budget}</div>
                </div>
                <div className="mb-3">
                  <div className="text-muted small mb-1">Countries</div>
                  <div className="fw-bold">🌍 {itinerary.countries?.join(' → ') || 'Multiple'}</div>
                </div>
                <div className="mb-3">
                  <div className="text-muted small mb-1">Difficulty</div>
                  <div className={`fw-bold ${itinerary.difficulty === 'Easy' ? 'text-success' : 
                                      itinerary.difficulty === 'Moderate' ? 'text-warning' : 'text-danger'}`}>
                    {itinerary.difficulty}
                  </div>
                </div>
                {itinerary.rating && (
                  <div className="mb-3">
                    <div className="text-muted small mb-1">Rating</div>
                    <div className="fw-bold text-warning">⭐ {itinerary.rating}/5</div>
                  </div>
                )}
                <div className="mt-4">
                  <Link href={`/itineraries/${itinerary.slug}#budget`} className="btn btn-primary w-100 mb-2">
                    📊 View Cost Breakdown
                  </Link>
                  <button className="btn btn-outline-primary w-100">
                    💾 Save Itinerary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Map Image Section */}
      {mapImage && (
        <FadeIn delay={150}>
          <section className="mb-5">
            <h2 className="h3 mb-4">📍 Route Map</h2>
            <div className="position-relative rounded-3 overflow-hidden shadow-lg" style={{ height: '300px' }}>
              <Image
                src={mapImage}
                alt={`Map of ${itinerary.title} route`}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                quality={85}
                className="hover:scale-105 transition-transform duration-500"
              />
              <div className="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="bg-white bg-opacity-90 p-4 rounded-3 shadow-lg">
                  <h4 className="fw-bold mb-2">Route Overview</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {route.map((country: string, index: number) => (
                      <div key={index} className="d-flex align-items-center">
                        <span className="badge bg-primary">{country}</span>
                        {index < route.length - 1 && (
                          <span className="mx-2 text-muted">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      )}

      {/* Highlights Section */}
      {itinerary.highlights && itinerary.highlights.length > 0 && (
        <FadeIn delay={200}>
          <section className="mb-5">
            <h2 className="h3 mb-4">✨ Trip Highlights</h2>
            <div className="row g-4">
              {itinerary.highlights.map((highlight, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <span className="text-primary fs-4 me-3">⭐</span>
                        <span className="fw-medium">{highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* Daily Itinerary */}
      {hasDays ? (
        <FadeIn delay={300}>
          <section className="mb-5">
            <h2 className="h3 mb-4">📅 Daily Itinerary</h2>
            <div className="accordion" id="itineraryAccordion">
              {days.map((day: any) => (
                <div key={day.day} className="accordion-item border-0 mb-3 shadow-sm">
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
                      {day.image && (
                        <div className="position-relative mb-3 rounded-3 overflow-hidden" style={{ height: '200px' }}>
                          <Image
                            src={day.image}
                            alt={`Day ${day.day}: ${day.title}`}
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                            quality={80}
                          />
                        </div>
                      )}
                      
                      <p className="text-muted mb-3">{day.description}</p>
                      
                      {day.activities && day.activities.length > 0 && (
                        <>
                          <h6 className="fw-bold mb-2">Activities:</h6>
                          <ul className="mb-3">
                            {day.activities.map((activity: string, index: number) => (
                              <li key={index}>{activity}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      
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
                      
                      {day.meals && day.meals.length > 0 && (
                        <>
                          <h6 className="fw-bold mb-2">Meals:</h6>
                          <ul>
                            {day.meals.map((meal: string, index: number) => (
                              <li key={index}>{meal}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      ) : (
        <div className="alert alert-warning">
          <h5>Daily itinerary coming soon!</h5>
          <p className="mb-0">We're working on adding detailed day-by-day plans for this itinerary.</p>
        </div>
      )}

      {/* Tips & Important Info */}
      <FadeIn delay={400}>
        <div className="row">
          {(itinerary.tips && itinerary.tips.length > 0) && (
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
          )}
          
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">📋 What's Included</h5>
                {itinerary.included && itinerary.included.length > 0 && (
                  <ul className="mb-4">
                    {itinerary.included.map((item, index) => (
                      <li key={index} className="text-success">✓ {item}</li>
                    ))}
                  </ul>
                )}
                
                {itinerary.notIncluded && itinerary.notIncluded.length > 0 && (
                  <>
                    <h6 className="fw-bold">Not Included:</h6>
                    <ul>
                      {itinerary.notIncluded.map((item, index) => (
                        <li key={index} className="text-muted small">⨯ {item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Gallery Section if images exist */}
      {gallery.length > 0 && (
        <FadeIn delay={450}>
          <section className="mb-5">
            <h2 className="h3 mb-4">📸 Photo Gallery</h2>
            <div className="row g-3">
              {gallery.slice(0, 6).map((imageItem: any, index: number) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="position-relative rounded-3 overflow-hidden" style={{ height: '150px' }}>
                    <Image
                      src={imageItem.url || imageItem}
                      alt={imageItem.alt || `Gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                      style={{ objectFit: 'cover' }}
                      quality={75}
                      className="hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* CTA Section */}
      <FadeIn delay={500}>
        <div className="text-center mt-5">
          <div className="card bg-primary text-white overflow-hidden">
            <div className="position-absolute top-0 right-0 w-50 h-100 opacity-20">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop"
                alt="Travel pattern"
                fill
                sizes="50vw"
                style={{ objectFit: 'cover' }}
                quality={60}
              />
            </div>
            <div className="card-body py-5 position-relative">
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