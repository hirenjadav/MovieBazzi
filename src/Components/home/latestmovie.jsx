import React from "react";
import "bulma/css/bulma.css";
import "../css/style.css";
import UpcomingMovies from "./upcomingMovies";
import TrendingMovies from "./trendingMovies";
import TrendingTVShows from "./trendingTVShows";

function LatestMovie(props) {
  return (
    <div class="container latest-movie">
      <div class="columns is-multiline p-0 pb-3 last">
        <UpcomingMovies />
        <TrendingMovies />
        <TrendingTVShows />
      </div>
    </div>
  );
}

export default LatestMovie;
