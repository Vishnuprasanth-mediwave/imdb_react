import { useState } from "react";
import { IMovie } from "./types";
import { getMovie } from "../services/api";

interface IMovieCard {
  movie: IMovie;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  const [moviedata, setMoviedata] = useState();

  async function getMovieFromAPI(id: string) {
    try {
      const response = await getMovie(id);
      console.log(response);
      // setMoviedata(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }
  console.log(movie);
  return (
    <>
      <img src={movie.image} alt={movie.movie_name} />
      <h3>{movie.movie_name}</h3>
      <p>Year: {movie.release_year}</p>
      <p>Rating: {`${movie.rating}/5`}</p>
      <button onClick={() => getMovieFromAPI(movie.movie_id || "")}>
        view
      </button>
    </>
  );
};

export default MovieCard;
