import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';

// Dummy movie object for testing MovieCard component
const dummyMovie = {
  id: 1,
  name: "Sample Movie Explorer",
  rating: { average: 8.5 },
  premiered: "2026-03-25",
  image: { medium: "https://static.tvmaze.com/uploads/images/medium_portrait/81/203262.jpg" },
  summary: "<p>This is a sample movie description for testing purposes.</p>"
};

function App() {
  const handleOpenDetails = (movie) => {
    alert(`Clicked details for: ${movie.name}`);
  };

  return (
    <Router>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Testing Movie Card Component</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <MovieCard movie={dummyMovie} onOpenDetails={handleOpenDetails} />
        </div>
      </main>
      <Footer />
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Main App component containing routes and layout structure
function App() {
  return (
    <Router>
      {/* Navbar will stay fixed or visible on top of all pages */}
      <Navbar />
      <Hero />
>>>>>>> ed1ad001c24cfab71508c0c925528c1d1deafe04
    </Router>
  );
}

export default App;