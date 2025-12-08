// app/blog/europe-transportation-guide/page.tsx
import Link from 'next/link';
import FadeIn from '../../../components/FadeIn';

export default function EuropeTransportationGuide() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <FadeIn>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                <li className="breadcrumb-item active">Europe Transportation Guide</li>
              </ol>
            </nav>
          </FadeIn>

          <FadeIn delay={100}>
            <article>
              <span className="badge bg-primary mb-3">Transportation</span>
              <h1 className="display-4 fw-bold mb-4">How to Travel Between European Countries on a Budget</h1>
              
              <div className="d-flex justify-content-between align-items-center text-muted mb-4">
                <span>📖 8 min read</span>
                <span>📅 January 12, 2024</span>
              </div>

              <p className="lead">Compare trains, buses, flights, and rideshares to find the cheapest way to travel around Europe. This guide breaks down all your options with real cost examples.</p>

              {/* Add transportation content here */}
              <p>Transportation content coming soon...</p>
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}