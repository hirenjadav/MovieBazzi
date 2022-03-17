import React from "react";
import "bulma/css/bulma.css";
import Header from "../common/Header";
import SearchBarWithPhoto from "../common/searchbarwithphoto";
import Footer from "../common/Footer";
import MoviesColllection from "../movies/moviesCollection";

function TVShows(props) {
  return (
    <React.Fragment>
      <Header user={props.user} />
      <SearchBarWithPhoto />
      <div class="container movie-collection-container">
        <div class="columns is-multiline p-0 pb-3 pt-5 last">
          <MoviesColllection type="popular" mediaType="tv" />
          <MoviesColllection type="top_rated" mediaType="tv" />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default TVShows;
