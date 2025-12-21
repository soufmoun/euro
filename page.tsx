// app/destinations/page.tsx - UPDATED
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import ArticleCard from '../../components/ArticleCard';

export default function DestinationsPage() {
  const allDestinations = getSortedPostsData();
  
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold mb-4">All Destinations</h1>
      <p className="lead text-muted mb-5">
        Browse {allDestinations.length} complete budget travel guides
      </p>
      
      {allDestinations.length === 0 ? (
        <div className="text-center py-5">
          <div className="fs-1 mb-3">🌍</div>
          <h4>No destinations yet</h4>
          <p className="text-muted">Create your first guide to get started!</p>
          <Link href="/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>
      ) : (
        <>
          {/* Use equal-height-cols class */}
          <div className="row g-4 equal-height-cols">
            {allDestinations.map((destination) => (
              <div key={destination.slug} className="col-md-6 col-lg-4">
                <ArticleCard post={destination} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link href="/" className="btn btn-outline-primary">
              ← Back to Home
            </Link>
          </div>
        </>
      )}
    </div>
  );
}