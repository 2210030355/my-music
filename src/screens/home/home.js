import React from 'react'
import { useState,useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Library from '../library/library'
import Feeds from '../feeds/feeds'
import { setClientToken } from "../../spotify";
import Trending from '../trending/trending'
import Player from '../player/player'
import Favorites from '../favorites/favorites'
import './home.css'
import Sidebar from '../../components/sidebar'
import Login from '../auth/login'

export default function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    console.log(hash)
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}