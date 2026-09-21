import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListVideo, Search, Bell, Menu, X } from 'lucide-react';

// Navbar component with full responsive design including mobile hamburger menu toggle
const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if current route is either home page or movies listing page
  const isHomeOrMoviesPage = location.pathname === '/' || location.pathname === '/movies';

  // Helper function to check active route styling
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-200">
            <ListVideo className="w-6 h-6" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Movie<span className="text-red-600">Explorer</span>
          </span>
        </Link>

        {/* Center Navigation Links for Desktop (Pill Style) */}
        <nav className="hidden md:flex items-center bg-gray-100 p-1.5 rounded-2xl border border-gray-200 space-x-1">
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

        {/* Right Action Icons & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {!isHomeOrMoviesPage && (
            <div className="hidden sm:flex items-center gap-3">
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
          )}

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive('/') ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive('/movies') ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Movies & Shows
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;