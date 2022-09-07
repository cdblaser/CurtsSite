import React, { useEffect, useRef } from "react";
import "./Game1.css";

const Game1 = () => {
  const canvas = document.getElementsByClassName("canvas1");
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    console.log(ctx);
  });

  return (
    <div>
      <canvas ref={canvasRef} className="canvas1" />
    </div>
  );
};

export default Game1;
