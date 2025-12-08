// AdBanner.tsx
export default function AdBanner({ slotId }: { slotId: string }) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className="ad-slot bg-light border text-center p-4">
          <small>Ad Slot: {slotId}</small>
        </div>
      );
    }
    
    return (
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="YOUR_CLIENT_ID"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
  
  // Add to pages at strategic locations:
  // - After first paragraph in content
  // - Between sections
  // - In sidebar