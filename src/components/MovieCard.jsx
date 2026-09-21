import React from 'react';
import { Star, Calendar } from 'lucide-react';

// MovieCard component displaying professional icons for rating and release year
const MovieCard = ({ movie, onOpenDetails }) => {
  // Safely extract movie details with fallback values
  const title = movie.name || 'Untitled';
  const rating = movie.rating?.average || 'N/A';
  const premiered = movie.premiered ? movie.premiered.substring(0, 4) : 'N/A';
  const posterImage = movie.image?.medium || movie.image?.original || 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* Movie Poster Image Container */}
      <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
        <img 
          src={posterImage} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Card Body Section */}
      <div className="p-4 flex flex-col grow justify-between">
        <div>
          {/* Movie Title */}
          <h3 className="text-base font-bold text-gray-900 truncate mb-2" title={title}>
            {title}
          </h3>
          
          {/* Rating and Premiered Year with Professional Lucide Icons */}
          <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="font-semibold text-gray-800">{rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-700">{premiered}</span>
            </div>
          </div>
        </div>

        {/* See Details Action Button */}
        <button
          onClick={() => onOpenDetails(movie)}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl text-xs transition-colors shadow-sm"
        >
          See Details
        </button>
      </div>

    </div>
  );
};

export default MovieCard;