// components/CookieConsentBanner.tsx
'use client';

import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Understand"
      cookieName="eurobudget-cookie-consent"
      style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
        color: 'white',
        padding: '20px',
        fontSize: '14px',
        zIndex: 9999
      }}
      buttonStyle={{
        background: '#fff',
        color: '#2c3e50',
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none'
      }}
      expires={365}
    >
      🍪 We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.{' '}
      <Link href="/privacy" className="text-white text-decoration-underline ms-1">
        Learn more
      </Link>
    </CookieConsent>
  );
}