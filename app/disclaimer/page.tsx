// app/disclaimer/page.tsx
export default function DisclaimerPage() {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-5 fw-bold mb-4">Disclaimer</h1>
            
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                
                <div className="alert alert-warning mb-4">
                  <h4 className="alert-heading">⚠️ Important Travel Disclaimer</h4>
                  <p className="mb-0">
                    Travel information changes rapidly. Always verify prices, opening hours, and requirements 
                    with official sources before your trip.
                  </p>
                </div>
  
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">Travel Advice & Responsibility</h2>
                  <p>
                    The information contained on EuroBudget is for general information purposes only. 
                    While we strive to keep the information up to date and correct, we make no representations 
                    or warranties of any kind, express or implied, about the completeness, accuracy, 
                    reliability, suitability or availability with respect to the website or the information, 
                    products, services, or related graphics contained on the website for any purpose.
                  </p>
                  <p className="fw-bold text-danger">
                    Any reliance you place on such information is strictly at your own risk.
                  </p>
                </section>
  
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">Financial & Budget Information</h2>
                  <p>
                    All budget estimates, prices, and cost breakdowns are based on our personal experiences 
                    and research at the time of writing. Prices can and do change frequently due to:
                  </p>
                  <ul>
                    <li>Seasonal fluctuations</li>
                    <li>Currency exchange rates</li>
                    <li>Inflation and economic changes</li>
                    <li>Promotional offers ending</li>
                    <li>Local price adjustments</li>
                  </ul>
                  <p>
                    We recommend checking current prices directly with service providers before making 
                    any travel arrangements.
                  </p>
                </section>
  
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">Health & Safety</h2>
                  <p>
                    We are not medical professionals. Any health or safety advice provided is based on 
                    personal experience and general knowledge. Always:
                  </p>
                  <ul>
                    <li>Consult with a travel doctor before international travel</li>
                    <li>Check travel advisories from your government</li>
                    <li>Purchase comprehensive travel insurance</li>
                    <li>Follow local laws and customs</li>
                    <li>Use common sense and caution</li>
                  </ul>
                </section>
  
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">Affiliate Relationships</h2>
                  <p>
                    EuroBudget participates in affiliate marketing programs. This means we may earn 
                    commissions on purchases made through our links at no additional cost to you.
                  </p>
                  <p><strong>Our affiliate relationships include:</strong></p>
                  <ul>
                    <li><strong>Amazon Associates:</strong> We earn from qualifying Amazon purchases</li>
                    <li><strong>Booking.com Affiliate:</strong> Commission on hotel bookings</li>
                    <li><strong>Hostelworld:</strong> Commission on hostel bookings</li>
                    <li><strong>GetYourGuide:</strong> Commission on tour bookings</li>
                    <li>And other travel-related affiliate programs</li>
                  </ul>
                  <p>
                    These commissions help support our website and allow us to continue providing free 
                    travel content. Our recommendations are always based on genuine experiences - we 
                    never recommend products solely for commission.
                  </p>
                </section>
  
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">Sponsored Content</h2>
                  <p>
                    Occasionally, we may publish sponsored content or reviews. Any sponsored content 
                    will be clearly marked with disclosures such as "Sponsored," "Paid Partnership," 
                    or "Advertisement."
                  </p>
                </section>
  
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">Testimonials & Reviews</h2>
                  <p>
                    Testimonials on this website are from real travelers. However, they are individual 
                    experiences and results may vary. We do not claim they are typical results.
                  </p>
                </section>
  
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">Copyright & Content Usage</h2>
                  <p>
                    All content on EuroBudget is protected by copyright. You may not reproduce, distribute, 
                    or create derivative works without our explicit permission.
                  </p>
                  <p>
                    Small excerpts may be used with proper attribution and a link back to the original 
                    content.
                  </p>
                </section>
  
                <section className="mb-5">
                  <h2 className="h4 fw-bold mb-3">Contact Information</h2>
                  <p>For any questions regarding this disclaimer, please contact us:</p>
                  <ul className="list-unstyled">
                    <li>📧 Email: <strong>contact@eurobudget.travel</strong></li>
                    <li>🌐 Website: <strong>https://eurobudget.travel/contact</strong></li>
                  </ul>
                </section>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }