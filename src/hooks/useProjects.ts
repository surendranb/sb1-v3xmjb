import { useState, useEffect } from 'react';
import { getProjects } from '../utils/content';

export const useProjects = (batchSize = 10) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const newProjects = await getProjects(page, batchSize);
      setProjects(prev => [...prev, ...newProjects]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { projects, loading, error, loadMore: loadProjects };
};