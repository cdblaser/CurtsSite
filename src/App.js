import React from "react";
import Home from "./components/Home";
import Route from "./components/Route";
import Header from "./components/Header";
import IdleClicker from "./components/idle_clicker_components/IdleClicker";
import GearSelector from "./components/gear_components/GearSelector";
import TwitterPractice from "./components/twitter_practice_components/TwitterPractice";
import Rps from "./components/rps_components/Rps.js";
import Game1 from "./components/game1_components/Game1.js";

import "./App.css";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
