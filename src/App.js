import React, { useState, useEffect } from "react";
import Home from "./components/HomePage/Home";
import Route from "./components/Route";
import Header from "./components/Header";
import IdleClicker from "./components/idle_clicker_components/IdleClicker";
import GearSelector from "./components/gear_components/GearSelector";
import TwitterPractice from "./components/twitter_practice_components/TwitterPractice";
import Rps from "./components/rps_components/Rps.js";
import Game1 from "./components/game1_components/Game1.js";
import RoadCross from "./components/roadCross/RoadCross.js";
import Roguelike from "./components/roguelike/Roguelike.js";

import "./App.css";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
      <Header />
      <Route href="/">
        <Home />
      </Route>
      <Route href="/idleclicker">
        <IdleClicker />
      </Route>
      <Route href="/gearselector">
        <GearSelector />
      </Route>
      <Route href="/twitterpractice">
        <TwitterPractice />
      </Route>
      <Route href="/rps">
        <Rps />
      </Route>
      <Route href="/game1">
        <Game1 />
      </Route>
      <Route href="/roadCross">
        <RoadCross />
      </Route>
      <Route href="/roguelike">
        <Roguelike />
      </Route>
    </div>
  );
};

export default App;
