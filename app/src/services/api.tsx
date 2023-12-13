import axios from "axios";
import { IMovie, IUserAdd, Ilogin } from "../components/types";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
  //   timeout: 1000,
});

const axiosInstancewithheader = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getMovies = () => {
  return axiosInstancewithheader.get("/movies");
};
export const getUser = () => {
  return axiosInstancewithheader.get("/u");
};
export const AddMovie = (payload: IMovie) => {
  return axiosInstancewithheader.post("/movie", payload);
};
export const getMovie = (movie_id: string) => {
  return axiosInstancewithheader.get(`/movies/${movie_id}`);
};
export const addUser = (payload: IUserAdd) => {
  return axiosInstance.post("/signup", payload);
};
export const loginUser = (payload: Ilogin) => {
  return axiosInstance.post("/login", payload);
};

// export const updateMovie = (payload: IMovieAdd, movieId: number) => {
//   return axiosInstance.put(`/movies/${movieId}`, payload);
// };

// export const deleteMovie = (movieId: number) => {
//   return axiosInstance.delete(`/movies/${movieId}`);
// };
