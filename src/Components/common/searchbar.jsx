import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "../css/searchbar.css";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchQuery === "") {
      alert("Please write what you want to search");
    } else {
      const navigateValue = "/search/" + searchQuery;
      navigate(navigateValue);
    }
  };

  return (
    <div class="container">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="search">
            <form onSubmit={handleSearch}>
              <div class="columns is-gapless">
                <div class="column">
                  <i class="fa fa-search"></i>
                  <input
                    type="text"
                    name="searchInput"
                    class="form-control"
                    placeholder="Search for your Favourite Movie"
                    value={searchQuery}
                    onChange={handleChange}
                    autocomplete="off"
                  />
                </div>
                <div class="column is-2">
                  <button type="submit" class="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
