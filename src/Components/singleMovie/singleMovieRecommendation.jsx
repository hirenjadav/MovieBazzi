import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/singleMovieBody.css";
import { Link } from "react-router-dom";

function SingleMovieRecommendation(props) {
  const [recommMovies, setRecommMovies] = useState([]);

  const getRecommendedMovies = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        props.movieID +
        "/recommendations?api_key=0914f7c5f3e5e546aaa005b128fda302&language=en-US&page=1"
    );
    const { results } = data;
    const rMovies = [...results];
    setRecommMovies(rMovies);
  };

  useEffect(() => {
    getRecommendedMovies();
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
      >
        {recommMovies.slice(0, 10).map((movie) => {
          const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
          const redirectSingleMovieURL = "/movies/" + movie.id;
          return (
            <div className="recom-slider" key={movie.id}>
              <Link to={redirectSingleMovieURL}>
                <img
                  className="recomendations-slider-img"
                  src={imgURL}
                  alt="movie"
                />
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SingleMovieRecommendation;
