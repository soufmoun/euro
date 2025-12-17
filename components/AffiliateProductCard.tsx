// components/AffiliateProductCard.tsx
'use client';

interface AffiliateProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  affiliateLink: string;
  platform: 'amazon' | 'booking' | 'getyourguide' | 'viator' | 'skyscanner' | 'airbnb' ;
  rating?: number;
  reviewCount?: number;
}

export default function AffiliateProductCard({
  title,
  description,
  price,
  image,
  affiliateLink,
  platform,
  rating = 4.5,
  reviewCount = 100
}: AffiliateProductCardProps) {
  
  const platformColors: Record<AffiliateProductCardProps['platform'], string> = {
    amazon: 'bg-warning bg-opacity-25 border-warning',
    booking: 'bg-info bg-opacity-25 border-info',
    getyourguide: 'bg-orange bg-opacity-25 border-orange', 
    viator: 'bg-primary bg-opacity-25 border-primary',
    skyscanner: 'bg-success bg-opacity-25 border-success',
    airbnb: 'bg-pink bg-opacity-25 border-pink' 
  };

  const platformLogos: Record<AffiliateProductCardProps['platform'], string> = {
    amazon: '🛒',
    booking: '🏨',
    getyourguide: '🎟️',
    viator: '🚌',
    skyscanner: '✈️',
    airbnb: '🏠'
  };

  return (
    <div className={`card border ${platformColors[platform]} hover-lift mb-3`}>
      <div className="row g-0">
        <div className="col-md-4">
          <img 
            src={image} 
            alt={title}className="img-fluid rounded-start h-100 img-cover"
            style={{ minHeight: '200px' }}
            loading="lazy"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body h-100 d-flex flex-column p-3">
            <div className="mb-2">
              <span className="badge bg-dark text-white">
                {platformLogos[platform]} {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </span>
            </div>
            
            <h5 className="card-title fw-bold mb-2">{title}</h5>
            <p className="card-text text-muted flex-grow-1 mb-3">{description}</p>
            
            <div className="mt-auto">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <div className="text-warning">
                    {'★'.repeat(Math.floor(rating))}
                    <span className="text-muted">{'★'.repeat(5 - Math.floor(rating))}</span>
                    <small className="text-muted ms-2">({reviewCount.toLocaleString()} reviews)</small>
                  </div>
                </div>
                <div className="text-success fw-bold fs-5">{price}</div>
              </div>
              
              <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener sponsored noreferrer"
                className="btn btn-primary w-100"
                onClick={() => {
                  // Track affiliate clicks
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'affiliate_click', {
                      platform,
                      product: title
                    });
                  }
                }}
              >
                Check Price & Book →
              </a>
              <small className="text-muted d-block text-center mt-2">
                We earn a commission at no extra cost to you
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}