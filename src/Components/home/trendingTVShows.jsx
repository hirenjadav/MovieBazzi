// import React, { Component } from "react";
// import axios from "axios";
// import "bulma/css/bulma.css";
// import SingleMovieCardHome from "./singleMovieCardHome";
// import "../css/latestmovie.css";

// class TrendingTVShows extends Component {
//   state = {
//     trendingTVShows: [],
//   };

//   async getTrendingTVShows() {
//     const { data } = await axios.get(
//       "https://api.themoviedb.org/3/trending/tv/week?api_key=0914f7c5f3e5e546aaa005b128fda302"
//     );
//     const { results } = data;
//     const upMovies = [...results];
//     this.setState({ trendingTVShows: upMovies });
//   }

//   componentDidMount() {
//     this.getTrendingTVShows();
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div class="column is-full movie-category">
//           <p class="has-text-weight-bold has-text-white is-size-3 is-family-sans-serif">
//             Trending TV Shows
//           </p>
//           <hr className="latest-movie-hr" />
//         </div>
//         {this.state.trendingTVShows.slice(0, 10).map((movie) => {
//           return (
//             <SingleMovieCardHome
//               key={movie.id}
//               id={movie.id}
//               imgURL={movie.poster_path}
//               type="tvshows"
//             />
//           );
//         })}
//       </React.Fragment>
//     );
//   }
// }

// export default TrendingTVShows;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import SingleMovieCardHome from "./singleMovieCardHome";
import "../css/latestmovie.css";

function TrendingTVShows(props) {
  const [trendingTVShows, setTrendingTVShows] = useState([]);

  const getTrendingTVShows = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=0914f7c5f3e5e546aaa005b128fda302"
    );
    const { results } = data;
    const tvMovies = [...results];
    setTrendingTVShows(tvMovies);
  };

  useEffect(() => {
    getTrendingTVShows();
  });

  return (
    <React.Fragment>
      <div class="column is-full movie-category">
        <p class="has-text-weight-bold has-text-white is-size-3 is-family-sans-serif">
          Trending TV Shows
        </p>
        <hr className="latest-movie-hr" />
      </div>
      {trendingTVShows.slice(0, 10).map((movie) => {
        return (
          <SingleMovieCardHome
            key={movie.id}
            id={movie.id}
            imgURL={movie.poster_path}
            type="tvshows"
          />
        );
      })}
    </React.Fragment>
  );
}

export default TrendingTVShows;
