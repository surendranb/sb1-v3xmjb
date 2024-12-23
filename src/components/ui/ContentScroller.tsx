import React, { useRef, useEffect } from 'react';

interface ContentScrollerProps {
  children: React.ReactNode;
  onScrollEnd: () => void;
}

const ContentScroller: React.FC<ContentScrollerProps> = ({ children, onScrollEnd }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      if (scrollHeight - scrollTop <= clientHeight + 50) {
        onScrollEnd();
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, [onScrollEnd]);

  return (
    <div
      ref={scrollRef}
      className="overflow-y-auto pr-4 custom-scrollbar"
      style={{ maxHeight: 'calc(60vh - 3rem)' }}
    >
      {children}
    </div>
  );
};

export default ContentScroller;