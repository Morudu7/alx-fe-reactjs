import React from 'react';

const PostCard = ({ post }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-purple-400 capitalize">{post.title}</h3>
      <p className="text-gray-400">{post.body}</p>
    </div>
  </div>
);

export default PostCard;