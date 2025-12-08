// app/blog/solo-travel-europe/page.tsx
import Link from 'next/link';
import FadeIn from '../../../components/FadeIn';

export default function SoloTravelEurope() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <FadeIn>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                <li className="breadcrumb-item active">Solo Travel Europe</li>
              </ol>
            </nav>
          </FadeIn>

          <FadeIn delay={100}>
            <article>
              <span className="badge bg-primary mb-3">Solo Travel</span>
              <h1 className="display-4 fw-bold mb-4">Solo Travel in Europe: Complete Safety & Budget Guide</h1>
              
              <div className="d-flex justify-content-between align-items-center text-muted mb-4">
                <span>📖 11 min read</span>
                <span>📅 January 3, 2024</span>
              </div>

              <p className="lead">Everything you need to know about traveling alone in Europe safely and affordably, from meeting other travelers to staying within budget.</p>

              {/* Add solo travel content here */}
              <p>Solo travel content coming soon...</p>
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}