import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import SingleMovieCardHome from "./singleMovieCardHome";
import "../css/latestmovie.css";
import movieServices from "../../services/moviesServices";

function TrendingMovies(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getTrendingMovies = async () => {
    const { data } = await movieServices.getTrendingMovies();
    const { results } = data;
    const trMovies = [...results];

    setTrendingMovies(trMovies);
  };

  useEffect(() => {
    getTrendingMovies();
  });

  return (
    <React.Fragment>
      <div class="column is-full movie-category">
        <p class="has-text-weight-bold has-text-white is-size-3 is-family-sans-serif">
          Trending Movies
        </p>
        <hr className="latest-movie-hr" />
      </div>
      {trendingMovies.slice(0, 10).map((movie) => {
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

export default TrendingMovies;
