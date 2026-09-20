import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

// HomePage component representing the landing view of the application
const HomePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Banner Section */}
      <Hero />

      {/* Additional Features / Quick Highlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-red-600 font-semibold text-sm tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Unlimited Entertainment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Ready to explore thousands of movies & shows?
            </h2>
            <p className="text-gray-600 text-base">
              Use our advanced search to instantly find your favorite TV shows, check ratings, release dates, and comprehensive summaries powered by TVMaze API.
            </p>
          </div>
          <div>
            <Link
              to="/movies"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Browse All Movies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;