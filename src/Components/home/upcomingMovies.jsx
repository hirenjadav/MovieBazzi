import React, { useEffect, useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import SingleMovieCardHome from "./singleMovieCardHome";
import "../css/latestmovie.css";

function UpcomingMovies(props) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getUpcoming = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=0914f7c5f3e5e546aaa005b128fda302&language=en-US&page=1"
    );
    const { results } = data;
    const upMovies = [...results];
    setUpcomingMovies(upMovies);
  };

  useEffect(() => {
    getUpcoming();
  });

  return (
    <React.Fragment>
      <div class="column is-full movie-category">
        <p class="has-text-weight-bold has-text-white is-size-3 is-family-sans-serif">
          Upcoming Movies
        </p>
        <hr className="latest-movie-hr" />
      </div>
      {upcomingMovies.slice(0, 5).map((movie) => {
        return (
          <SingleMovieCardHome
            key={movie.id}
            id={movie.id}
            imgURL={movie.poster_path}
            type="movies"
          />
        );
      })}
    </React.Fragment>
  );
}

export default UpcomingMovies;
