import React, { useState, useEffect } from 'react';
import { fetchAllShows, searchShows } from '../services/api';
import MovieCard from '../components/MovieCard';
import MovieDetailsModal from '../components/MovieDetailsModal';

// MovieListingPage component to display searchable movies in a responsive grid
const MovieListingPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch all shows when the component mounts
  useEffect(() => {
    loadAllShows();
  }, []);

  const loadAllShows = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllShows();
      setMovies(data);
    } catch (err) {
      setError('Failed to load movie data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Handle search submission and fix data structure mapping
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      loadAllShows();
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await searchShows(searchQuery);
      
      // Extract the 'show' object from TVMaze search results
      const formattedShows = data.map(item => item.show).filter(show => show && show.id);
      
      setMovies(formattedShows);
    } catch (err) {
      setError('Failed to search movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Page Header and Search Bar Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Browse Movies & Shows</h1>
          <p className="text-gray-600 text-sm mt-1">Explore and discover your favorite titles easily.</p>
        </div>

        <form onSubmit={handleSearchSubmit} className="w-full md:w-auto flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full md:w-80 px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-200 text-sm shrink-0"
          >
            Search
          </button>
        </form>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 font-medium text-sm">Loading movies...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-200">
          <p className="text-red-600 font-medium">{error}</p>
          <button 
            onClick={loadAllShows}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && movies.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
          <p className="text-gray-500 text-lg">No movies found matching your search.</p>
        </div>
      )}

      {/* Responsive Movie Grid Layout */}
      {!loading && !error && movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onOpenDetails={(m) => setSelectedMovie(m)} 
            />
          ))}
        </div>
      )}

      {/* Movie Details Modal Overlay */}
      {selectedMovie && (
        <MovieDetailsModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}

    </div>
  );
};

export default MovieListingPage;