import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  tags: string[];
  onFilterChange: (tag: string) => void;
  activeTag: string;
}

const ContentFilter: React.FC<Props> = ({ tags, onFilterChange, activeTag }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange('all')}
        className={`px-3 py-1 rounded-full transition-colors ${
          activeTag === 'all'
            ? 'bg-primary text-white'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
        }`}
      >
        All
      </motion.button>
      {tags.map((tag) => (
        <motion.button
          key={tag}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(tag)}
          className={`px-3 py-1 rounded-full transition-colors ${
            activeTag === tag
              ? 'bg-primary text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
          }`}
        >
          {tag}
        </motion.button>
      ))}
    </div>
  );
};

export default ContentFilter;