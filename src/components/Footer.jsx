import React from 'react';
import { Link } from 'react-router-dom';

// Footer component with brand info, quick links, and copyright text
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <Link to="/" className="text-xl font-bold text-gray-900 tracking-wide hover:text-red-600 transition-colors">
            MovieExplorer
          </Link>
          <p className="text-sm text-gray-500 mt-1">
            Your ultimate destination to explore movies and TV shows.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link to="/movies" className="hover:text-red-600 transition-colors">
            Movies
          </Link>
        </div>

        {/* Copyright Information */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>© 2026 MovieExplorer. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;