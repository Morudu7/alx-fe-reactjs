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
  const queryString = queryParts.join('+');

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