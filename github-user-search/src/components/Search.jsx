// src/components/Search.js
import React, { useState, useEffect, query } from 'react';
import { searchUsers } from '../services/githubService.js';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   const [location, setLocation] = useState(''); // New state for location
  const [minRepos, setMinRepos] = useState(''); // New state for min repositories
  const [users, setUsers] = useState([]);
const [totalResults, setTotalResults] = useState(0);
const [currentPage, setCurrentPage] = useState(1);
const [searched, setSearched] = useState(false); // Track if a search has been made



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

  const fetchUsers = async (page) => {
  setLoading(true);
  try {
    const data = await searchUsers({ query, location, minRepos, page });
    setUsers(data.items);
    setTotalResults(data.total_count);
  } catch (error) {
    console.error("Failed to fetch users", error);
    setUsers([]);
    setTotalResults(0);
  } finally {
    setLoading(false);
  }
};

const handleSearch = (e) => {
  e.preventDefault();
  setSearched(true);
  setCurrentPage(1); // Reset to page 1 for a new search
  fetchUsers(1);
};

// Fetch users when currentPage changes, but only after an initial search
useEffect(() => {
  if (searched) {
    fetchUsers(currentPage);
  }
}, [currentPage]);

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
        <button type="submit" style={{color: 'white', backgroundColor: 'red'}}>Search</button>
        </form>

        <form onSubmit={handleSearch} className="p-4 bg-gray-800 rounded-lg">
  <div className="flex flex-col md:flex-row gap-4 mb-4">
    {/* Username Input */}
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search by username..."
      className="flex-grow p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {/* Location Input */}
    <input
      type="text"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="Filter by location..."
      className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {/* Repositories Input */}
    <input
      type="number"
      value={minRepos}
      onChange={(e) => setMinRepos(e.target.value)}
      placeholder="Min. repositories"
      className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <button
    type="submit"
    className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-md font-bold text-white transition-colors"
  >
    Search
  </button>
</form>
<div className="mt-6">
  {loading && <p className="text-center text-gray-400">Loading...</p>}
  {!loading && searched && <p className="text-gray-400 mb-4">Found {totalResults} users</p>}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {users.map((user) => (
      <div key={user.id} className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform hover:scale-105">
        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="text-xl font-bold text-white">{user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            View Profile
          </a>
        </div>
        {totalResults > 15 && (
  <div className="flex justify-between items-center mt-6">
    <button
      onClick={() => setCurrentPage(p => p - 1)}
      disabled={currentPage === 1 || loading}
      className="p-2 px-4 bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Previous
    </button>
    <span className="text-white">Page {currentPage}</span>
    <button
      onClick={() => setCurrentPage(p => p + 1)}
      disabled={currentPage * 15 >= totalResults || loading}
      className="p-2 px-4 bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
)}
      </div>
    ))}
  </div>
</div>
</div>
  );
};

export default Search;