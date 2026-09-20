// Base URL for TVMaze API
const BASE_URL = 'https://api.tvmaze.com';

// Function to fetch all shows from the API
export const fetchAllShows = async () => {
  try {
    // Send a GET request to the shows endpoint
    const response = await fetch(`${BASE_URL}/shows`);
    
    // Check if the network response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch movies data');
    }
    
    // Parse the response data into JSON format
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all shows:', error);
    throw error;
  }
};

// Function to search shows based on user query
export const searchShows = async (query) => {
  try {
    // Send a GET request to the search endpoint with the user's query
    const response = await fetch(`${BASE_URL}/search/shows?q=${query}`);
    
    // Check if response is ok
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
};