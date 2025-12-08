// app/blog/europe-packing-list/page.tsx
import Link from 'next/link';
import FadeIn from '../../../components/FadeIn';

export default function EuropePackingList() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <FadeIn>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                <li className="breadcrumb-item active">Europe Packing List</li>
              </ol>
            </nav>
          </FadeIn>

          <FadeIn delay={100}>
            <article>
              <span className="badge bg-primary mb-3">Packing</span>
              <h1 className="display-4 fw-bold mb-4">The Ultimate Europe Packing List: What to Bring (and What to Skip)</h1>
              
              <div className="d-flex justify-content-between align-items-center text-muted mb-4">
                <span>📖 10 min read</span>
                <span>📅 January 10, 2024</span>
              </div>

              <p className="lead">Pack like a pro with our tested packing list that covers all seasons and situations. Learn what's essential and what you can leave behind.</p>

              {/* Add packing content here */}
              <p>Packing content coming soon...</p>
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}