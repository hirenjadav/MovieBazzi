import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Components/movies/movies";
import Home from "./Components/home/home";
import Login from "./Components/login";
import Celebrities from "./Components/celebrities/celebrities";
import TVShows from "./Components/tvShow/tvshows";
import SingleMovie from "./Components/singleMovie/singleMovie";
import Profile from "./Components/profile/profile";
import Review from "./Components/review/review";
import SingleTVShow from "./Components/singleTVShow/singleTVShow";
import Search from "./Components/search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/celebrities" element={<Celebrities />}></Route>
        <Route exact path="/search/:query" element={<Search />}></Route>
        <Route exact path="/movies" element={<Movies />}></Route>
        <Route exact path="/movies/:id" element={<SingleMovie />}></Route>
        <Route exact path="/tvshows" element={<TVShows />}></Route>
        <Route exact path="/tvshows/:id" element={<SingleTVShow />}></Route>
        <Route exact path="/:type/:id/review" element={<Review />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
