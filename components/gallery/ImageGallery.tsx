'use client';

import { useState } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  cols?: number;
  gap?: number;
}

export default function ImageGallery({ 
  images, 
  cols = 3, 
  gap = 4 
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Bootstrap grid system
  const gridCols = {
    1: 'col-12',
    2: 'col-12 col-sm-6',
    3: 'col-12 col-sm-6 col-lg-4',
    4: 'col-12 col-sm-6 col-lg-3',
  }[cols];

  // Bootstrap spacing mapping
  const gapClass = `g-${gap}`;

  return (
    <>
      <div className={`row ${gapClass}`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`${gridCols} mb-${gap}`}
          >
            <div 
              className="position-relative cursor-pointer overflow-hidden rounded"
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ cursor: 'pointer' }}
            >
              <div className="ratio ratio-4x3">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={`(max-width: 768px) 100vw, (max-width: 1200px) ${100 / cols}vw, ${100 / cols}vw`}
                  className="object-fit-cover"
                  style={{ 
                    transition: 'transform 0.3s ease',
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                  quality={80}
                />
              </div>
              {image.caption && (
                <p className="mt-2 small text-secondary">{image.caption}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="modal show d-block"
          onClick={() => setSelectedIndex(null)}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        >
          <div className="modal-dialog modal-dialog-centered mw-100 h-100 m-0">
            <div className="modal-content border-0 bg-transparent">
              <div className="modal-body d-flex align-items-center justify-content-center p-4">
                <div className="position-relative" style={{ maxHeight: '90vh', maxWidth: '90vw' }}>
                  <OptimizedImage
                    src={images[selectedIndex].src}
                    alt={images[selectedIndex].alt}
                    width={1200}
                    height={800}
                    className="img-fluid"
                    style={{ 
                      maxHeight: '80vh',
                      objectFit: 'contain'
                    }}
                    quality={95}
                    priority
                  />
                  <button
                    className="position-absolute top-0 end-0 rounded-circle bg-white bg-opacity-20 p-2 text-white border-0"
                    style={{ 
                      backdropFilter: 'blur(4px)',
                      margin: '1rem'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(null);
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}