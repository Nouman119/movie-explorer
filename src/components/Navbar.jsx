import React from 'react';
import { Link } from 'react-router-dom';

// Modern Navbar component with glassmorphism effect and smooth hover transitions
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with modern glow/accent */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl sm:text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600 hover:opacity-90 transition-opacity"
            >
              MovieExplorer
            </Link>
          </div>

          {/* Navigation Links with modern pill-shape hover effects */}
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              to="/movies" 
              className="px-4 py-2 rounded-full text-sm font-medium bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all duration-200"
            >
              Movies
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;