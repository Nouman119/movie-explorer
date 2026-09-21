import React, { useState } from 'react';
import Hero from '../components/Hero';
import MovieDetailsModal from '../components/MovieDetailsModal';
import TrendingShows from '../components/TrendingShows';

// HomePage component representing the main landing page according to assignment guidelines
const HomePage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="bg-slate-950 min-h-screen text-white">
  
      <Hero />
<TrendingShows onOpenDetails={(movie) => setSelectedMovie(movie)} />
      {/* Movie Details Modal (if triggered) */}
      {selectedMovie && (
        <MovieDetailsModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}

    </div>
  );
};

export default HomePage;