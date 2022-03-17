import React from "react";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../services/userServices";
import "../css/singleMovieBody.css";

function SingleMoivieAsside(props) {
  const { poster_path, runtime, release_date, title, id } = props.details;

  const imgURL = "https://image.tmdb.org/t/p/w500" + poster_path;
  const reviewRedirectLink = "/movies/" + id + "/review";

  const handleAddToWatchlist = async () => {
    try {
      const res = await addToWishlist("movie", id);
      console.log("RESPONSE RECEIVED: ", res.data);
      if (res.status === 200) {
        alert("Added to Watch List");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data);
      }
      console.log("AXIOS ERROR: ", err.response.data);
    }
  };

  return (
    <div className="body-detail3 asside">
      <div className="asside">
        <figure className="show-img fig">
          <img
            data-v-49816e12=""
            src={imgURL}
            alt={title}
            className="poster-image"
          />
        </figure>
        <div className="detail">
          <span className="title single-movie-general">Genres</span>
          <div className="item">
            {props.details.genres.map((genre, i) => {
              return (
                <span key={i} className="detail--chip">
                  {genre.name}{" "}
                </span>
              );
            })}
          </div>
          <span className="title single-movie-general">Runtime</span>
          <span className="item"> {runtime} minutes </span>
          <span className="title single-movie-general">Language</span>
          <div className="item">
            {props.details.spoken_languages.map((lang, i) => {
              return (
                <span key={i} className="detail--chip">
                  {lang.name}{" "}
                </span>
              );
            })}
          </div>
          <span className="title single-movie-general">Release Date</span>
          <span className="item">{release_date}</span>
          <span className="title single-movie-general">
            <Link to={reviewRedirectLink}>
              <button type="button" class="btn btn-warning">
                Review
              </button>
            </Link>
          </span>
          <span className="title single-movie-general">
            <button
              onClick={handleAddToWatchlist}
              type="button"
              class="btn btn-warning"
            >
              Add to Watchlist
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleMoivieAsside;
