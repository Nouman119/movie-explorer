import React from 'react';
import { X, Star, Calendar, Film, Globe } from 'lucide-react';

// MovieDetailsModal component with a perfectly fitted poster image without cropping
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
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Properly Fitted Image Section using object-contain */}
        <div className="relative h-64 sm:h-72 w-full bg-black overflow-hidden flex items-center justify-center shrink-0">
          <img 
            src={posterImage} 
            alt={movie.name} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 space-y-4 overflow-y-auto">
          
          {/* Movie Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            {movie.name}
          </h2>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200/60 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
              <div>
                <p className="text-gray-400 font-medium uppercase text-[10px]">Rating</p>
                <p className="font-bold text-gray-800">{rating}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-500 shrink-0" />
              <div>
                <p className="text-gray-400 font-medium uppercase text-[10px]">Premiered</p>
                <p className="font-bold text-gray-800">{premiered}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-blue-500 shrink-0" />
              <div>
                <p className="text-gray-400 font-medium uppercase text-[10px]">Genres</p>
                <p className="font-bold text-gray-800 truncate" title={genres}>{genres}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <p className="text-gray-400 font-medium uppercase text-[10px]">Language</p>
                <p className="font-bold text-gray-800">{language}</p>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Overview</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
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