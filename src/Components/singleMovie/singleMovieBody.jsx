import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleMovieCover from "./singleMovieCover";
import SingleMoivieAsside from "./singleMovieAsside";
import SingleMovieGeneral from "./singleMovieGeneral";
import "bootstrap/dist/css/bootstrap.css";
import "../css/singleMovieBody.css";
import dummyData from "./tempMovieDetail.json";

function SingleMovieBody(props) {
  const [movieDetails, setMovieDetails] = useState(dummyData);

  const getMovieDetails = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        props.movieID +
        "?api_key=0914f7c5f3e5e546aaa005b128fda302"
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
