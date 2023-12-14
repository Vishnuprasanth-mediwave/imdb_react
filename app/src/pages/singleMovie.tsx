import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/api";

const SingleMovie = () => {
  const [moviedata, setMoviedata] = useState({
    movie_id: "",
    movie_name: "",
    image: "",
    movie_desc: "",
    addedBy: "",
    release_year: 0,
    overallRating: 0,
    ratings: [{ rating: 0, ratedBy: "" }],
  });
  const { id } = useParams();
  useEffect(() => {
    getMovieFromAPI(id);
  }, [id]);
  async function getMovieFromAPI(id: string | undefined) {
    try {
      const response = await getMovie(id || "");
      setMoviedata(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <div className="big-card">
        <div className="flex"></div>
        <img src={moviedata.image} alt={moviedata.movie_name} />
        <h3>{moviedata.movie_name}</h3>
        <p>Year: {moviedata.release_year}</p>
        <p>Rating: {`${moviedata.overallRating}/5`}</p>
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
  );
};

export default SingleMovie;
