import React from 'react';
import { useParams, Routes, Route, Link } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  return <div>Blog Post ID: {postId}</div>;
};

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <nav>
        <Link to="1">Post 1</Link>
        <Link to="2">Post 2</Link>
      </nav>
      <Routes>
        <Route path=":postId" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;