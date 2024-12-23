import React from 'react';
import { motion } from 'framer-motion';
import BlogList from './BlogList';
import ProjectList from './ProjectList';

export const ContentGrid: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 my-12">
      <div className="grid md:grid-cols-2 gap-8 max-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BlogList />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectList />
        </motion.div>
      </div>
    </section>
  );
};

export default ContentGrid;