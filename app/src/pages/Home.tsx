import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/api";
import { IMovie } from "../components/types";
import PaginationComponent from "../components/pagination";

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    getMoviesFromAPI();
  }, [page]);
  useEffect(() => {
    getMoviesFromAPI();
  }, [search]);
  async function getMoviesFromAPI() {
    try {
      const response = await getMovies(page, search);
      setMovies(response.data.movies);
      setCount(response.data.totalMovies - 4);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
  function sendPage(currentpage: number) {
    setPage(currentpage);
    console.log(currentpage);
  }
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  return (
    <Layout title="MyIMDb">
      <div className="searchbar">
        <input
          className="nav-inp"
          type="text"
          placeholder="search"
          onChange={handleSearch}
        />
      </div>
      <div className="gridBox">
        {movies.map((m) => (
          <div className="movie-card-div" key={m.movie_id}>
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
      <div>
        <PaginationComponent count={count} sendPage={sendPage} />
      </div>
    </Layout>
  );
};

export default Home;
