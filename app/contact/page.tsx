// app/contact/page.tsx
'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import ContactForm from '../../components/ContactForm'; // Import the new component

export default function ContactPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead text-muted mb-4">
                Have questions, suggestions, or need travel advice? We're here to help!
              </p>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <p className="text-muted">
                    Whether you're planning your first European adventure or looking for specific budget tips, 
                    our team of experienced travelers is ready to assist you.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="row">
            {/* Contact Form - Now using the component */}
            <div className="col-lg-8">
              <ContactForm /> {/* Use the component here */}
            </div>
            
            {/* Contact Information */}
            <div className="col-lg-4">
              <FadeIn delay={200}>
                <div className="card border-0 bg-light h-100">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-4">Get in Touch</h5>
                    
                    <div className="mb-4">
                      <div className="d-flex align-items-start mb-3">
                        <div className="me-3 text-primary">
                          📧
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">General Inquiries</h6>
                          <a href="mailto:hello@eurobudget.com" className="text-muted mb-0">
                            hello@eurobudget.com
                          </a>
                          <small className="text-muted d-block">Response within 24 hours</small>
                        </div>
                      </div>

                      <div className="d-flex align-items-start mb-3">
                        <div className="me-3 text-primary">
                          🔒
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Privacy Concerns</h6>
                          <a href="mailto:privacy@eurobudget.com" className="text-muted mb-0">
                            privacy@eurobudget.com
                          </a>
                          <small className="text-muted d-block">For data protection inquiries</small>
                        </div>
                      </div>

                      <div className="d-flex align-items-start">
                        <div className="me-3 text-primary">
                          🤝
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">Partnerships</h6>
                          <a href="mailto:partners@eurobudget.com" className="text-muted mb-0">
                            partners@eurobudget.com
                          </a>
                          <small className="text-muted d-block">Business collaborations</small>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">Quick Links</h6>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <Link href="/about" className="text-decoration-none">
                            👥 About Our Team
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/privacy" className="text-decoration-none">
                            🔒 Privacy Policy
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link href="/terms" className="text-decoration-none">
                            📝 Terms of Service
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog" className="text-decoration-none">
                            📚 Travel Blog
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-2">Follow Our Journey</h6>
                      <p className="text-muted small mb-3">
                        Travel tips and destination guides coming soon on social media!
                      </p>
                      <div className="d-flex gap-2">
                        <span className="badge bg-secondary">Instagram</span>
                        <span className="badge bg-secondary">Pinterest</span>
                        <span className="badge bg-secondary">YouTube</span>
                      </div>
                    </div>

                    <div className="alert alert-info mt-4">
                      <h6 className="alert-heading mb-2">💡 Before You Contact</h6>
                      <p className="small mb-0">
                        Check our <Link href="/blog" className="alert-link">blog</Link> and{' '}
                        <Link href="/destinations" className="alert-link">destination guides</Link>{' '}
                        - your question might already be answered!
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* FAQ Section */}
          <FadeIn delay={300}>
            <div className="mt-5">
              <div className="card border-0">
                <div className="card-body text-center p-5">
                  <h3 className="mb-4">Frequently Asked Questions</h3>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <p className="text-muted mb-4">
                        Quick answers to common questions about European travel planning
                      </p>
                      <div className="d-flex flex-wrap justify-content-center gap-3">
                        <Link href="/blog/first-time-europe-budget" className="btn btn-outline-primary">
                          First Europe Trip Guide
                        </Link>
                        <Link href="/destinations" className="btn btn-outline-primary">
                          Browse Destinations
                        </Link>
                        <Link href="/itineraries" className="btn btn-outline-primary">
                          View Itineraries
                        </Link>
                        <Link href="/tips" className="btn btn-outline-primary">
                          Budget Tips
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}