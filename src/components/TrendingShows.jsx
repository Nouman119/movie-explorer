import React, { useState, useEffect } from 'react';
import { fetchAllShows } from '../services/api';
import MovieCard from './MovieCard';

// TrendingShows component to display exactly 8 trending movies in a 4-column horizontal grid layout
const TrendingShows = ({ onOpenDetails }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchAllShows();
        
        // Shuffle randomly and pick exactly 8 movies for the grid
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setMovies(shuffled.slice(0, 8));
      } catch (err) {
        setError('Failed to load trending movies.');
      } finally {
        setLoading(false);
      }
    };

    loadTrendingMovies();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-gray-400">
        <p>Loading trending movies...</p>
      </div>
    );
  }

  if (error) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Trending Movies
        </h2>
      </div>

      {/* 4-Column Responsive Grid Layout displaying 8 cards side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onOpenDetails={onOpenDetails} 
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingShows;