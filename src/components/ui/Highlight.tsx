import React from 'react';
import { cn } from '../../utils/cn';

interface HighlightProps {
  children: React.ReactNode;
  color?: 'primary' | 'accent';
}

const Highlight: React.FC<HighlightProps> = ({ children, color = 'primary' }) => {
  return (
    <span className={cn(
      'px-1 rounded',
      color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
    )}>
      {children}
    </span>
  );
};

export default Highlight;