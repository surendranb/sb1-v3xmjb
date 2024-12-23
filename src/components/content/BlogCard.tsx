import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  post: {
    slug: string;
    data: {
      title: string;
    };
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-3"
    >
      <a 
        href={`/writing/${post.slug}`} 
        className="font-serif text-base text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
      >
        {post.data.title}
      </a>
    </motion.article>
  );
};

export default BlogCard;