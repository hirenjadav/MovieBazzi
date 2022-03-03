import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/homeslider.css";

function HomeSlider(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            id="custCarousel"
            class="carousel slide"
            data-ride="carousel"
            align="center"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                {" "}
                <img src="https://i.imgur.com/weXVL8M.jpg" alt="Hills" />{" "}
              </div>
              <div class="carousel-item">
                {" "}
                <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills" />{" "}
              </div>
              <div class="carousel-item">
                {" "}
                <img src="https://i.imgur.com/83fandJ.jpg" alt="Hills" />{" "}
              </div>
              <div class="carousel-item">
                {" "}
                <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills" />{" "}
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#custCarousel"
              data-slide="prev"
            >
              {" "}
              <span class="carousel-control-prev-icon"></span>{" "}
            </a>{" "}
            <a
              class="carousel-control-next"
              href="#custCarousel"
              data-slide="next"
            >
              {" "}
              <span class="carousel-control-next-icon"></span>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
