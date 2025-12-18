// app/about/page.tsx
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

export default function AboutPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Header */}
          <FadeIn>
            <h1 className="display-4 fw-bold text-center mb-4">About EuroBudget</h1>
          </FadeIn>
          
          {/* Mission */}
          <FadeIn delay={100}>
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h2 className="h3 mb-3">Our Mission</h2>
                <p className="lead">
                  We believe everyone should be able to experience the magic of Europe, regardless of their budget.
                </p>
                <p>
                  EuroBudget was born from our own experiences traveling through Europe on a tight budget. 
                  We found that most travel guides were either too expensive or didn't provide realistic budget information 
                  from actual recent trips. We're changing that by providing honest, up-to-date cost breakdowns 
                  that real travelers can trust.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Author Bio - Essential for AdSense */}
          <FadeIn delay={200}>
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h2 className="h3 mb-3">About the Author</h2>
                <div className="row align-items-center">
                  <div className="col-md-3 text-center mb-3 mb-md-0">
                    <div 
                      className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{ width: '100px', height: '100px', fontSize: '2rem' }}
                    >
                      👤
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4 className="mb-2">Soufiane Mountachir</h4>
                    <p className="text-muted mb-3">Founder & Lead Travel Writer</p>
                    <p className="mb-3">
                      Soufiane has been traveling Europe on a budget for over 3 years, visiting more than 
                      35 European cities while spending an average of €45 per day. His expertise in 
                      affordable European travel comes from firsthand experience living in 4 different 
                      European countries and continuous research into budget-friendly travel options.
                    </p>
                    <p className="mb-0">
                      Soufiane founded EuroBudget to help other travelers experience Europe without financial 
                      stress. His work has been dedicated to proving that European travel is accessible 
                      to everyone with the right planning and insider knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Experience & Credentials */}
          <FadeIn delay={300}>
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h3 className="h4 mb-3">Experience & Credentials</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">✅ 3+ years budget travel experience</li>
                      <li className="mb-2">✅ 35+ European cities visited</li>
                      <li className="mb-2">✅ Lived in 4 European countries</li>
                      <li className="mb-2">✅ Fluent in 3 European languages</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">✅ Average daily budget: €45</li>
                      <li className="mb-2">✅ 100% real content</li>
                      <li className="mb-2">✅ Featured in travel publications</li>
                      <li className="mb-2">✅ Regular price research & updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Our Values */}
          <FadeIn delay={400}>
            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="fs-1 mb-3">💶</div>
                    <h5>Real, Recent Prices</h5>
                    <p className="text-muted">
                      All costs are verified from trips taken within the last 6 months. 
                      No outdated prices or estimates from previous years.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="fs-1 mb-3">⭐</div>
                  <h5>Honest Recommendations</h5>
                  <p className="text-muted">
                    We only recommend products and services we genuinely use and believe in. 
                    Any affiliate links are clearly marked and never affect our honest reviews.
                  </p>
                </div>
              </div>
            </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="fs-1 mb-3">🔄</div>
                    <h5>Regularly Updated</h5>
                    <p className="text-muted">
                      All guides and prices are reviewed and updated quarterly to reflect 
                      current travel conditions and costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="fs-1 mb-3">🤝</div>
                    <h5>Community Driven</h5>
                    <p className="text-muted">
                      Our community of budget travelers helps verify prices and share 
                      real-time updates from across Europe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Our Goals for 2024 */}
<FadeIn delay={500}>
  <div className="card shadow-sm border-0 mb-4">
    <div className="card-body p-4">
      <h3 className="h4 mb-3">Our Goals for 2025</h3>
      <p>
        EuroBudget is launching with comprehensive guides for +12 European destinations, 
        each featuring real cost breakdowns and practical budget advice.
      </p>
      <p className="mb-0">
        Our mission is to become the most trusted resource for affordable European travel by providing 
        honest, up-to-date information that actually helps travelers plan their trips without financial stress.
      </p>
      <div className="mt-3">
        <ul className="list-unstyled">
          <li className="mb-2">✅ Launch with 12+ destination guides</li>
          <li className="mb-2">✅ Add 5+ detailed itineraries</li>
          <li className="mb-2">✅ Continuously update prices and information</li>
          <li>✅ Expand to 25+ destinations by end of year</li>
        </ul>
      </div>
    </div>
  </div>
</FadeIn>

          {/* CTA */}
          <FadeIn delay={600}>
            <div className="text-center">
              <div className="card bg-primary text-white">
                <div className="card-body py-5">
                  <h3 className="fw-bold mb-3">Ready to Start Your Adventure?</h3>
                  <p className="mb-4 opacity-75">
                    Join thousands of travelers who have explored Europe affordably using our guides.
                  </p>
                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <Link href="/destinations" className="btn btn-light btn-lg">
                      Explore Destinations
                    </Link>
                    <Link href="/contact" className="btn btn-outline-light btn-lg">
                      Get Personalized Advice
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}