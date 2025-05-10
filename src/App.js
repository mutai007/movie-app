// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0', // Example trailer link
      posterURL: 'https://image.tmdb.org/t/p/w500/8fYcT7XQkmrk8lTH2Yz22t05CqS.jpg',
      rating: 9.0,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'The Dark Knight rises to defeat Joker.',
      trailer: 'https://www.youtube.com/embed/qJr92jbdUGO', // Example trailer link
      posterURL: 'https://image.tmdb.org/t/p/w500/qJr92jbdUGO0gMkjwErDr6cPOqh.jpg',
      rating: 9.1,
    },
  ]);
 
  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
     </Router>
  );
};

 export default App;
     