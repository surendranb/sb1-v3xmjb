import React from 'react';

interface GeometricPatternProps {
  type?: 'dots' | 'grid' | 'waves';
  className?: string;
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({ type = 'dots', className = '' }) => {
  const patterns = {
    dots: (
      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="currentColor" />
      </pattern>
    ),
    grid: (
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    ),
    waves: (
      <pattern id="waves" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 Q 10 15, 20 20 T 40 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    )
  };

  return (
    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {patterns[type]}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${type})`} />
      </svg>
    </div>
  );
};

export default GeometricPattern;