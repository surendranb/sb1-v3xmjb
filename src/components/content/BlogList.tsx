import React from 'react';
import { usePosts } from '../../hooks/usePosts';
import ContentScroller from '../ui/ContentScroller';
import BlogCard from './BlogCard';
import LoadingSpinner from '../ui/LoadingSpinner';

const BlogList: React.FC = () => {
  const { posts, loading, error, loadMore } = usePosts();

  if (error) return <div className="text-red-500">Failed to load posts</div>;

  return (
    <div>
      <h2 className="font-serif text-xl mb-6 text-gray-900 dark:text-gray-100">Latest Posts</h2>
      <ContentScroller onScrollEnd={loadMore}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        {loading && <LoadingSpinner />}
      </ContentScroller>
    </div>
  );
};

export default BlogList;