// app/gear/backpacks/page.tsx
import Link from 'next/link';
import FadeIn from '../../../components/FadeIn';

export default function BestBackpacksPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <FadeIn>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/gear">Gear</Link></li>
                <li className="breadcrumb-item active">Best Backpacks</li>
              </ol>
            </nav>
          </FadeIn>

          <FadeIn delay={100}>
            <article>
              <h1 className="display-4 fw-bold mb-4">Best Travel Backpacks for Europe 2024: Tested & Reviewed</h1>
              
              <div className="d-flex justify-content-between align-items-center text-muted mb-4">
                <span>📖 8 min read</span>
                <span>📅 January 20, 2024</span>
              </div>

              <p className="lead">After testing 15+ backpacks across European travels, here are our top recommendations for every type of budget traveler. Find the perfect pack for your adventure.</p>

              <h2 className="h3 mb-4">🏆 Our Top Picks</h2>

              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h4">Osprey Farpoint 40</h3>
                  <p><strong>Price:</strong> $150-180</p>
                  <p><strong>Best For:</strong> Carry-on only travelers</p>
                  <p><strong>Capacity:</strong> 40L</p>
                  <p>Perfect size for airline restrictions with comfortable suspension system. The compression straps make it versatile for different trip lengths.</p>
                  <div className="alert alert-info">
                    <strong>Europe Tip:</strong> Fits Ryanair and EasyJet carry-on limits when not overpacked.
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h4">Patagonia Black Hole 32L</h3>
                  <p><strong>Price:</strong> $129-159</p>
                  <p><strong>Best For:</strong> Minimalist travelers</p>
                  <p><strong>Capacity:</strong> 32L</p>
                  <p>Durable, weather-resistant, and perfect for short trips. The simple design means less to go wrong.</p>
                </div>
              </div>

              <h2 className="h3 mb-4">📊 Comparison Table</h2>
              <div className="table-responsive mb-4">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Backpack</th>
                      <th>Price</th>
                      <th>Capacity</th>
                      <th>Weight</th>
                      <th>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Osprey Farpoint 40</td>
                      <td>$150-180</td>
                      <td>40L</td>
                      <td>1.4kg</td>
                      <td>Carry-on only</td>
                    </tr>
                    <tr>
                      <td>Patagonia Black Hole 32L</td>
                      <td>$129-159</td>
                      <td>32L</td>
                      <td>0.9kg</td>
                      <td>Minimalist travel</td>
                    </tr>
                    <tr>
                      <td>REI Ruckpack 40</td>
                      <td>$139-169</td>
                      <td>40L</td>
                      <td>1.3kg</td>
                      <td>Value seekers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-warning">
                <strong>💰 Budget Tip:</strong> Consider buying last year's model or used backpacks to save 30-50%. Check REI Used Gear or local outdoor consignment shops.
              </div>

              <h2 className="h3 mb-4">🎯 Choosing the Right Size</h2>
              <ul>
                <li><strong>30-35L:</strong> Weekend trips, minimalist travelers</li>
                <li><strong>36-45L:</strong> 1-2 week trips, carry-on compatible</li>
                <li><strong>46L+:</strong> Long-term travel, checked baggage needed</li>
              </ul>

              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">💡 Pro Packing Tip</h5>
                  <p className="mb-0">Pack your bag, then remove 25% of items. You'll almost never miss them, and your back will thank you after walking through European cities all day.</p>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}