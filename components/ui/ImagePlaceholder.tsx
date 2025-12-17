interface ImagePlaceholderProps {
    width?: number;
    height?: number;
    text?: string;
    className?: string;
  }
  
  export function ImagePlaceholder({ 
    width = 800, 
    height = 600, 
    text = 'Loading image...',
    className = '' 
  }: ImagePlaceholderProps) {
    return (
      <div 
      className={`bg-light d-flex align-items-center justify-content-center ${className}`}
        style={{ width, height }}
      >
        <svg
          width={width}
          height={height}
          xmlns="http://www.w3.org/2000/svg"
          className="text-secondary"
        >
          <rect width="100%" height="100%" fill="currentColor" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fill="#6c757d"
            fontSize="14"
            fontFamily="system-ui, sans-serif"
          >
            {text}
          </text>
        </svg>
      </div>
    );
  }