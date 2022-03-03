import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {
  Box,
  TextareaAutosize,
  // TextField,
  Rating,
  Grid,
  Button,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import "../css/review.css";
import { useParams } from "react-router-dom";
import movieDummy from "../singleMovie/tempMovieDetail.json";
import tvDummy from "../singleTVShow/tempTVDetail.json";

function Review(props) {
  const { id, type } = useParams();
  const mediaType = type === "tvshows" ? "tv" : "movie";

  const [details, setDetails] = useState(
    type === "tvshows" ? tvDummy : movieDummy
  );

  const getTVDetails = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/" +
        mediaType +
        "/" +
        id +
        "?api_key=0914f7c5f3e5e546aaa005b128fda302"
    );
    const t = { ...data };
    setDetails({ ...t });
  };

  useEffect(() => {
    getTVDetails();
  });

  const handleSubmit = async () => {};

  const imgURL = "https://image.tmdb.org/t/p/w500" + details.poster_path;

  return (
    <React.Fragment>
      <Header />
      <div className="container review-rating-container">
        <form method="POST" onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 5, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <h2 className="media-title">Please give your opinion....</h2>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 5, sm: 2, md: 3 }}
              >
                <Grid item xs={3}>
                  <img src={imgURL} alt={id} />
                </Grid>
                <Grid item xs={9}>
                  <Box
                    sx={{
                      // width: 500,
                      height: 100,
                      maxWidth: "100%",
                    }}
                  >
                    <Grid
                      container
                      rowSpacing={5}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={12}>
                        <h2 className="media-title">
                          {type === "tvshows" ? details.name : details.title} ({" "}
                          {type === "tvshows"
                            ? details.first_air_date.substring(0, 4)
                            : details.release_date.substring(0, 4)}{" "}
                          )
                        </h2>
                      </Grid>

                      <Grid item xs={12}>
                        <Rating
                          name="customized-10"
                          defaultValue={2}
                          max={10}
                          size="large"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {/* <TextField
                      inputProps={{ style: { color: "white" } }}
                      fullWidth
                      label="Review"
                      id="fullWidth"
                    /> */}
                        <TextareaAutosize
                          aria-label="empty textarea"
                          placeholder="Enter Review"
                          style={{
                            width: 500,
                            height: 85,
                            background: "black",
                            color: "white",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="success"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Review;
