# Movie Explorer Application

A responsive Movie Explorer web application built with React, React Router, and Tailwind CSS. It allows users to browse through a vast collection of movies and TV shows, search for specific titles dynamically, and view in-depth details using an interactive modal powered by the TVMaze API.

## 🚀 Live Demo & Repository
- **GitHub Repository:** 
- **Live Deployment Link:** https://movie-explorer-peach-ten.vercel.app/

---

## 🛠️ Technology Stack
- **Core:** JavaScript (ES6+), React 18+
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **API:** TVMaze API 

---

## ✨ Features & Requirements Implemented

### 1. Home Page
- **Navbar:** Features brand identity (`MovieExplorer`), active routing links, and a clean responsive pill-style navigation.
- **Hero Section:** Full-screen immersive banner featuring a custom high-quality background image with a dark gradient overlay, engaging title, description, and an "Explore Now" Call-To-Action (CTA) button linked directly to the movies listing page.
- **Footer:** Clean copyright notice and application details.

### 2. Movie Listing Page
- **Dynamic Search Bar:** Allows users to search movies and TV shows instantly by title. The grid dynamically filters and updates based on the user's query.
- **Responsive Movie Cards:** Displays movies using reusable card components showcasing:
  - Movie poster image
  - Movie title/name
  - Release year/premiered date
  - Ratings with star icons
  - A dedicated "See Details" button
- **Layout:** Fully responsive CSS grid layout adapting seamlessly across mobile, tablet, and desktop viewports.

### 3. Movie Details Modal
- **Interactive Popup:** Triggered by clicking the "See Details" button on any movie card.
- **Comprehensive Metadata:** Displays high-resolution poster images fitted cleanly, movie title, average rating, premiere date, genres, language, and overview summary.
- **User Experience (UX):** Easily closable via a prominent close button (`X`) or by clicking outside the modal on the dark backdrop overlay.

---
