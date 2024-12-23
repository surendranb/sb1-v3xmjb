import React from 'react';

interface MediaEmbedProps {
  type: 'youtube' | 'spotify' | 'image';
  src: string;
  title?: string;
  className?: string;
}

const MediaEmbed: React.FC<MediaEmbedProps> = ({ type, src, title, className = '' }) => {
  switch (type) {
    case 'youtube':
      return (
        <div className={`aspect-w-16 aspect-h-9 my-8 ${className}`}>
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      );
    case 'spotify':
      return (
        <div className={`my-8 ${className}`}>
          <iframe
            src={src}
            width="100%"
            height="152"
            allow="encrypted-media"
            className="rounded-lg"
          />
        </div>
      );
    case 'image':
      return (
        <img
          src={src}
          alt={title}
          className={`rounded-lg my-8 ${className}`}
          loading="lazy"
        />
      );
    default:
      return null;
  }
};

export default MediaEmbed;