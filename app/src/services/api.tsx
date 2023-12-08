import axios from "axios";
import { IUserAdd, Ilogin } from "../components/types";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
  //   timeout: 1000,
});

// export const getMovies = () => {
//   return axiosInstance.get("/movies");
// };

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
