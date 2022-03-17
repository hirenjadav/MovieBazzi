import React from "react";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../services/userServices";
import "../css/singleMovieBody.css";

function SingleTVAsside(props) {
  const {
    poster_path,
    number_of_episodes,
    number_of_seasons,
    title,
    id,
    first_air_date,
    last_air_date,
    status,
  } = props.details;

  const imgURL = "https://image.tmdb.org/t/p/w500" + poster_path;
  const reviewRedirectLink = "/tvshows/" + id + "/review";

  const handleAddToWatchlist = async () => {
    try {
      const res = await addToWishlist("tv", id);
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

          <span className="title single-movie-general">Total Seasons</span>
          <div className="item">
            {" "}
            <span className="detail--chip">{number_of_seasons} </span>
          </div>

          <span className="title single-movie-general">Total Episodes</span>
          <div className="item">
            {" "}
            <span className="detail--chip">{number_of_episodes} </span>
          </div>

          <span className="title single-movie-general">
            First Episode Release Date
          </span>
          <div className="item">
            {" "}
            <span className="detail--chip">{first_air_date} </span>
          </div>

          {status === "Ended" && (
            <React.Fragment>
              <span className="title single-movie-general">
                Last Episode Release Date
              </span>
              <div className="item">
                {" "}
                <span className="detail--chip">{last_air_date} </span>
              </div>
            </React.Fragment>
          )}

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

          <span className="title single-movie-general">Created By</span>
          <div className="item">
            {props.details.created_by.map((c, i) => {
              return (
                <span key={i} className="detail--chip">
                  {c.name}{" "}
                </span>
              );
            })}
          </div>

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

export default SingleTVAsside;
