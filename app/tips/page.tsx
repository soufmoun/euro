// app/tips/page.tsx
import Link from 'next/link';

const travelTips = [
  {
    category: "💰 Budget",
    title: "Save on Accommodation",
    tips: ["Book hostels 2-3 weeks in advance", "Consider Airbnb in suburbs", "Use booking.com for free cancellation"]
  },
  {
    category: "🚆 Transport", 
    title: "Cheap European Travel",
    tips: ["Book trains 2-3 months early", "Use FlixBus for intercity travel", "Walk or use city bike shares"]
  },
  {
    category: "🍕 Food",
    title: "Eat Like a Local",
    tips: ["Avoid tourist trap restaurants", "Shop at local markets", "Try lunch specials for better deals"]
  }
];

export default function TipsPage() {
  return (
    <div className="container py-5">
      {/* Header with fade-in */}
      <div className="text-center mb-5 fade-in">
        <h1 className="display-4 fw-bold">Travel Tips</h1>
        <p className="lead text-muted">Proven strategies to stretch your travel budget further</p>
      </div>

      {/* Tips grid with fade-in */}
      <div className="row g-4 fade-in">
        {travelTips.map((tip, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <span className="badge bg-primary mb-2">{tip.category}</span>
                <h5 className="card-title fw-bold">{tip.title}</h5>
                <ul className="list-unstyled">
                  {tip.tips.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">
                      <small>✅ {item}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional resources with fade-in */}
      <div className="row mt-5 fade-in">
        <div className="col-12">
          <div className="card bg-light border-0">
            <div className="card-body text-center p-4">
              <h4 className="mb-3">Need More Specific Advice?</h4>
              <p className="text-muted mb-4">
                Check our destination guides for city-specific budget tips and recommendations.
              </p>
              <Link href="/destinations" className="btn btn-primary btn-lg">
                Browse Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}