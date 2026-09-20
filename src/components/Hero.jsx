import React from 'react';
import { Link } from 'react-router-dom';

// Hero component representing the main landing banner with a movie-themed background
const Hero = () => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-32">
      
      {/* Background Image with Gradient Overlay for Light/Dark Theme Balance */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop" 
          alt="Movie Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-950"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-red-600/20 text-red-400 border border-red-500/30 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
          The Ultimate Streaming Experience
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          DISCOVER <span className="text-red-500">MOVIES</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
          Explore and discover your favorite movies and TV shows from around the world. Streamline your entertainment with instant search and detailed insights.
        </p>

        {/* Call to Action Button */}
        <div>
          <Link
            to="/movies"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-1 text-base"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;