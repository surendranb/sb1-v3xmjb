import { useState, useEffect } from 'react';
import { getPosts } from '../utils/content';

export const usePosts = (batchSize = 10) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const newPosts = await getPosts(page, batchSize);
      setPosts(prev => [...prev, ...newPosts]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, loadMore: loadPosts };
};