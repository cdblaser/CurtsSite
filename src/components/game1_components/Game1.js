import React, { useState, useEffect, useRef } from "react";
import Player from "./Player";
import Button from "./Button";
import InputManager from "./InputManager";
import "./Game1.css";

const Game1 = () => {
  const canvasRef = useRef(null);

  const width = 600;
  const height = 600;
  const inputManager = new InputManager();
  const [player, setPlayer] = useState(
    new Player(200, 200, 20, 20, 1, "black")
  );
  const button = new Button(300, 300, 50, 50);

  const updatePlayer = (x, y) => {
    let newPlayer = new Player();
    Object.assign(newPlayer, player);
    newPlayer.move(x, y);
    setPlayer(newPlayer);
    console.log(player.x, player.y);
  };
  button.pressButton();
  useEffect(() => {
    inputManager.movePlayer(updatePlayer, player.speed);
  });

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const context = document.getElementById("canvas");
    const rect = context.getBoundingClientRect();
    console.log(rect);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillRect(button.x, button.y, button.width, button.height);
  });

  return (
    <div>
      <canvas ref={canvasRef} width={width} height={height} id="canvas" />
    </div>
  );
};

export default Game1;
