import React from "react";
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SingleMovieBody from "./singleMovieBody";

function SingleMovie(props) {
  const { id } = useParams();
  return (
    <React.Fragment>
      <Header user={props.user} />
      <SingleMovieBody movieID={id} />
      <Footer />
    </React.Fragment>
  );
}

export default SingleMovie;
