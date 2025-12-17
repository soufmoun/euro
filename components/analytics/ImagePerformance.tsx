'use client';

import { useEffect } from 'react';

export function ImagePerformance() {
  useEffect(() => {
    // Monitor image loading performance
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Check if this is a PerformanceResourceTiming entry
        const resourceEntry = entry as PerformanceResourceTiming;
        
        // Check if it's an image resource
        if (resourceEntry.initiatorType === 'img') {
          console.log('Image loaded:', {
            name: resourceEntry.name,
            duration: resourceEntry.duration,
            size: resourceEntry.transferSize || 0,
            startTime: resourceEntry.startTime,
            // Additional metrics
            fetchStart: resourceEntry.fetchStart,
            responseEnd: resourceEntry.responseEnd,
            decodedBodySize: resourceEntry.decodedBodySize || 0,
            encodedBodySize: resourceEntry.encodedBodySize || 0,
          });
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, []);

  return null;
}