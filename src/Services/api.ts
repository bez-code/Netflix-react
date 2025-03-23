const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "7bbeb0a34e48647c68f97d056316f57d"; // Replace with your TMDb API key

export const ENDPOINTS = {
  TRENDING: `/trending/all/week?api_key=${API_KEY}`,
  NETFLIX_ORIGINALS: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  TOP_RATED: `/movie/top_rated?api_key=${API_KEY}`,
  ACTION_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  COMEDY_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  HORROR_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  DOCUMENTARIES: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const fetchMovies = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
}; 