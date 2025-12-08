// app/itineraries/page.tsx - IMPROVED VERSION
import Link from 'next/link';
import { FaMapMarkerAlt, FaCalendarDays, FaMoneyBillWave, FaStar, FaUsers, FaArrowRight } from 'react-icons/fa';

const itineraries = [
  {
    id: 1,
    slug: "paris-rome-7days",
    title: "7-Day Paris & Rome Express",
    description: "Perfect first-time Europe trip covering two iconic cities with efficient travel between them. Experience the romance of Paris and the ancient history of Rome in one unforgettable week.",
    duration: "7 days",
    budget: "€500-750",
    difficulty: "Easy",
    route: ["France", "Italy"],
    bestFor: ["First-time travelers", "Couples", "Romance"],
    rating: 4.9,
    reviews: 1247,
    tags: ["Most Popular", "Iconic Cities"],
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    slug: "eastern-europe-10days",
    title: "10-Day Eastern Europe Tour",
    description: "Budget-friendly adventure through Prague, Budapest, and Vienna - amazing value for money with stunning architecture, rich history, and affordable prices.",
    duration: "10 days",
    budget: "€400-600",
    difficulty: "Moderate",
    route: ["Czech Republic", "Hungary", "Austria"],
    bestFor: ["Budget travelers", "Solo travelers", "History buffs"],
    rating: 4.7,
    reviews: 892,
    tags: ["Best Value", "Cultural"],
    image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    slug: "mediterranean-14days",
    title: "14-Day Mediterranean Journey",
    description: "Sun, sea, and history across Barcelona, French Riviera, and Italy's Amalfi Coast. Perfect mix of beach relaxation and cultural exploration.",
    duration: "14 days",
    budget: "€800-1000",
    difficulty: "Moderate",
    route: ["Spain", "France", "Italy"],
    bestFor: ["Beach lovers", "Foodies", "Families"],
    rating: 4.8,
    reviews: 567,
    tags: ["Scenic", "Coastal"],
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    slug: "balkan-adventure-12days",
    title: "12-Day Balkan Adventure",
    description: "Off-the-beaten-path exploration through Croatia, Bosnia, and Montenegro. Discover hidden gems, stunning nature, and incredible value.",
    duration: "12 days",
    budget: "€350-550",
    difficulty: "Adventurous",
    route: ["Croatia", "Bosnia", "Montenegro"],
    bestFor: ["Adventure seekers", "Nature lovers", "Budget travelers"],
    rating: 4.6,
    reviews: 423,
    tags: ["Adventure", "Hidden Gems"],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    slug: "scandinavian-nature-9days",
    title: "9-Day Scandinavian Nature Escape",
    description: "Experience the breathtaking fjords of Norway and charming cities of Sweden and Denmark. Perfect for nature enthusiasts and photography lovers.",
    duration: "9 days",
    budget: "€700-900",
    difficulty: "Easy",
    route: ["Norway", "Sweden", "Denmark"],
    bestFor: ["Nature photographers", "Outdoor enthusiasts", "Luxury travelers"],
    rating: 4.9,
    reviews: 312,
    tags: ["Nature", "Luxury"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    slug: "iberian-peninsula-15days",
    title: "15-Day Iberian Peninsula Tour",
    description: "From Lisbon's hills to Madrid's art and Barcelona's beaches. Experience the diverse cultures, cuisines, and landscapes of Spain and Portugal.",
    duration: "15 days",
    budget: "€600-800",
    difficulty: "Moderate",
    route: ["Portugal", "Spain"],
    bestFor: ["Foodies", "Culture lovers", "Slow travelers"],
    rating: 4.7,
    reviews: 678,
    tags: ["Food & Wine", "Cultural"],
    image: "https://images.unsplash.com/photo-1519861531473-920034658307?w=800&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop"
  }
];

const filters = [
  { label: "All", count: 6 },
  { label: "Short (1-7 days)", count: 1 },
  { label: "Medium (8-14 days)", count: 4 },
  { label: "Long (15+ days)", count: 1 },
  { label: "Budget (Under €500)", count: 2 },
  { label: "Moderate (€500-700)", count: 3 },
  { label: "Luxury (€700+)", count: 1 },
  { label: "First-time", count: 2 },
  { label: "Adventure", count: 2 },
  { label: "Cultural", count: 3 },
  { label: "Beach", count: 1 },
  { label: "Food", count: 2 }
];

export default function ItinerariesPage() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Travel Itineraries</h1>
        <p className="lead text-muted mb-4">
          Handcrafted routes for the perfect European adventure
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <span className="badge bg-primary px-3 py-2">
            <FaUsers className="me-2" /> 50K+ Travelers Guided
          </span>
          <span className="badge bg-success px-3 py-2">
            <FaStar className="me-2" /> 4.8/5 Average Rating
          </span>
          <span className="badge bg-info px-3 py-2">
            <FaMoneyBillWave className="me-2" /> €45 Avg. Daily Cost
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body p-4">
          <h5 className="fw-bold mb-3">Filter Itineraries</h5>
          <div className="d-flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.label}
                className={`btn btn-sm ${filter.label === "All" ? "btn-primary" : "btn-outline-primary"}`}
              >
                {filter.label}
                <span className="ms-2 badge bg-secondary rounded-pill">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-3 d-flex flex-column flex-sm-row gap-3">
            <div className="flex-grow-1">
              <label className="form-label small fw-bold">Search itineraries</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search by destination, theme, or activity..."
              />
            </div>
            <div>
              <label className="form-label small fw-bold">Sort by</label>
              <select className="form-select">
                <option>Most Popular</option>
                <option>Lowest Budget</option>
                <option>Shortest Duration</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Itineraries Grid */}
      <div className="row g-4">
        {itineraries.map((itinerary) => (
          <div key={itinerary.id} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm hover-lift">
              {/* Header with Image */}
              <div className="position-relative">
                <div 
                  className="card-img-top"
                  style={{
                    height: '200px',
                    backgroundImage: `url(${itinerary.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Tags */}
                <div className="position-absolute top-0 start-0 m-3">
                  {itinerary.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`badge ${index === 0 ? 'bg-primary' : 'bg-dark'} me-1`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Duration & Budget Badge */}
                <div className="position-absolute bottom-0 end-0 m-3">
                  <div className="bg-dark bg-opacity-75 text-white p-2 rounded">
                    <div className="small">{itinerary.duration}</div>
                    <div className="fw-bold">{itinerary.budget}</div>
                  </div>
                </div>
              </div>
              
              <div className="card-body d-flex flex-column p-4">
                {/* Title & Rating */}
                <div className="mb-3">
                  <h5 className="card-title fw-bold mb-2">{itinerary.title}</h5>
                  <div className="d-flex align-items-center">
                    <div className="text-warning me-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(itinerary.rating) ? "text-warning" : "text-muted"} />
                      ))}
                    </div>
                    <span className="text-muted small">
                      {itinerary.rating} ({itinerary.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="card-text text-muted flex-grow-1 mb-4">
                  {itinerary.description}
                </p>
                
                {/* Route */}
                <div className="mb-4">
                  <div className="d-flex align-items-center text-muted small mb-2">
                    <FaMapMarkerAlt className="me-2" />
                    <span className="fw-semibold">Route:</span>
                  </div>
                  <div className="d-flex align-items-center">
                    {itinerary.route.map((country, index) => (
                      <div key={index} className="d-flex align-items-center">
                        <span className="badge bg-light text-dark border">
                          {country}
                        </span>
                        {index < itinerary.route.length - 1 && (
                          <FaArrowRight className="mx-2 text-muted" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Details */}
                <div className="row g-2 mb-4">
                  <div className="col-6">
                    <div className="bg-light p-3 rounded text-center">
                      <div className="text-muted small mb-1">Difficulty</div>
                      <div className={`fw-bold ${itinerary.difficulty === 'Easy' ? 'text-success' : 
                                           itinerary.difficulty === 'Moderate' ? 'text-warning' : 'text-danger'}`}>
                        {itinerary.difficulty}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-light p-3 rounded text-center">
                      <div className="text-muted small mb-1">Best For</div>
                      <div className="fw-bold text-primary">
                        {itinerary.bestFor.length} profiles
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="mt-auto">
                  <div className="d-grid gap-2">
                    <Link 
                      href={`/itineraries/${itinerary.slug}`}
                      className="btn btn-primary btn-lg fw-semibold"
                    >
                      View Detailed Itinerary
                    </Link>
                    <Link 
                      href={`/itineraries/${itinerary.slug}#budget`}
                      className="btn btn-outline-primary"
                    >
                      See Cost Breakdown
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Comparison & CTA Section */}
      <div className="mt-5">
        <div className="card border-0 bg-gradient text-white shadow-lg" style={{
          background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)'
        }}>
          <div className="card-body p-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="fw-bold mb-3">Not Sure Which Itinerary Fits You?</h3>
                <p className="lead mb-4 opacity-75">
                  Take our 2-minute quiz to get a personalized itinerary recommendation based on your budget, travel style, and interests.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link href="/quiz" className="btn btn-light btn-lg fw-bold px-4">
                    Take the Quiz
                  </Link>
                  <Link href="/contact" className="btn btn-outline-light btn-lg">
                    Get Custom Itinerary
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="display-1">🗺️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="row mt-5">
        <div className="col-lg-6">
          <h4 className="fw-bold mb-4">Frequently Asked Questions</h4>
          <div className="accordion" id="itineraryFAQ">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  Are these itineraries flexible?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#itineraryFAQ">
                <div className="accordion-body">
                  Yes! All our itineraries are suggestions. You can modify durations, skip activities, or extend stays based on your preferences.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  What's included in the budget estimates?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#itineraryFAQ">
                <div className="accordion-body">
                  Our budgets include accommodation, food, local transport, and activities. Flights to/from Europe and travel insurance are not included.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Can I get a custom itinerary?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#itineraryFAQ">
                <div className="accordion-body">
                  Absolutely! Use our <Link href="/quiz">quiz</Link> for personalized recommendations or <Link href="/contact">contact us</Link> for fully customized itineraries.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4">What Travelers Say</h5>
              <div className="d-flex align-items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px' }}>
                    AJ
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="fw-bold mb-1">Amanda J.</h6>
                  <div className="text-warning mb-2">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <p className="text-muted small">
                    "The Paris & Rome itinerary was perfect for our honeymoon! Every detail was spot on, and we saved €300 using their budget tips."
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px' }}>
                    MS
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h6 className="fw-bold mb-1">Marcus S.</h6>
                  <div className="text-warning mb-2">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <p className="text-muted small">
                    "As a solo traveler, the Eastern Europe tour was amazing. Met other budget travelers and stayed under €40/day!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}