import React from 'react';
import { motion } from 'framer-motion';

interface ArticleHeaderProps {
  title: string;
  date: string;
  readingTime: string;
  tags?: string[];
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, date, readingTime, tags }) => {
  return (
    <header className="mb-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-4xl mb-4"
      >
        {title}
      </motion.h1>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <time>{date}</time>
        <span>·</span>
        <span>{readingTime}</span>
      </div>
      {tags && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mt-4"
        >
          {tags.map(tag => (
            <span key={tag} className="text-sm bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default ArticleHeader;