import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

function Profile(props) {
  return (
    <React.Fragment>
      <Header user={props.user} />

      <Footer />
    </React.Fragment>
  );
}

export default Profile;
