import React, { useEffect, useState } from "react";
import SingleMovieCover from "./singleMovieCover";
import SingleMoivieAsside from "./singleMovieAsside";
import SingleMovieGeneral from "./singleMovieGeneral";
import "bootstrap/dist/css/bootstrap.css";
import "../css/singleMovieBody.css";
import movieServices from "../../services/moviesServices";
import dummyData from "./tempMovieDetail.json";

function SingleMovieBody(props) {
  const [movieDetails, setMovieDetails] = useState(dummyData);

  const getMovieDetails = async () => {
    const { data } = await movieServices.getMoviesDetails(
      "movie",
      props.movieID
    );
    const t = { ...data };
    setMovieDetails({ ...t });
  };

  useEffect(() => {
    getMovieDetails();
  });

  return (
    <React.Fragment>
      <SingleMovieCover imgURL={movieDetails.backdrop_path} />
      <div className="container movie-detail">
        <div className="body-detail">
          <div className="body-detail2">
            <SingleMoivieAsside details={movieDetails} />
            <SingleMovieGeneral details={movieDetails} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleMovieBody;
