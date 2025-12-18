// app/privacy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="display-5 fw-bold mb-4">Privacy Policy</h1>
          <p className="text-muted mb-5">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              
              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">1. Introduction</h2>
                <p>
                  Welcome to EuroBudget ("we," "our," "us"). We are committed to protecting your personal 
                  information and your right to privacy. If you have any questions or concerns about this 
                  privacy policy, please contact us at <strong>contact@eurobudget.travel</strong>.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">2. Information We Collect</h2>
                <h3 className="h5 fw-bold mb-2">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide:</p>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address when you contact us</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent, referral sources</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Communicate with you, including customer service</li>
                  <li>Send you emails (only if you opt-in)</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website. 
                  Cookies are files with a small amount of data which may include an anonymous unique identifier.
                </p>
                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">5. Third-Party Services</h2>
                <p>We may employ third-party companies and individuals for:</p>
                <ul>
                  <li>To facilitate our Service</li>
                  <li>To provide the Service on our behalf</li>
                  <li>To perform Service-related services</li>
                  <li>To assist us in analyzing how our Service is used</li>
                </ul>
                <p>These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">6. Affiliate Disclosure</h2>
                <p>
                  EuroBudget participates in various affiliate marketing programs. This means we may earn 
                  commissions on qualifying purchases made through our links to retailer sites. These 
                  commissions help support our website and allow us to continue providing free travel 
                  guides. Our editorial content is not influenced by affiliate partnerships.
                </p>
                <p>We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">7. Your Data Protection Rights</h2>
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                  <li>The right to access – You have the right to request copies of your personal data.</li>
                  <li>The right to rectification – You have the right to request correction of inaccurate information.</li>
                  <li>The right to erasure – You have the right to request deletion of your personal data.</li>
                  <li>The right to restrict processing – You have the right to request restriction of processing.</li>
                  <li>The right to data portability – You have the right to request transfer of your data.</li>
                  <li>The right to object to processing – You have the right to object to our processing.</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-unstyled">
                  <li>By email: <strong>contact@eurobudget.com</strong></li>
                  <li>By visiting this page on our website: <strong>https://eurobudget.travel/contact</strong></li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}