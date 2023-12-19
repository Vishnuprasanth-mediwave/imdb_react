import axios from "axios";
import { IMovie, IRating, IUserAdd, Ilogin } from "../components/types";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/",
  //   timeout: 1000,
});
const setHeaders = () => {
  const token = localStorage.getItem("token");
  let headers = {};
  if (token) {
    headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return headers;
};
// const axiosInstancewithheader = axios.create({
//   baseURL: "http://localhost:5001",
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });

export const getMovies = () => {
  return axiosInstance.get("/movies");
};
export const getUser = () => {
  return axiosInstance.get("/u", setHeaders());
};
export const AddMovie = (payload: IMovie) => {
  return axiosInstance.post("/movie", payload, setHeaders());
};
export const addRating = (id: string, payload: IRating) => {
  return axiosInstance.post(`/movie/rating/${id}`, payload, setHeaders());
};
export const getMovie = (movie_id: string) => {
  return axiosInstance.get(`/movies/${movie_id}`, setHeaders());
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
