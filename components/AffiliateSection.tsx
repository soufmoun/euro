// components/AffiliateSection.tsx
export default function AffiliateSection() {
  return (
    <div className="card border-0 shadow-sm mt-5">
      <div className="card-body p-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h5 className="fw-bold mb-2">🚀 Ready to Book Your Trip?</h5>
            <p className="text-muted mb-0">
              Support our free guides by booking through our affiliate links. You pay nothing extra!
            </p>
          </div>
          <div className="col-md-4">
            <div className="d-grid gap-2">
              <a 
                href="https://www.booking.com/index.html?aid=YOUR_AFFILIATE_ID" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                🏨 Book Hotels
              </a>
              <a 
                href="https://www.hostelworld.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                🛌 Find Hostels
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center">
              <div className="bg-light p-2 rounded me-3">
                <span className="fs-4">✈️</span>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Flights</h6>
                <a 
                  href="https://www.skyscanner.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Compare prices
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center">
              <div className="bg-light p-2 rounded me-3">
                <span className="fs-4">🏛️</span>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Tours & Activities</h6>
                <a 
                  href="https://www.getyourguide.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Book experiences
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center">
              <div className="bg-light p-2 rounded me-3">
                <span className="fs-4">🛡️</span>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Travel Insurance</h6>
                <a 
                  href="https://www.worldnomads.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Get insured
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="alert alert-info mt-3">
          <small>
            <strong>Note:</strong> We earn a small commission if you book through these links at no extra cost to you. 
            This helps us continue providing free travel guides. Thank you for your support!
          </small>
        </div>
      </div>
    </div>
  );
}