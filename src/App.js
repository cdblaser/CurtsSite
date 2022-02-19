import React from "react";
import Home from "./components/Home";
import IdleClicker from "./components/idle_clicker_components/IdleClicker";
import GearSelector from "./components/gear_components/GearSelector";
import Header from "./components/Header";
import Route from "./components/Route";

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
    </div>
  );
};

export default App;
