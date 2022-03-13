import React from "react";
import Header from "../common/Header";
import SearchBarWithPhoto from "../common/searchbarwithphoto";
import LatestMovie from "./latestmovie";
import Footer from "../common/Footer";
import "../css/style.css";

function Home(props) {
  return (
    <React.Fragment>
      <Header user={props.user} />
      <SearchBarWithPhoto />
      <LatestMovie />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
