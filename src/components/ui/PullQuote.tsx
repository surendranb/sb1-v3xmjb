import React from 'react';
import { motion } from 'framer-motion';

interface PullQuoteProps {
  children: React.ReactNode;
}

const PullQuote: React.FC<PullQuoteProps> = ({ children }) => {
  return (
    <motion.blockquote 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-serif text-xl italic pl-6 my-8 border-l-4 border-accent"
    >
      {children}
    </motion.blockquote>
  );
};

export default PullQuote;