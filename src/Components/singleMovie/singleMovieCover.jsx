import React from "react";

function SingleMovieCover(props) {
  const imgURL = "https://image.tmdb.org/t/p/w780" + props.imgURL;
  return (
    <div
      class="movie-cover"
      style={{
        backgroundImage: `url("${imgURL}")`,
      }}
    ></div>
  );
}

export default SingleMovieCover;
