import React from "react";
import "bulma/css/bulma.css";
import Header from "../common/Header";
import SearchBarWithPhoto from "../common/searchbarwithphoto";
import Footer from "../common/Footer";
import MoviesColllection from "./moviesCollection";

function Movies(props) {
  return (
    <React.Fragment>
      <Header />
      <SearchBarWithPhoto />
      <div class="container movie-collection-container">
        <div class="columns is-multiline p-0 pb-3 pt-5 last">
          <MoviesColllection type="upcoming" mediaType="movie" />
          <MoviesColllection type="popular" mediaType="movie" />
          <MoviesColllection type="top_rated" mediaType="movie" />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Movies;
