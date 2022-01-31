import React, { useRef, useEffect, useState } from "react";

import "./IdleClicker.css";

const World = ({ width, height }) => {
  const canvasRef = useRef();
  const callback = useRef();
  const [player, setPlayer] = useState(115);
  const [enemy, setEnemy] = useState(345);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 500, 250);
    //setting the world
    ctx.fillStyle = "rgb(0, 0, 200)";
    ctx.fillRect(0, 0, 500, 250);
    ctx.fillStyle = "rgb(0, 150, 0)";
    ctx.fillRect(0, 230, 500, 20);
    //setting the enemy
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(enemy, 190, 40, 40);
    //setting the player
    ctx.fillStyle = "rgb(200, 200, 0)";
    ctx.fillRect(player, 190, 40, 40);
    //moving the player and enemy
    callback.current = () => {
      setPlayer(player + 5);
      if (player >= 210) setPlayer(115);
      setEnemy(enemy - 5);
      if (enemy <= 250) setEnemy(345);
    };
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      callback.current();
    }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, [callback]);

  return (
    <canvas ref={canvasRef} className="world" width={width} height={height} />
  );
};

export default World;
