import React from "react";
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SingleTVBody from "./singleTVBody";

function SingleTVShow(props) {
  const { id } = useParams();
  return (
    <React.Fragment>
      <Header user={props.user} />
      <SingleTVBody tvID={id} />
      <Footer />
    </React.Fragment>
  );
}

export default SingleTVShow;
