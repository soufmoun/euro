// components/ContactForm.tsx - FIXED VERSION
'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📝 Form submitting from ContactForm...'); 
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      console.log('📤 Attempting to call /api/contact...');
      console.log('Data being sent:', formData);
      
      // Make the API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('📥 Response received. Status:', response.status, response.statusText);
      console.log('📥 Response ok:', response.ok);
      
      // Try to parse response as JSON
      let result;
      try {
        result = await response.json();
        console.log('📦 Response data:', result);
      } catch (jsonError) {
        console.error('❌ Failed to parse JSON response:', jsonError);
        const text = await response.text();
        console.log('📄 Raw response text:', text);
        throw new Error(`Invalid JSON response: ${text.substring(0, 100)}`);
      }
      
      if (!response.ok) {
        throw new Error(result?.message || `Server error: ${response.status}`);
      }
      
      console.log('✅ API call successful!');
      
      // Success handling
      setSubmitStatus('success');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('❌ Error during form submission:', error);
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      
    } finally {
      console.log('🏁 Form submission process completed');
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn delay={100}>
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Send us a Message</h5>
        </div>
        <div className="card-body p-4">
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Success!</strong> Your message has been sent. We'll get back to you soon.
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setSubmitStatus('idle')}
                aria-label="Close"
              ></button>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Error:</strong> {errorMessage}
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setSubmitStatus('idle')}
                aria-label="Close"
              ></button>
            </div>
          )}
          
          {/* THE FORM - Only one form element! */}
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="subject" className="form-label fw-semibold">Subject *</label>
              <select
                className="form-select"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select a topic</option>
                <option value="general-inquiry">General Inquiry</option>
                <option value="travel-advice">Travel Advice</option>
                <option value="website-feedback">Website Feedback</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="advertising">Advertising Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-semibold">Message *</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your European travel plans, questions, or how we can help..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className="d-grid">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
            
            <div className="mt-3 text-center">
              <small className="text-muted">
                * Required fields
              </small>
            </div>
          </form>
        </div>
      </div>
    </FadeIn>
  );
}