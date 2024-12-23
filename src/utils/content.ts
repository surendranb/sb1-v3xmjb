import { getCollection } from 'astro:content';

export const getPosts = async (page = 1, limit = 10) => {
  const posts = await getCollection('writing');
  const sortedPosts = posts
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice((page - 1) * limit, page * limit);
  
  return sortedPosts;
};

export const getProjects = async (page = 1, limit = 10) => {
  const projects = await getCollection('projects');
  const sortedProjects = projects
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice((page - 1) * limit, page * limit);
  
  return sortedProjects;
};