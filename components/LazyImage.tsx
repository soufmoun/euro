// LazyImage.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function LazyImage({ src, alt, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}