import React from "react";
import Link from "./Link";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">
        <Link href="/" className="title-link">
          Welcome to Curtis's website!
        </Link>
      </h1>
      <div className="links">
        <Link href="/" className="item">
          Home
        </Link>
        <Link href="/idleclicker" className="item">
          Idle Clicker Game
        </Link>
        <Link href="/gearoptimizer" className="item">
          EzPz Gear Optimizer
        </Link>
      </div>
    </div>
  );
};

export default Header;
