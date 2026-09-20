import React, { useState, useEffect } from 'react';
import { fetchAllShows } from '../services/api';
import MovieCard from './MovieCard';

// TrendingShows component to display exactly 8 movies structured in 2 columns (4 cards per column)
const TrendingShows = ({ onOpenDetails }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchAllShows();
        
        // Shuffle randomly and pick exactly 8 movies
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
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Trending Movies
        </h2>
      </div>

      {/* 2-Column Grid Layout with exactly 8 cards (4 cards in each column) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Column 1: First 4 cards */}
        <div className="flex flex-col gap-6">
          {movies.slice(0, 4).map((movie) => (
            <div key={movie.id} className="w-full">
              <MovieCard 
                movie={movie} 
                onOpenDetails={onOpenDetails} 
              />
            </div>
          ))}
        </div>

        {/* Column 2: Next 4 cards */}
        <div className="flex flex-col gap-6">
          {movies.slice(4, 8).map((movie) => (
            <div key={movie.id} className="w-full">
              <MovieCard 
                movie={movie} 
                onOpenDetails={onOpenDetails} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingShows;