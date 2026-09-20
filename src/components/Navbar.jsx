import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Search, Bell } from 'lucide-react';

// Navbar component reflecting a modern streaming platform style under the light theme context
const Navbar = () => {
  const location = useLocation();

  // Helper function to check active route styling
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/30 group-hover:scale-105 transition-transform">
            <Film className="w-6 h-6" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Movie<span className="text-red-600">Explorer</span>
          </span>
        </Link>

        {/* Center Navigation Links (Floating Pill Style) */}
        <nav className="hidden md:flex items-center bg-gray-100/80 p-1.5 rounded-2xl border border-gray-200/60 space-x-1">
          <Link
            to="/"
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isActive('/') 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isActive('/movies') 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            Movies & Shows
          </Link>
        </nav>

        {/* Right Action Icons (Search & Notifications) */}
        <div className="flex items-center gap-3">
          <Link
            to="/movies"
            aria-label="Search movies"
            className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
          >
            <Search className="w-5 h-5" />
          </Link>
          <button
            aria-label="Notifications"
            className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
          >
            <Bell className="w-5 h-5" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;