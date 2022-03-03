import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/singleMovieBody.css";
import SingleMovieRecommendation from "./singleMovieRecommendation";
import SingleMovieWatchNow from "./singleMovieWatchNow";
import SingleMovieTrailer from "./singleMovieTrailer";

function SingleMovieGeneral(props) {
  const [cast, setCast] = useState([]);

  const getCastDetails = async (id) => {
    const castURL =
      "https://api.themoviedb.org/3/movie/" +
      id +
      "/credits?api_key=0914f7c5f3e5e546aaa005b128fda302&language=en-US";
    const { data } = await axios.get(castURL);
    const { cast } = data;
    setCast([...cast]);
  };

  useEffect(() => {
    getCastDetails(props.details.id);
  });

  return (
    <div className="body-detail3 general">
      <div className="container div">
        <h2 className="single-movie-general single-movie-h2">
          {props.details.title}{" "}
          <span> ({props.details.release_date.substring(0, 4)}) </span>
        </h2>

        <h3 className="single-movie-general single-movie-h3">Cast</h3>
        {cast.slice(0, 3).map((c, i) => {
          return (
            <p
              key={i}
              className="single-movie-general description single-movie-p"
            >
              {c.name} {i < 2 && "   ,  "}
            </p>
          );
        })}

        <h3 className="single-movie-general subtitle  single-movie-h3">
          Overview
        </h3>
        <p className="single-movie-general description single-movie-p">
          {props.details.overview}
        </p>

        <h3 className="single-movie-general subtitle  single-movie-h3">
          Watch On
        </h3>
        <SingleMovieWatchNow movieID={props.details.id} />

        <h3 className="single-movie-general subtitle  single-movie-h3 recomendation-title">
          Recommendations
        </h3>
        <SingleMovieRecommendation movieID={props.details.id} />

        <h3 className="single-movie-general subtitle  single-movie-h3 recomendation-title">
          Trailer
        </h3>
        <SingleMovieTrailer movieID={props.details.id} />
      </div>
    </div>
  );
}

export default SingleMovieGeneral;
