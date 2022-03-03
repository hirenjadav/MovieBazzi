import React from "react";
import "bulma/css/bulma.css";
import "../css/style.css";
import SeachBar from "./searchbar";

function SearchBarWithPhoto(props) {
  return (
    <React.Fragment>
      <div class="top">
        <div class="columns">
          <div class="column is-full featured_wrapper p-0">
            <img
              src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg"
              class="featured"
              alt=""
            />
          </div>
        </div>
      </div>
      <SeachBar />
    </React.Fragment>
  );
}

export default SearchBarWithPhoto;
