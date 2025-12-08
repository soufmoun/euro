// app/page.tsx - CORRECTED VERSION
import { getSortedPostsData } from '../lib/posts';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import ArticleCard from '../components/ArticleCard';
import FadeIn from '../components/FadeIn';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';

export default function Home() {
  const allDestinations = getSortedPostsData();
  const featuredDestinations = allDestinations.slice(0, 3);

  // Stats data for social proof
  const stats = [
    { number: '50K+', label: 'Travelers Helped', icon: '👥' },
    { number: '25+', label: 'European Cities', icon: '🏙️' },
    { number: '€45', label: 'Average Daily Cost', icon: '💶' },
    { number: '4.9★', label: 'User Rating', icon: '⭐' }
  ];

  // Blog posts data
  const blogPosts = [
    {
      slug: "first-time-europe-budget",
      title: "First Time in Europe? Your Complete Budget Travel Guide",
      excerpt: "Everything you need to know for your first European adventure without breaking the bank. From planning to packing to saving money.",
      readTime: "12 min read",
      date: "2024-01-15",
      category: "Planning"
    },
    {
      slug: "europe-transportation-guide",
      title: "How to Travel Between European Countries on a Budget",
      excerpt: "Compare trains, buses, flights, and rideshares to find the cheapest way to travel around Europe.",
      readTime: "8 min read",
      date: "2024-01-12",
      category: "Transportation"
    },
    {
      slug: "europe-packing-list",
      title: "The Ultimate Europe Packing List: What to Bring (and What to Skip)",
      excerpt: "Pack like a pro with our tested packing list that covers all seasons and situations.",
      readTime: "10 min read",
      date: "2024-01-10",
      category: "Packing"
    }
  ];

  // Quick tips for actionable advice
  const quickTips = [
    {
      icon: '🚆',
      title: 'Book Trains Early',
      description: 'Save up to 60% by booking European trains 2-3 months in advance',
      link: '/tips#transport'
    },
    {
      icon: '🏨',
      title: 'Stay Central',
      description: 'Choose central hostels over cheap distant hotels to save transport costs',
      link: '/tips#accommodation'
    },
    {
      icon: '🍕',
      title: 'Eat Like a Local',
      description: 'Avoid tourist restaurants - markets and bakeries are 50% cheaper',
      link: '/tips#food'
    },
    {
      icon: '🎫',
      title: 'Free Museum Days',
      description: 'Most European museums offer free entry on first Sundays',
      link: '/tips#activities'
    }
  ];

  // Popular itineraries
  const popularItineraries = [
    {
      title: "7-Day Paris & Rome Express",
      description: "Perfect first-time Europe trip covering two iconic cities with efficient travel",
      duration: "7 days",
      budget: "€550-750",
      countries: ["France", "Italy"],
      slug: "paris-rome-7days",
      badge: "MOST POPULAR",
      badgeColor: "bg-primary"
    },
    {
      title: "10-Day Eastern Europe Tour", 
      description: "Budget-friendly adventure through Prague, Budapest, and Vienna",
      duration: "10 days",
      budget: "€400-600",
      countries: ["Czech Republic", "Hungary", "Austria"],
      slug: "eastern-europe-10days",
      badge: "BEST VALUE",
      badgeColor: "bg-success"
    },
    {
      title: "14-Day Mediterranean Journey",
      description: "Sun, sea, and history across Barcelona, French Riviera, and Italy",
      duration: "14 days", 
      budget: "€800-1000",
      countries: ["Spain", "France", "Italy"],
      slug: "mediterranean-14days",
      badge: "SCENIC ROUTE",
      badgeColor: "bg-warning"
    }
  ];

  // Trust factors
  const trustFactors = [
    {
      icon: '💶',
      title: 'Real, Recent Prices',
      description: 'All costs are verified from trips taken within the last 6 months. No outdated 2019 prices or estimates.'
    },
    {
      icon: '⭐',
      title: 'No Sponsored Content',
      description: 'We don\'t accept paid promotions. Our recommendations are based on genuine experiences, not commissions.'
    },
    {
      icon: '🗺️',
      title: 'Tested Itineraries',
      description: 'Every route and schedule has been personally tested. We only recommend what actually works in real-world travel.'
    },
    {
      icon: '🔍',
      title: 'Detailed Breakdowns',
      description: 'Get exact costs for accommodation, food, transport, and activities. No hidden expenses or surprise costs.'
    },
    {
      icon: '🔄',
      title: 'Regularly Updated',
      description: 'All guides are reviewed and updated quarterly to reflect current prices and travel conditions.'
    },
    {
      icon: '💬',
      title: 'Community Verified',
      description: 'Our community of budget travelers helps verify prices and share real-time updates.'
    }
  ];

  return (
    <ErrorBoundary> {/* ← MOVED HERE: Wrap entire page */}
      {/* Hero Section */}
      <HeroSection 
        title="Europe for Less"
        subtitle="Honest budget travel guides • Proven itineraries • Real cost breakdowns"
        primaryCta="Explore Destinations"
        secondaryCta="View Itineraries"
        primaryLink="/destinations"
        secondaryLink="/itineraries"
      />

      {/* Stats Section - Social Proof */}
      <FadeIn>
        <section className="section-padding bg-white">
          <div className="container">
            <div className="row g-4 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="p-3">
                    <div className="fs-2 mb-2">{stat.icon}</div>
                    <h3 className="fw-bold text-primary mb-2">{stat.number}</h3>
                    <p className="text-muted mb-0 small fw-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Featured Destinations Section - FIXED VERSION */}
{/* Featured Destinations Section */}
<FadeIn delay={100}>
  <section className="section-padding">
    <div className="container">
      <SectionHeader 
        title="Featured Destinations"
        subtitle={`Browse ${allDestinations.length} complete budget guides with real cost breakdowns`}
      />
      
      <div className="row g-4">
        {featuredDestinations.map((destination) => (
          <div key={destination.slug} className="col-md-6 col-lg-4">
            {/* SIMPLIFIED - Just pass the destination object directly */}
            <ArticleCard post={destination} />
          </div>
        ))}
      </div>

      {/* Dynamic CTA */}
      <div className="text-center mt-5">
        {allDestinations.length > 3 ? (
          <Link href="/destinations" className="btn btn-primary btn-lg me-3">
            Explore All {allDestinations.length} Destinations
          </Link>
        ) : (
          <div className="alert alert-info">
            <p className="mb-0">More destinations coming soon!</p>
          </div>
        )}
      </div>
    </div>
  </section>
</FadeIn>

      {/* Quick Tips - Actionable Advice */}
      <FadeIn delay={200}>
        <section className="section-padding bg-light">
          <div className="container">
            <SectionHeader 
              title="Smart Budget Tips"
              subtitle="Actionable advice you can use right now to save money in Europe"
            />
            
            <div className="row g-4">
              {quickTips.map((tip, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body p-4 text-center">
                      <div className="fs-1 mb-3">{tip.icon}</div>
                      <h5 className="card-title fw-bold mb-3">{tip.title}</h5>
                      <p className="card-text text-muted small mb-4">{tip.description}</p>
                      <Link href={tip.link} className="btn btn-outline-primary btn-sm">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link href="/tips" className="btn btn-primary btn-lg me-3">
                View All Money-Saving Tips
              </Link>
              <Link href="/tips#quick" className="btn btn-outline-primary">
                Download Cheat Sheet
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Popular Itineraries */}
      <FadeIn delay={300}>
        <section className="section-padding">
          <div className="container">
            <SectionHeader 
              title="Popular Itineraries"
              subtitle="Ready-made routes that thousands of travelers have successfully followed"
            />
            
            <div className="row g-4">
              {popularItineraries.map((itinerary, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm position-relative">
                    {itinerary.badge && (
                      <span className={`badge ${itinerary.badgeColor} position-absolute top-0 start-50 translate-middle mt-2 px-3 py-2`}>
                        {itinerary.badge}
                      </span>
                    )}
                    <div className="card-body d-flex flex-column p-4">
                      <h5 className="card-title fw-bold mb-3">{itinerary.title}</h5>
                      <p className="card-text text-muted flex-grow-1 mb-4">{itinerary.description}</p>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between text-sm text-muted mb-3">
                          <span>📅 {itinerary.duration}</span>
                          <span>💰 {itinerary.budget}</span>
                        </div>
                        <div className="mb-3">
                          <small className="text-primary fw-medium">
                            🌍 {itinerary.countries.join(" → ")}
                          </small>
                        </div>
                        <div className="d-grid gap-2">
                          <Link href={`/itineraries/${itinerary.slug}`} className="btn btn-primary">
                            View Detailed Itinerary
                          </Link>
                          <Link href={`/itineraries/${itinerary.slug}#budget`} className="btn btn-outline-primary btn-sm">
                            Cost Breakdown
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link href="/itineraries" className="btn btn-primary btn-lg me-3">
                Explore All Itineraries
              </Link>
              <Link href="/itineraries#custom" className="btn btn-outline-primary btn-lg">
                Build Custom Itinerary
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Blog Preview Section */}
      <FadeIn delay={400}>
        <section className="section-padding bg-light">
          <div className="container">
            <SectionHeader 
              title="Latest from Our Blog"
              subtitle="Fresh tips and insights for budget European travel"
            />
            
            <div className="row g-4">
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.slug} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <span className="badge bg-primary mb-2">{post.category}</span>
                      <h5 className="card-title fw-bold">{post.title}</h5>
                      <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between text-sm text-muted mb-3">
                          <span>📖 {post.readTime}</span>
                          <span>📅 {post.date}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`} className="btn btn-outline-primary w-100">
                          Read Article
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <Link href="/blog" className="btn btn-primary">
                View All Blog Posts
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Enhanced Trust Section */}
      <FadeIn delay={500}>
        <section className="section-padding">
          <div className="container">
            <SectionHeader 
              title="Why Travelers Trust EuroBudget"
              subtitle="We're different from typical travel blogs - here's why thousands of travelers choose us"
            />
            
            <div className="row g-4">
              {trustFactors.map((factor, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card border-0 h-100 bg-white shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start">
                        <div className="fs-2 me-3">{factor.icon}</div>
                        <div>
                          <h5 className="fw-bold mb-2">{factor.title}</h5>
                          <p className="text-muted mb-0 small">{factor.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card border-0 bg-primary text-white">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3">Still Have Questions?</h5>
                      <p className="mb-3 opacity-75">
                        Read real traveler stories or ask our community of budget travel experts.
                      </p>
                      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                        <Link href="/about" className="btn btn-light">
                          Our Story & Mission
                        </Link>
                        <Link href="/contact" className="btn btn-outline-light">
                          Ask a Question
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Newsletter Signup */}
      <FadeIn delay={600}>
        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card bg-gradient text-white border-0 shadow-lg" style={{
                  background: 'linear-gradient(135deg, var(--eurobudget-primary) 0%, var(--eurobudget-secondary) 100%)'
                }}>
                  <div className="card-body py-5 px-4 text-center">
                    <div className="fs-1 mb-3">🎁</div>
                    <h3 className="fw-bold mb-3">Get Our Free Europe Packing List</h3>
                    <p className="lead mb-4 opacity-75">
                      Join our newsletter and get our proven packing checklist + exclusive budget tips delivered to your inbox
                    </p>
                    <div className="row g-2 justify-content-center">
                      <div className="col-md-8">
                        <input 
                          type="email" 
                          className="form-control form-control-lg border-0" 
                          placeholder="Your email address"
                          style={{ borderRadius: '8px' }}
                        />
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-light btn-lg w-100 fw-bold" style={{ borderRadius: '8px' }}>
                          Get Free Guide
                        </button>
                      </div>
                    </div>
                    <p className="small mt-3 opacity-75">
                      Join 50,000+ travelers. Unsubscribe anytime. No spam, just valuable travel tips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Final CTA Section */}
      <FadeIn delay={700}>
        <section className="section-padding text-white" style={{
          background: 'linear-gradient(135deg, var(--eurobudget-primary) 0%, #1a365d 100%)'
        }}>
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4">Start Your European Adventure Today</h2>
            <p className="lead mb-5 opacity-75">
              Everything you need to plan an unforgettable trip without breaking the bank
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
              <Link href="/destinations" className="btn btn-light btn-lg px-5 py-3 fw-bold">
                🌍 Browse All {allDestinations.length} Destinations
              </Link>
              <Link href="/itineraries" className="btn btn-outline-light btn-lg px-5 py-3">
                🗺️ View Popular Itineraries
              </Link>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Link href="/blog" className="btn btn-outline-light btn-sm">
                📝 Travel Blog
              </Link>
              <Link href="/tips" className="btn btn-outline-light btn-sm">
                💡 Budget Tips
              </Link>
              <Link href="/about" className="btn btn-outline-light btn-sm">
                ℹ️ How It Works
              </Link>
              <Link href="/contact" className="btn btn-outline-light btn-sm">
                💬 Get Help
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </ErrorBoundary> /* ← CLOSED HERE */
  );
}