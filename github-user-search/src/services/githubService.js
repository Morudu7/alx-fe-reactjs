// src/services/githubService.js
import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

/**
 * Fetches user data from the GitHub API.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<object>} The user data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}${username}`);
    return response.data;
  } catch (error) {
    // Axios throws an error for non-2xx responses, which is what we want.
    console.error("Error fetching user data:", error);
    throw error;
  }
};