// components/Footer.tsx - Updated version
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">EuroBudget</h5>
            <p className="text-white-50">
              Honest budget travel guides for Europe. Real cost breakdowns, proven itineraries, 
              and money-saving tips for smart travelers.
            </p>
            {/* Social media section removed - add back when icons are ready */}
            <div className="mt-3">
              <p className="text-white-50 small">
                Follow us for travel inspiration and tips (coming soon)
              </p>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Destinations</h6>
            <ul className="list-unstyled">
              <li><Link href="/destinations" className="text-white-50 text-decoration-none">All Destinations</Link></li>
              <li><Link href="/destinations/paris" className="text-white-50 text-decoration-none">Paris</Link></li>
              <li><Link href="/destinations/lisbon" className="text-white-50 text-decoration-none">Lisbon</Link></li>
              <li><Link href="/destinations/rome" className="text-white-50 text-decoration-none">Rome</Link></li>
              <li><Link href="/destinations/budapest" className="text-white-50 text-decoration-none">Budapest</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li><Link href="/blog" className="text-white-50 text-decoration-none">Travel Blog</Link></li>
              <li><Link href="/itineraries" className="text-white-50 text-decoration-none">Itineraries</Link></li>
              <li><Link href="/tips" className="text-white-50 text-decoration-none">Budget Tips</Link></li>
              <li><Link href="/blog/europe-packing-list" className="text-white-50 text-decoration-none">Packing Lists</Link></li>
              <li><Link href="/tools" className="text-white-50 text-decoration-none">Travel Tools</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><Link href="/about" className="text-white-50 text-decoration-none">About Us</Link></li>
              <li><Link href="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
              <li><Link href="/privacy" className="text-white-50 text-decoration-none">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white-50 text-decoration-none">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-white-50 text-decoration-none">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-12 mb-4">
            <h6 className="fw-bold mb-3">Affiliate Disclosure</h6>
            <p className="small text-white-50">
              We earn commissions from qualifying purchases through affiliate links. This supports our free guides.
            </p>
            <div className="small text-white-50 mt-3">
              {/* Updated location text */}
              <div>📍 European destination guides & curated itineraries

</div>
              <div>📧 contact@eurobudget.com</div>
              <div className="mt-2">🌍 Covering +12 European destinations</div>
            </div>
          </div>
        </div>
        
        <hr className="text-white-50 my-4" />
        
        <div className="row">
          <div className="col-md-6">
            <p className="text-white-50 small mb-0">
              © {new Date().getFullYear()} EuroBudget. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-white-50 small mb-0">
              Prices and information subject to change. Travel at your own risk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}