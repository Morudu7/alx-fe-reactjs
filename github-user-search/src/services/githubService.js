// In src/services/githubService.js
import axios from 'axios';

const API_URL = 'https://api.github.com/search/users?q';

export const searchUsers = async (params) => {
  // Destructure params with default values
  const { query = '', location = '', minRepos = '', page = 1, perPage = 15 } = params;

  // Build the query parts array
  const queryParts = [];
  if (query) queryParts.push(query);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);


  // Join parts to create the final query string

  if (!queryString) {
    // Return empty if no search terms are provided
    return { items: [], total_count: 0 };
  }

  try {
    const response = await axios.get(API_URL, {
      params: {
        q: queryString,
        page: page,
        per_page: perPage,
      },
    });
    return response.data; // { items: [...], total_count: ... }
  } catch (error) {
    console.error('Error fetching from GitHub API:', error);
    throw error;
  }
};

/**
 * Fetches data for a single GitHub user.
 * @param {string} username - The GitHub username to fetch data for.
 * @returns {Promise<object>} The user data object.
 */
export const fetchUserData = async (username) => {
  if (!username) {
    // Handle the case where username is not provided
    throw new Error('Username is required');
  }

  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for user ${username}:`, error);
    throw error;
  }
};