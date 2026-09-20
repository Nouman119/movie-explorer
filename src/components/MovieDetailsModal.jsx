import React from 'react';

// MovieDetailsModal component to show in-depth information of a selected movie
const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  // Extracting safe fallback values from TVMaze API data structure
  const posterUrl = movie.image?.original || movie.image?.medium || 'https://via.placeholder.com/600x400?text=No+Image+Available';
  const title = movie.name || 'Untitled Movie';
  const rating = movie.rating?.average ? movie.rating.average : 'N/A';
  const releaseDate = movie.premiered || 'N/A';
  const genres = movie.genres && movie.genres.length > 0 ? movie.genres.join(', ') : 'N/A';
  const language = movie.language || 'N/A';
  const summary = movie.summary ? movie.summary : '<p>No summary available for this movie.</p>';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Box Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{title}</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200/80 hover:bg-red-100 hover:text-red-600 text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Movie Backdrop / Poster Image */}
          <div className="relative w-full h-64 sm:h-72 bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
            <img 
              src={posterUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metadata Grid (Rating, Release Date, Genre, Language) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 text-sm">
            <div>
              <span className="block text-gray-400 font-medium text-xs">RATING</span>
              <span className="font-bold text-amber-600 text-base">★ {rating}</span>
            </div>
            <div>
              <span className="block text-gray-400 font-medium text-xs">PREMIERED</span>
              <span className="font-semibold text-gray-800 text-sm">{releaseDate}</span>
            </div>
            <div>
              <span className="block text-gray-400 font-medium text-xs">GENRES</span>
              <span className="font-semibold text-gray-800 text-sm line-clamp-1">{genres}</span>
            </div>
            <div>
              <span className="block text-gray-400 font-medium text-xs">LANGUAGE</span>
              <span className="font-semibold text-gray-800 text-sm">{language}</span>
            </div>
          </div>

          {/* Overview / Summary Section */}
          <div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Overview</h4>
            {/* TVMaze API returns summary inside HTML tags, so we use dangerouslySetInnerHTML */}
            <div 
              className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-2"
              dangerouslySetInnerHTML={{ __html: summary }}
            ></div>
          </div>

        </div>

        {/* Footer with Close Button */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-900 hover:bg-red-600 text-white font-medium px-6 py-2.5 rounded-xl shadow-sm transition-all duration-200 text-sm"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default MovieDetailsModal;