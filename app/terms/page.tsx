// app/terms/page.tsx
export default function TermsPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="display-5 fw-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted mb-5">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              
              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using EuroBudget ("the Website"), you accept and agree to be bound by 
                  these Terms and Conditions. If you do not agree, please do not use our website.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">2. Use License</h2>
                <p>Permission is granted to temporarily access the materials on EuroBudget for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person or "mirror" the materials</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">3. Disclaimer</h2>
                <p>
                  The materials on EuroBudget are provided on an 'as is' basis. We make no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties including, 
                  without limitation, implied warranties or conditions of merchantability, fitness for 
                  a particular purpose, or non-infringement of intellectual property or other violation 
                  of rights.
                </p>
                <p className="alert alert-warning">
                  <strong>Travel Advice:</strong> All travel information is provided for general guidance only. 
                  Travel conditions, prices, and regulations change frequently. Always verify information 
                  with official sources before traveling.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">4. Limitations</h2>
                <p>
                  In no event shall EuroBudget or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) 
                  arising out of the use or inability to use the materials on EuroBudget.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on EuroBudget could include technical, typographical, or 
                  photographic errors. We do not warrant that any of the materials are accurate, 
                  complete or current. We may make changes to the materials at any time without notice.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">6. Affiliate Links & Advertising</h2>
                <p>
                  EuroBudget contains affiliate links. If you click on an affiliate link and make a 
                  purchase, we may receive a commission at no extra cost to you. We only recommend 
                  products and services we believe provide value to our readers.
                </p>
                <p>
                  We participate in the Amazon Services LLC Associates Program, Booking.com Affiliate 
                  Program, and other affiliate programs. These programs use cookies to track visits for 
                  commission purposes.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">7. User Content</h2>
                <p>
                  If you submit content to us (comments, reviews, etc.), you grant us a worldwide, 
                  non-exclusive, royalty-free license to use, reproduce, adapt, publish, and distribute 
                  such content. You represent that you own or have necessary rights to the content.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">8. Links to Other Websites</h2>
                <p>
                  Our website may contain links to third-party websites. We have no control over and 
                  assume no responsibility for the content, privacy policies, or practices of any 
                  third-party sites.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">9. Modifications</h2>
                <p>
                  We may revise these terms of service at any time without notice. By using this 
                  website you are agreeing to be bound by the then current version of these terms.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">10. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws 
                  of Germany and you irrevocably submit to the exclusive jurisdiction of the courts in 
                  that location.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}