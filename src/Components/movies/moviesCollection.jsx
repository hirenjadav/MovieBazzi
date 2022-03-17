import React, { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import movieServices from "../../services/moviesServices";
// import { Link } from "react-router-dom";
import "../css/moviesCollection.css";
import SingleMovieCardHome from "../home/singleMovieCardHome";

function MoviesColllection(props) {
  const [movies, setMovies] = useState([]);

  const getMoviesList = async (isMounted) => {
    const { data } = await movieServices.getCollections(
      props.mediaType,
      props.type
    );
    const { results } = data;
    const temp = [...results];
    if (isMounted) {
      setMovies([...temp]);
    }
  };

  useEffect(() => {
    let isMounted = true;
    getMoviesList(isMounted);

    return () => {
      isMounted = false;
    };
  });

  return (
    <React.Fragment>
      <div class="column is-full movie-collection">
        <p class="has-text-weight-bold has-text-white is-size-3 is-family-sans-serif movie-collection-title">
          {props.type === "popular" &&
            props.mediaType === "movie" &&
            "Popular Movies"}
          {props.type === "top_rated" &&
            props.mediaType === "movie" &&
            "Top Rated Movies"}
          {props.type === "upcoming" &&
            props.mediaType === "movie" &&
            "Upcoming Movies"}
          {props.type === "popular" &&
            props.mediaType === "tv" &&
            "Popular TV Shows"}
          {props.type === "top_rated" &&
            props.mediaType === "tv" &&
            "Top Rated TV Shows"}
          {props.type === "upcoming" &&
            props.mediaType === "tv" &&
            "Upcoming TV Shows"}
        </p>
        <hr className="latest-movie-hr" />
      </div>
      {movies.map((m) => {
        return (
          <SingleMovieCardHome
            key={m.id}
            id={m.id}
            imgURL={m.poster_path}
            type={props.mediaType === "movie" ? "movies" : "tvshows"}
          />
        );
      })}
    </React.Fragment>
  );
}

// function MoviesColllection(props) {
//   const [movies, setMovies] = useState([]);

//   const getMoviesList = async (isMounted) => {
//     const reqURL =
//       "https://api.themoviedb.org/3/" +
//       props.mediaType +
//       "/" +
//       props.type +
//       "?api_key=0914f7c5f3e5e546aaa005b128fda302&language=en-US&page=1";

//     const { data } = await axios.get(reqURL);
//     const { results } = data;
//     const temp = [...results];
//     if (isMounted) {
//       setMovies([...temp]);
//     }
//   };

//   useEffect(() => {
//     let isMounted = true;
//     getMoviesList(isMounted);

//     return () => {
//       isMounted = false;
//     };
//   });

//   // console.log("movies", movies);

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1014 },
//       items: 6,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1014, min: 768 },
//       items: 4,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 767, min: 464 },
//       items: 3,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//   };

//   return (
//     <React.Fragment>
//       <div class="column is-full movie-collection">
//         <p class="has-text-weight-bold has-text-white is-size-3 is-family-sans-serif movie-collection-title">
//           {props.type === "popular" &&
//             props.mediaType === "movie" &&
//             "Popular Movies"}
//           {props.type === "top_rated" &&
//             props.mediaType === "movie" &&
//             "Top Rated Movies"}
//           {props.type === "upcoming" &&
//             props.mediaType === "movie" &&
//             "Upcoming Movies"}
//           {props.type === "popular" &&
//             props.mediaType === "tv" &&
//             "Popular TV Shows"}
//           {props.type === "top_rated" &&
//             props.mediaType === "tv" &&
//             "Top Rated TV Shows"}
//           {props.type === "upcoming" &&
//             props.mediaType === "tv" &&
//             "Upcoming TV Shows"}
//         </p>
//         <hr className="latest-movie-hr" />
//       </div>
//       <Carousel
//         responsive={responsive}
//         autoPlay={true}
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         infinite={true}
//         partialVisible={false}
//       >
//         {movies.slice(0, 5).map((m, i) => {
//           const imgURL = "https://image.tmdb.org/t/p/w300" + m.poster_path;
//           const singlePageRedirect =
//             "/" +
//             (props.mediaType === "movie" ? "movies" : "tvshows") +
//             "/" +
//             m.id;

//           return (
//             <Link key={i} to={singlePageRedirect}>
//               <img className="movie-img" src={imgURL} alt={m.id} />
//             </Link>
//           );
//         })}
//       </Carousel>
//     </React.Fragment>
//   );
// }

export default MoviesColllection;
