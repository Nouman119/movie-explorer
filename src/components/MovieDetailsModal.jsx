import React from 'react';
import { X, Star, Calendar, Film, Globe } from 'lucide-react';

// MovieDetailsModal component displaying comprehensive movie information with clean syntax
const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  // Safely extract movie details with fallback values
  const rating = movie.rating?.average || 'N/A';
  const premiered = movie.premiered || 'N/A';
  const genres = movie.genres ? movie.genres.join(', ') : 'N/A';
  const language = movie.language || 'N/A';
  const posterImage = movie.image?.original || movie.image?.medium || 'https://via.placeholder.com/600x400?text=No+Image';
  const summaryText = movie.summary ? movie.summary.replace(/<[^>]*>?/gm, '') : 'No overview available.';

  // Handler to close modal when clicking the outer backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
    >
      
      {/* Modal Container Box */}
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative border border-gray-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-black flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-5 h-5 text-[#000000]" />
        </button>

        {/* Poster Image Section using object-contain */}
        <div className="relative h-64 sm:h-72 w-full bg-black overflow-hidden flex items-center justify-center flex-shrink-0">
          <img 
            src={posterImage} 
            alt={movie.name} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          
          {/* Movie Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            {movie.name}
          </h2>

          {/* Metadata Grid with Pure Black Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200/60 text-xs sm:text-sm">
            
            {/* Rating */}
            <div className="flex items-start gap-2.5">
              <Star className="w-4 h-4 text-[#000000] fill-[#000000] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-gray-500 font-semibold uppercase text-[10px] tracking-wider">Rating</p>
                <p className="font-bold text-gray-900 mt-0.5">{rating}</p>
              </div>
            </div>

            {/* Premiered */}
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-[#000000] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-gray-500 font-semibold uppercase text-[10px] tracking-wider">Premiered</p>
                <p className="font-bold text-gray-900 mt-0.5">{premiered}</p>
              </div>
            </div>

            {/* Genres */}
            <div className="flex items-start gap-2.5">
              <Film className="w-4 h-4 text-[#000000] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-gray-500 font-semibold uppercase text-[10px] tracking-wider">Genres</p>
                <p className="font-bold text-gray-900 mt-0.5 truncate" title={genres}>{genres}</p>
              </div>
            </div>

            {/* Language */}
            <div className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-[#000000] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-gray-500 font-semibold uppercase text-[10px] tracking-wider">Language</p>
                <p className="font-bold text-gray-900 mt-0.5 truncate" title={language}>{language}</p>
              </div>
            </div>

          </div>

          {/* Overview Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Overview</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {summaryText}
            </p>
          </div>

          {/* Action Footer */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;