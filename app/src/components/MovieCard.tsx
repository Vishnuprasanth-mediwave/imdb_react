import { useState } from "react";
import { IMovie, IMoviedata } from "./types";
import { getMovie } from "../services/api";
import { Link } from "react-router-dom";

interface IMovieCard {
  movie: IMovie;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  return (
    <>
      <div className="movie-card">
        <img src={movie.image} alt={movie.movie_name} />
        <h3>{movie.movie_name}</h3>
        <p>Year: {movie.release_year}</p>
        <p>Rating: {`${movie.rating}/5`}</p>
        <Link to={`/movies/${movie.movie_id}`}>
          <button>view</button>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
