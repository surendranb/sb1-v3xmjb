import React from 'react';
import { useProjects } from '../../hooks/useProjects';
import ContentScroller from '../ui/ContentScroller';
import ProjectCard from './ProjectCard';
import LoadingSpinner from '../ui/LoadingSpinner';

const ProjectList: React.FC = () => {
  const { projects, loading, error, loadMore } = useProjects();

  if (error) return <div className="text-red-500">Failed to load projects</div>;

  return (
    <div>
      <h2 className="font-serif text-xl mb-6 text-gray-900 dark:text-gray-100">Recent Projects</h2>
      <ContentScroller onScrollEnd={loadMore}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {loading && <LoadingSpinner />}
      </ContentScroller>
    </div>
  );
};

export default ProjectList;