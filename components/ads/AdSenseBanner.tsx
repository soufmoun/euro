// components/ads/AdSenseBanner.tsx - UPDATED VERSION
'use client';

import { useEffect } from 'react';

interface AdSenseBannerProps {
  slotId?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  placeholderText?: string; // Add this prop
}

export default function AdSenseBanner({ 
  slotId = '1234567890', 
  format = 'auto',
  className = '',
  placeholderText = 'AdSense will appear here after approval' // Default value
}: AdSenseBannerProps) {
  
  const showPlaceholder = !process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || 
                          process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID === 'ca-pub-YOUR_ID_HERE';

  useEffect(() => {
    if (!showPlaceholder) {
      // Load AdSense script
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      // Initialize ad
      setTimeout(() => {
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (e) {
          console.log('AdSense error:', e);
        }
      }, 1000);
    }
  }, [showPlaceholder]);

  if (showPlaceholder) {
    return (
      <div className={`text-center my-4 ${className}`}>
        <div className="ad-placeholder">
          <div>
            <p className="text-muted mb-2">Advertisement</p>
            <small>{placeholderText}</small>
            <div className="mt-2">
              <code className="text-muted small">Slot: {slotId}</code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center my-4 ${className}`}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}