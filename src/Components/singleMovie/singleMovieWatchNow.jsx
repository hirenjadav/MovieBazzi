import React, { useEffect, useState } from "react";
import movieServices from "../../services/moviesServices";

function SingleMovieWatchNow(props) {
  const [streamList, setStreamList] = useState([]);
  const [streamLink, setStreamLink] = useState("");

  const getStreamList = async () => {
    const { data } = await movieServices.getWatchProviderDetails(
      "movie",
      props.movieID
    );
    const { results } = data;
    const list = results.IN ? [...results.IN.flatrate] : [];
    const link = results.IN ? results.IN.link : "";
    setStreamLink(link);
    setStreamList([...list]);
  };

  useEffect(() => {
    getStreamList();
  });

  return (
    <div>
      {streamList.map((s, i) => {
        const imgURL = "http://image.tmdb.org/t/p/w92" + s.logo_path;
        return (
          <a key={i} href={streamLink} target="_blank" rel="noreferrer">
            <img src={imgURL} alt={s.provider_name} />
          </a>
        );
      })}
    </div>
  );
}

export default SingleMovieWatchNow;
