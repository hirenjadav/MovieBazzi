import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "../css/singleMovieBody.css";

function SingleMovieTrailer(props) {
  const [trailers, setTrailers] = useState([]);

  const getTrailers = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        props.movieID +
        "/videos?api_key=0914f7c5f3e5e546aaa005b128fda302&language=en-US"
    );
    const { results } = data;
    const t = [...results];
    setTrailers(t);
  };

  useEffect(() => {
    getTrailers();
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
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
        {trailers.slice(0, 5).map((movie, i) => {
          const ytLink = "https://www.youtube.com/embed?v=" + movie.key;
          return (
            <div className="recom-slider" key={i}>
              {i < 2 && (
                <iframe
                  className="recomendations-slider-img"
                  width="250"
                  height="200"
                  src={ytLink}
                  title={movie.name}
                ></iframe>
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SingleMovieTrailer;
