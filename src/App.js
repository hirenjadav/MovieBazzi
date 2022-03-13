import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Components/movies/movies";
import Home from "./Components/home/home";
import Login from "./Components/login/login";
import Celebrities from "./Components/celebrities/celebrities";
import TVShows from "./Components/tvShow/tvshows";
import SingleMovie from "./Components/singleMovie/singleMovie";
import Profile from "./Components/profile/profile";
import Review from "./Components/review/review";
import SingleTVShow from "./Components/singleTVShow/singleTVShow";
import Search from "./Components/search/Search";
import Logout from "./Components/login/logout";
import auth from "./services/authServices";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home user={user} />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/logout" element={<Logout />}></Route>
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
