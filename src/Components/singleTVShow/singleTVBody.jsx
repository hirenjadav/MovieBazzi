import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../css/singleMovieBody.css";
import dummyData from "./tempTVDetail.json";
import SingleTVCover from "./singleTVCover";
import SingleTVAsside from "./singleTVAsside";
import SingleTVGeneral from "./singleTVGeneral";

function SingleTVBody(props) {
  const [tvDetails, setTVDetails] = useState(dummyData);

  const getTVDetails = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/tv/" +
        props.tvID +
        "?api_key=0914f7c5f3e5e546aaa005b128fda302"
    );
    const t = { ...data };
    setTVDetails({ ...t });
  };

  useEffect(() => {
    getTVDetails();
  });

  return (
    <React.Fragment>
      <SingleTVCover imgURL={tvDetails.backdrop_path} />
      <div className="container movie-detail">
        <div className="body-detail">
          <div className="body-detail2">
            <SingleTVAsside details={tvDetails} />
            <SingleTVGeneral details={tvDetails} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleTVBody;
