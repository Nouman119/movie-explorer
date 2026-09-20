import React, { useState, useEffect } from 'react';
import { fetchAllShows, searchShows } from '../services/api';
import MovieCard from '../components/MovieCard';
import MovieDetailsModal from '../components/MovieDetailsModal';
import { Search, ChevronLeft, ChevronRight, Film } from 'lucide-react';

// MovieListingPage component featuring search functionality and clean pagination support
const MovieListingPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12; // Number of movies to display per page

  // Fetch initial shows or search results based on query
  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        let data = [];

        if (query.trim() === '') {
          data = await fetchAllShows();
        } else {
          const searchResults = await searchShows(query);
          // TVMaze search endpoint returns an array of objects containing { score, show }
          data = searchResults.map((item) => item.show);
        }

        setMovies(data);
        setCurrentPage(1); // Reset to first page on new search/load
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      loadMovies();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  // Calculate pagination indices
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Handle page change with smooth scroll to top
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header & Search Bar Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Explore <span className="text-red-600">Movies & Shows</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Browse through our extensive collection or search your favorite titles.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-96 relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a movie or show..."
              className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm shadow-inner"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-400 font-medium">Loading amazing movies...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-950/50 border border-red-800 text-red-200 px-6 py-4 rounded-2xl text-center my-12">
            <p>{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-24 space-y-3">
            <Film className="w-16 h-16 text-gray-600 mx-auto" />
            <h3 className="text-xl font-bold text-gray-300">No movies found</h3>
            <p className="text-gray-500 text-sm">Try searching with a different keyword.</p>
          </div>
        )}

        {/* Movie Grid */}
        {!loading && !error && movies.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentMovies.map((movie) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  onOpenDetails={(m) => setSelectedMovie(m)} 
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-3 mt-12 pt-8 border-t border-slate-900">
                
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-medium transition-colors border border-slate-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                {/* Page Number Indicator */}
                <span className="text-sm font-medium text-gray-400 px-3">
                  Page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
                </span>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-medium transition-colors border border-slate-800"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            )}
          </>
        )}

        {/* Movie Details Modal */}
        {selectedMovie && (
          <MovieDetailsModal 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)} 
          />
        )}

      </div>
    </div>
  );
};

export default MovieListingPage;