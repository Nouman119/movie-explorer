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
      setError('মুভি ডেটা লোড করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  // Handle search submission
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
      setMovies(data);
    } catch (err) {
      setError('মুভি সার্চ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* পেজ হেডার এবং সার্চ বার সেকশন */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">মুভি এবং শো ব্রাউজ করুন</h1>
          <p className="text-gray-600 text-sm mt-1">আপনার পছন্দের মুভিগুলো খুঁজে নিন খুব সহজেই।</p>
        </div>

        <form onSubmit={handleSearchSubmit} className="w-full md:w-auto flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="মুভির নাম দিয়ে সার্চ করুন..."
            className="w-full md:w-80 px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-200 text-sm flex-shrink-0"
          >
            সার্চ করুন
          </button>
        </form>
      </div>

      {/* লোডিং স্টেট */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 font-medium text-sm">মুভি লোড হচ্ছে...</p>
        </div>
      )}

      {/* এরর স্টেট */}
      {error && !loading && (
        <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-200">
          <p className="text-red-600 font-medium">{error}</p>
          <button 
            onClick={loadAllShows}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-700 transition-colors"
          >
            পুনরায় চেষ্টা করুন
          </button>
        </div>
      )}

      {/* খালি স্টেট (কোনো মুভি না পাওয়া গেলে) */}
      {!loading && !error && movies.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
          <p className="text-gray-500 text-lg">আপনার সার্চ অনুযায়ী কোনো মুভি পাওয়া যায়নি।</p>
        </div>
      )}

      {/* রেসপনসিভ মুভি গ্রিড লেআউট */}
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

      {/* মুভি বিস্তারিত মডাল ওভারলে */}
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