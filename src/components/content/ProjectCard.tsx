import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    slug: string;
    data: {
      title: string;
    };
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-3"
    >
      <a 
        href={`/projects/${project.slug}`} 
        className="font-serif text-base text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
      >
        {project.data.title}
      </a>
    </motion.article>
  );
};

export default ProjectCard;