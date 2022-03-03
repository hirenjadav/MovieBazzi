import React, { useEffect, useState } from "react";
import axios from "axios";

function SingleTVWatchNow(props) {
  const [streamList, setStreamList] = useState([]);
  const [streamLink, setStreamLink] = useState("");

  const getStreamList = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/tv/" +
        props.tvID +
        "/watch/providers?api_key=0914f7c5f3e5e546aaa005b128fda302"
    );
    const { results } = data;
    const list = [...results.IN.flatrate];
    const link = results.IN.link;
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

export default SingleTVWatchNow;
