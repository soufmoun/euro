// Create ShareButtons.tsx
export default function ShareButtons({ title, url }: { title: string, url: string }) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
    
    const shareLinks = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(title)}`,
    };
    
    return (
      <div className="d-flex gap-2">
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        {/* ... other buttons */}
      </div>
    );
  }