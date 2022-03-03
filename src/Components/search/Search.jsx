import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import SearchBarWithPhoto from "../common/searchbarwithphoto";
import SearchedMovie from "./SearchedMovie";
// import SearchedPerson from "./SearchedPerson";
import SearchedTV from "./SearchedTV";
import "bulma/css/bulma.css";
import "../css/search.css";

function Search(props) {
  const { query } = useParams();

  const [searchData, setSearchdata] = useState([]);

  const getSearchData = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/search/multi?api_key=0914f7c5f3e5e546aaa005b128fda302&language=en-US&query=" +
        query +
        "&page=1&include_adult=false"
    );
    const { results } = data;

    setSearchdata([...results]);
  };

  useEffect(() => {
    getSearchData();
  });

  return (
    <React.Fragment>
      <Header />
      <SearchBarWithPhoto />
      <div className="container">
        <div className="searched-data columns is-multiline p-0 pb-3 last">
          {/* <SearchedPerson searchData={searchData} /> */}
          <SearchedMovie searchData={searchData} />
          <SearchedTV searchData={searchData} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Search;
