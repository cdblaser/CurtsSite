import React from "react";
import Home from "./components/Home";
import PeopleForm from "./components/PeopleForm";
import IdleClicker from "./components/idle_clicker_components/IdleClicker";
import GearOpt from "./components/gear_components/GearOpt";
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
      <Route href="/gearoptimizer">
        <GearOpt />
      </Route>
    </div>
  );
};

export default App;
