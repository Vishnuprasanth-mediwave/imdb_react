import { useState } from "react";
import { IMovie } from "../components/types";
import Layout from "../components/Layout";
import { AddMovie } from "../services/api";
import { useNavigate } from "react-router-dom";

const MovieForm = () => {
  const navigate = useNavigate();
  const [moviedata, setMoviedata] = useState<IMovie>({
    movie_name: "",
    file: "",
    movie_desc: "",
    release_year: 0,
  });

  const [error, setError] = useState<string>("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMoviedata({ ...moviedata, [name]: value });
  }
  const handlefile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("picture: ", moviedata);
    if (e.target.files) {
      setMoviedata({
        ...moviedata,
        file: e.target.files[0],
      });
    }
  };
  function handletextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setMoviedata({ ...moviedata, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddMovie(moviedata);
  }
  const handleAddMovie = async (movie: IMovie) => {
    try {
      const formData = new FormData();
      formData.append("movie_name", movie.movie_name);
      formData.append("release_year", movie.release_year.toString());
      formData.append("movie_desc", movie.movie_desc);
      formData.append("file", movie.file as File);

      const response = await AddMovie(formData);
      console.log(response);
      setError("");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setError(
        error.message || error.response?.data?.message || "An error occurred"
      );
    }
  };
  return (
    <>
      <Layout title="movieForm">
        <h1>MovieForm</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="movie_name">MovieName</label>

          <input
            type="text"
            id="movie_name"
            name="movie_name"
            placeholder="movieName"
            value={moviedata.movie_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="release_year">year</label>

          <input
            type="number"
            id="release_year"
            name="release_year"
            placeholder="year"
            value={moviedata.release_year}
            onChange={handleChange}
          />
          <label htmlFor="movie_desc">Movie_desc</label>

          <textarea
            id="movie_desc"
            name="movie_desc"
            placeholder="Movie_desc"
            value={moviedata.movie_desc}
            onChange={handletextArea}
            required
          />

          <label htmlFor="url">ImageUrl</label>

          <input
            type="file"
            id="url"
            name="file"
            placeholder="ImageUrl"
            onChange={handlefile}
            required
          />
          <h3 style={{ color: "red", textAlign: "center" }}>{error}</h3>
          <button type="submit">Submit</button>
        </form>
      </Layout>
    </>
  );
};
export default MovieForm;
