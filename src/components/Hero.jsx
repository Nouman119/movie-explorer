import React from 'react';
import { Link } from 'react-router-dom';

// Hero component designed with a clean, modern light theme for the Home page
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-100 text-gray-900 py-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[75vh]">
      
      {/* Decorative background blur shapes for modern aesthetics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl text-center">
        
        {/* Badge or mini tag */}
        <span className="inline-block bg-red-50 text-red-600 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-red-200 shadow-sm">
          🎬 Discover Your Next Favorite Show
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
          Explore and Discover <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">
            World-Class Movies
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Dive into an extensive collection of movies and TV shows from around the globe. Fast, intuitive, and designed for true cinema lovers.
        </p>

        {/* Call to Action (CTA) Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/movies"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Movies Now
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;