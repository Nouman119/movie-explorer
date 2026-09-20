import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl font-black text-red-600 tracking-wider">
          MovieExplorer
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base font-semibold">
          <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link to="/movies" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl shadow-sm transition-all">
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;