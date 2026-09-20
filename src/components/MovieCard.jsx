import React from 'react';

// Reusable MovieCard component to display individual movie/show details in a grid
const MovieCard = ({ movie, onOpenDetails }) => {
  // Extracting safe fallback values from TVMaze API data structure
  const imageUrl = movie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
  const title = movie.name || 'Untitled Movie';
  const rating = movie.rating?.average ? movie.rating.average : 'N/A';
  const releaseYear = movie.premiered ? movie.premiered.split('-')[0] : 'N/A';

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200/80 overflow-hidden transition-all duration-300 flex flex-col justify-between group">
      
      {/* Movie Poster Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-2/3">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex flex-col grow justify-between">
        <div>
          {/* Movie Title */}
          <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1 group-hover:text-red-600 transition-colors">
            {title}
          </h3>

          {/* Rating and Release Year Info */}
          <div className="flex items-center text-sm text-gray-600 mb-4 space-x-3">
            <span className="flex items-center font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
              ★ {rating}
            </span>
            <span className="flex items-center text-gray-500">
              📅 {releaseYear}
            </span>
          </div>
        </div>

        {/* See Details Button */}
        <button
          onClick={() => onOpenDetails(movie)}
          className="w-full mt-2 bg-gray-900 hover:bg-red-600 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-sm flex items-center justify-center space-x-2"
        >
          <span>See Details</span>
        </button>
      </div>

    </div>
  );
};

export default MovieCard;