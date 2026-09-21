import React from 'react';
import { Link } from 'react-router-dom';

// Hero component featuring full screen view layout and custom background
const Hero = () => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
      
      {/* Custom Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Movie Hero Background" 
          className="w-full h-full object-cover "
        />
        {/* Gradient overlay for better contrast and text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          DISCOVER <span className="text-red-600">MOVIES</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
          Explore and discover your favorite movies from around the world.
        </p>

        {/* Call-to-Action Button */}
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