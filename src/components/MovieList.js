import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.posterURL} alt={movie.title} />
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;


