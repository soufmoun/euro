// components/emails/ContactNotification.tsx
import * as React from 'react';

interface ContactNotificationProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
  timestamp: string;
}

export const ContactNotification: React.FC<Readonly<ContactNotificationProps>> = ({
  name,
  email,
  subject,
  message,
  inquiryType,
  timestamp
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h2 style={{ color: '#2563eb' }}>New Contact Form Submission</h2>
    
    <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
      <h3>Submission Details</h3>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', width: '150px' }}>Name:</td>
            <td style={{ padding: '8px 0' }}>{name}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Email:</td>
            <td style={{ padding: '8px 0' }}>
              <a href={`mailto:${email}`} style={{ color: '#2563eb' }}>
                {email}
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Subject:</td>
            <td style={{ padding: '8px 0' }}>{subject}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Inquiry Type:</td>
            <td style={{ padding: '8px 0' }}>{inquiryType}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>Message:</td>
            <td style={{ padding: '8px 0', whiteSpace: 'pre-wrap' }}>{message}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Submitted:</td>
            <td style={{ padding: '8px 0' }}>{new Date(timestamp).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
      <p style={{ color: '#6b7280', fontSize: '14px' }}>
        This email was sent from your website contact form.
      </p>
      <p style={{ color: '#6b7280', fontSize: '12px' }}>
        Reply to this email to respond directly to {name}.
      </p>
    </div>
  </div>
);