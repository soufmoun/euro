// app/page.tsx - UPDATED WITH IMAGE OPTIMIZATION
import { getSortedPostsData } from '../lib/posts';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import ArticleCard from '../components/ArticleCard';
import FadeIn from '../components/FadeIn';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';
import Image from 'next/image'; // ADD THIS IMPORT

export default function Home() {
  const allDestinations = getSortedPostsData();
  const featuredDestinations = allDestinations.slice(0, 3);

  // Stats data for social proof
  const stats = [
    { number: '12+', label: 'Destination Guides', icon: '🌍' },
    { number: '24/7', label: 'Free Resources', icon: '📚' },
    { number: '€45', label: 'Starting From', icon: '💶' },
    { number: '100%', label: 'Verified Prices', icon: '✅' }
  ];

  // Blog posts data
  const blogPosts = [
    {
      slug: "first-time-europe-budget",
      title: "First Time in Europe? Your Complete Budget Travel Guide",
      excerpt: "Everything you need to know for your first European adventure without breaking the bank. From planning to packing to saving money.",
      readTime: "12 min read",
      date: "2024-01-15",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop"
    },
    {
      slug: "europe-transportation-guide",
      title: "How to Travel Between European Countries on a Budget",
      excerpt: "Compare trains, buses, flights, and rideshares to find the cheapest way to travel around Europe.",
      readTime: "8 min read",
      date: "2024-01-12",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&auto=format&fit=crop"
    },
    {
      slug: "europe-packing-list",
      title: "The Ultimate Europe Packing List: What to Bring (and What to Skip)",
      excerpt: "Pack like a pro with our tested packing list that covers all seasons and situations.",
      readTime: "10 min read",
      date: "2024-01-10",
      category: "Packing",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop"
    }
  ];

  // Quick tips for actionable advice
  const quickTips = [
    {
      icon: '🚆',
      title: 'Book Trains Early',
      description: 'Save up to 60% by booking European trains 2-3 months in advance',
      link: '/tips#transport',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w-400&auto=format&fit=crop'
    },
    {
      icon: '🏨',
      title: 'Stay Central',
      description: 'Choose central hostels over cheap distant hotels to save transport costs',
      link: '/tips#accommodation',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop'
    },
    {
      icon: '🍕',
      title: 'Eat Like a Local',
      description: 'Avoid tourist restaurants - markets and bakeries are 50% cheaper',
      link: '/tips#food',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop'
    },
    {
      icon: '🎫',
      title: 'Free Museum Days',
      description: 'Most European museums offer free entry on first Sundays',
      link: '/tips#activities',
      image: 'https://images.unsplash.com/photo-1580569601134-2b3c4d54510a?w=400&auto=format&fit=crop'
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
      badgeColor: "bg-primary",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&auto=format&fit=crop"
    },
    {
      title: "10-Day Eastern Europe Tour", 
      description: "Budget-friendly adventure through Prague, Budapest, and Vienna",
      duration: "10 days",
      budget: "€400-600",
      countries: ["Czech Republic", "Hungary", "Austria"],
      slug: "eastern-europe-10days",
      badge: "BEST VALUE",
      badgeColor: "bg-success",
      image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=800&auto=format&fit=crop"
    },
    {
      title: "14-Day Mediterranean Journey",
      description: "Sun, sea, and history across Barcelona, French Riviera, and Italy",
      duration: "14 days", 
      budget: "€800-1000",
      countries: ["Spain", "France", "Italy"],
      slug: "mediterranean-14days",
      badge: "SCENIC ROUTE",
      badgeColor: "bg-warning",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop"
    }
  ];

  // Trust factors
  const trustFactors = [
    {
      icon: '💶',
      title: 'Real, Recent Prices',
      description: 'All costs are verified from trips taken within the last 6 months. No outdated 2019 prices or estimates.',
      image: '/icons/money.svg'
    },
    {
      icon: '⭐',
      title: 'Transparent Recommendations',
      description: 'Any affiliate links are clearly marked. We only recommend what we genuinely use and trust.',
      image: '/icons/star.svg'
    },
    {
      icon: '🗺️',
      title: 'Tested Itineraries',
      description: 'Every route and schedule has been personally tested. We only recommend what actually works in real-world travel.',
      image: '/icons/map.svg'
    },
    {
      icon: '🔍',
      title: 'Detailed Breakdowns',
      description: 'Get exact costs for accommodation, food, transport, and activities. No hidden expenses or surprise costs.',
      image: '/icons/search.svg'
    },
    {
      icon: '🔄',
      title: 'Regularly Updated',
      description: 'All guides are reviewed and updated quarterly to reflect current prices and travel conditions.',
      image: '/icons/update.svg'
    },
    {
      icon: '💬',
      title: 'Community Verified',
      description: 'Our community of budget travelers helps verify prices and share real-time updates.',
      image: '/icons/community.svg'
    }
  ];

  return (
    <ErrorBoundary>
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

      {/* Quick Tips - Actionable Advice with Images */}
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
                  <div className="card h-100 border-0 shadow-sm hover-lift overflow-hidden">
                    {/* OPTIMIZED IMAGE */}
                    <div className="position-relative" style={{ height: '150px' }}>
                      <Image
                        src={tip.image || '/images/placeholder.jpg'}
                        alt={tip.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        style={{ objectFit: 'cover' }}
                        className="card-img-top"
                        quality={75}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ//2Q=="
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                        <div className="bg-white rounded-circle p-2 shadow-sm">
                          <span className="fs-4">{tip.icon}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-body p-4 text-center">
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

      {/* Popular Itineraries with Optimized Images */}
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
                  <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                    {/* OPTIMIZED IMAGE */}
                    <div className="position-relative" style={{ height: '180px' }}>
                      <Image
                        src={itinerary.image}
                        alt={itinerary.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="card-img-top"
                        quality={80}
                        priority={index < 2}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ//2Q=="
                      />
                    </div>
                    
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

      {/* Blog Preview Section with Images */}
      <FadeIn delay={400}>
        <section className="section-padding bg-light">
          <div className="container">
            <SectionHeader 
              title="Latest from Our Blog"
              subtitle="Fresh tips and insights for budget European travel"
            />
            
            <div className="row g-4">
              {blogPosts.slice(0, 3).map((post, index) => (
                <div key={post.slug} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm overflow-hidden">
                    {/* OPTIMIZED BLOG IMAGE */}
                    <div className="position-relative" style={{ height: '180px' }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="card-img-top"
                        quality={80}
                        priority={index === 0}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ//2Q=="
                      />
                    </div>
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
                <div className="card bg-gradient text-white border-0 shadow-lg overflow-hidden" style={{
                  background: 'linear-gradient(135deg, var(--eurobudget-primary) 0%, var(--eurobudget-secondary) 100%)'
                }}>
                  {/* BACKGROUND PATTERN IMAGE */}
                  <div className="position-absolute top-0 end-0 w-50 h-100 opacity-10">
                    <Image
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop"
                      alt="European landscape pattern"
                      fill
                      sizes="50vw"
                      style={{ objectFit: 'cover', objectPosition: 'left center' }}
                      quality={60}
                    />
                  </div>
                  
                  <div className="card-body py-5 px-4 text-center position-relative">
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
                      Join our travelers. Unsubscribe anytime. No spam, just valuable travel tips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Final CTA Section with Background Image */}
      <FadeIn delay={700}>
        <section className="section-padding text-white position-relative overflow-hidden">
          {/* OPTIMIZED BACKGROUND IMAGE */}
          <div className="position-absolute top-0 left-0 w-100 h-100">
            <Image
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&auto=format&fit=crop"
              alt="European travel background"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              quality={85}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ//2Q=="
            />
            <div className="position-absolute top-0 left-0 w-100 h-100 bg-gradient-to-r from-blue-900/90 to-indigo-900/90" />
          </div>
          
          <div className="container text-center position-relative z-10">
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
    </ErrorBoundary>
  );
}