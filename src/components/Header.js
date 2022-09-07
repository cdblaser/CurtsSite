import React from "react";
import Link from "./Link";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>Welcome to Curtis's website!</h1>
      </div>

      <div className="navbar">
        <Link href="/" className="item">
          Home
        </Link>
        <Link href="/idleclicker" className="item">
          Idle Game
        </Link>
        <Link href="/gearselector" className="item">
          EzPzSaga Gear Selector
        </Link>
        <Link href="/twitterpractice" className="item">
          Twitter Practice
        </Link>
        <Link href="/rps" className="item">
          Rock Paper Scissors
        </Link>
        <Link href="/game1" className="item">
          Game1
        </Link>
      </div>
    </div>
  );
};

export default Header;
