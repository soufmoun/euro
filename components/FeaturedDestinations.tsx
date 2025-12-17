// components/FeaturedDestinations.tsx
import Link from 'next/link';
import { PostData } from '@/lib/posts';

interface FeaturedDestinationsProps {
  destinations: PostData[];
}

export default function FeaturedDestinations({ destinations }: FeaturedDestinationsProps) {
  return (
    <div className="row g-4 equal-height-cols">
      {destinations.map((destination) => (
        <div key={destination.slug} className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-soft hover-lift featured-destination-card">
            {/* Image */}
            <div className="card-img-container position-relative overflow-hidden">
              <img 
                src={destination.cover || destination.image || "/images/default.jpg"}
                alt={destination.title}
                className="card-img-top w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              
              {/* Budget badge */}
              <div className="position-absolute top-0 end-0 m-3">
                <span className="badge bg-primary px-3 py-2">
                  💶 {destination.dailyBudget || "€50-80"}/day
                </span>
              </div>
            </div>
            
            {/* Card body */}
            <div className="card-body d-flex flex-column p-4">
              <h5 className="card-title fw-bold mb-2 line-clamp-2" style={{ minHeight: "56px" }}>
                {destination.title}
              </h5>
              
              <p className="card-text text-muted flex-grow-1 mb-3 line-clamp-2" style={{ minHeight: "48px" }}>
                {destination.description}
              </p>
              
              <div className="mt-auto">
                {/* Tags */}
                {destination.bestFor && destination.bestFor.length > 0 && (
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-1">
                      {destination.bestFor.slice(0, 2).map((tag, index) => (
                        <span key={index} className="badge bg-light text-dark border small">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Button */}
                <Link 
                  href={`/destinations/${destination.slug}`} 
                  className="btn btn-primary w-100 fw-semibold"
                >
                  Explore {destination.title.split(' ')[0]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}