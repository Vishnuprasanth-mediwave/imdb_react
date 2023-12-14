import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/api";
import { IMovie, IMoviedata } from "../components/types";

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [movie, setMovie] = useState({
    image: "",
    movie_name: "",
    release_year: "",
    rating: 0,
  });
  const [card, setCard] = useState(false);
  const [moviedata, setMoviedata] = useState({
    addedBy: "",
    movieName: "",
    overallRating: 0,
    ratings: [{ rating: 0, ratedBy: "" }],
  });
  useEffect(() => {
    async function getMoviesFromAPI() {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
    getMoviesFromAPI();
  }, []);

  return (
    <Layout title="MyIMDb">
      <div className="gridBox">
        {movies.map((m) => (
          <div className="movie-card-div" key={m.movie_id}>
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
      {card && (
        <>
          <div className="big-card">
            <div className="delete">
              <button onClick={() => setCard(false)}>❌</button>
            </div>
            <div className="flex"></div>
            <img src={movie.image} alt={movie.movie_name} />
            <h3>{movie.movie_name}</h3>
            <p>Year: {movie.release_year}</p>
            <p>Rating: {`${movie.rating}/5`}</p>
            <p>Addedby: {moviedata.addedBy}</p>
            <h4>Ratings</h4>
            {moviedata?.ratings.map((r, i) => (
              <div className="ratings" key={i}>
                <p>
                  rating={r.rating}
                  <br />
                  ratedby:{r.ratedBy}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Home;
