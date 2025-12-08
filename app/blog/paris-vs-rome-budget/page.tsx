// app/blog/paris-vs-rome-budget/page.tsx
export default function ParisVsRomeComparison() {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">Paris vs Rome: Which is Better for Your Budget?</h1>
            
            <p className="lead">Trying to choose between the City of Lights and the Eternal City? This detailed comparison breaks down costs, experiences, and value to help you decide.</p>
  
            <div className="row text-center mb-5">
              <div className="col-md-6">
                <div className="card border-primary">
                  <div className="card-body">
                    <h3>🇫🇷 Paris</h3>
                    <p className="h4 text-primary">€75-110/day</p>
                    <p>Romance, museums, fashion</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-warning">
                  <div className="card-body">
                    <h3>🇮🇹 Rome</h3>
                    <p className="h4 text-warning">€65-95/day</p>
                    <p>History, food, ancient ruins</p>
                  </div>
                </div>
              </div>
            </div>
  
            <h2>💶 Cost Breakdown Comparison</h2>
            {/* Detailed cost comparison tables */}
          </div>
        </div>
      </div>
    );
  }