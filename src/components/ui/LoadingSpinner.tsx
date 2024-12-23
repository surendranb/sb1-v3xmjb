import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent" />
    </div>
  );
};

export default LoadingSpinner;