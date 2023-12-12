import { IMovie } from "./types";

interface IMovieCard {
  movie: IMovie;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <img src={movie.image} alt={movie.movie_name} />
      <h3>{movie.movie_name}</h3>
      <p>Year: {movie.release_year}</p>
      {/* <p>Rating: {movie.rating}</p> */}
    </>
  );
};

export default MovieCard;
