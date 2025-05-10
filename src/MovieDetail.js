// src/MovieDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
