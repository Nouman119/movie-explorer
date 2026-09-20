import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieListingPage from './pages/MovieListingPage';

// Main App component containing complete routing configuration
function App() {
  return (
    <Router>
      {/* Navbar remains fixed at the top for all pages */}
      <Navbar />

      {/* Main content container where different pages will render dynamically */}
      <main className="min-h-screen bg-slate-50 text-gray-900">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* Movie Listing & Search Page Route */}
          <Route path="/movies" element={<MovieListingPage />} />
        </Routes>
      </main>

      {/* Footer remains at the bottom for all pages */}
      <Footer />
    </Router>
  );
}

export default App;