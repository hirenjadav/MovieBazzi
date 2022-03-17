import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import SingleMovieCardHome from "./singleMovieCardHome";
import "../css/latestmovie.css";
import movieServices from "../../services/moviesServices";

function UpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getUpcoming = async () => {
    const { data } = await movieServices.getUpcomingMovies();
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
