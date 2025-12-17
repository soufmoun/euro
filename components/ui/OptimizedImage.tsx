'use client';

import { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  onError?: () => void;
  fallbackSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className = '',
  style,
  quality = 85,
  placeholder = 'empty',
  onError,
  fallbackSrc = '/images/placeholder.jpg',
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
    onError?.();
  };

  // For Unsplash images, we can generate a blur placeholder
  const isUnsplash = imgSrc.includes('unsplash.com');
  
  const blurDataURL = isUnsplash 
    ? `data:image/svg+xml;base64,${btoa(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width || 800} ${height || 600}">
          <rect width="100%" height="100%" fill="#e5e7eb"/>
          <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#9ca3af" text-anchor="middle">Loading...</text>
        </svg>`
      )}`
    : undefined;

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={className}
      style={style}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}