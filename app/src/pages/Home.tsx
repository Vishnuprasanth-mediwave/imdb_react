import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/api";
import { IMovie } from "../components/types";

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

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
    </Layout>
  );
};

export default Home;
