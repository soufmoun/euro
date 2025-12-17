/**
 * Optimize external image URLs with parameters
 */
export const optimizeImageUrl = (
    url: string, 
    options?: {
      width?: number;
      height?: number;
      quality?: number;
      format?: 'webp' | 'avif' | 'auto';
    }
  ): string => {
    const { 
      width = 1200, 
      height, 
      quality = 85, 
      format = 'auto' 
    } = options || {};
  
    // For Unsplash images
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      const params = new URLSearchParams({
        w: width.toString(),
        q: quality.toString(),
        auto: 'format',
        fit: 'crop',
        ...(height && { h: height.toString() }),
      });
      
      if (format !== 'auto') {
        params.set('fm', format);
      }
      
      return `${baseUrl}?${params.toString()}`;
    }
  
    // For other image sources, consider using a proxy
    return url;
  };
  
  /**
   * Generate blur placeholder for images
   */
  export const generateBlurDataURL = async (url: string): Promise<string> => {
    // For production, consider using a service
    // For now, return a generic blur placeholder
    return 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ//2Q==';
  };
  
  /**
   * Get optimized image props for Next.js Image component
   */
  export const getOptimizedImageProps = (
    src: string,
    alt: string,
    options?: {
      width?: number;
      height?: number;
      priority?: boolean;
      sizes?: string;
      className?: string;
      fill?: boolean;
    }
  ) => {
    const {
      width,
      height,
      priority = false,
      sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
      className = '',
      fill = false,
    } = options || {};
  
    return {
      src: optimizeImageUrl(src, { width, quality: 85 }),
      alt,
      width: fill ? undefined : width,
      height: fill ? undefined : height,
      priority,
      sizes,
      className,
      fill,
    };
  };