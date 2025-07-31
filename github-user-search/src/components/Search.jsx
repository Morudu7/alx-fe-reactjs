// src/components/Search.js
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username) return; // Don't search if the input is empty

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering for API states */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h2>{user.name} (@{user.login})</h2>
          <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile on GitHub
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;