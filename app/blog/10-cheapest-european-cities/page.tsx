// app/blog/10-cheapest-european-cities/page.tsx
import Link from 'next/link';
import FadeIn from '../../../components/FadeIn';

export default function TenCheapestEuropeanCities() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <FadeIn>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                <li className="breadcrumb-item active">10 Cheapest European Cities</li>
              </ol>
            </nav>
          </FadeIn>

          <FadeIn delay={100}>
            <article>
              <span className="badge bg-primary mb-3">Destinations</span>
              <h1 className="display-4 fw-bold mb-4">10 European Cities Where You Can Live on €30/Day</h1>
              
              <div className="d-flex justify-content-between align-items-center text-muted mb-4">
                <span>📖 6 min read</span>
                <span>📅 January 8, 2024</span>
              </div>

              <p className="lead">Discover the most affordable European destinations where your travel budget stretches further without sacrificing amazing experiences.</p>

              {/* Add cities content here */}
              <p>Cities content coming soon...</p>
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}