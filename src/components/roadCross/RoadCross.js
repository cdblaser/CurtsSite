import React, { useState, useEffect, useRef } from "react";
import "./RoadCross.css";

const RoadCross = () => {
  var isGameLive = true;
  let screenWidth = 1000;
  let screenHeight = 500;
  let width = 50;
  let height = 50;
  var isRightKeyPressed = false;
  var isLeftKeyPressed = false;
  var isUpKeyPressed = false;
  var isDownKeyPressed = false;

  const canvasRef = useRef(null);
  let counter = 1;
  const [frame, setFrame] = useState(counter);

  var draw = function (ctx) {
    ctx.clearRect(0, 0, screenWidth, screenHeight);

    // ctx.drawImage(sprites.background, 0, 0);

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    enemies.forEach(function (element) {
      ctx.fillStyle = element.color;
      ctx.fillRect(element.x, element.y, element.width, element.height);
      //   ctx.drawImage(sprites.enemy, element.x, element.y);
    });
    ctx.fillStyle = trophy.color;
    ctx.fillRect(trophy.x, trophy.y, trophy.width, trophy.height);
    // ctx.drawImage(sprites.player, player.x, player.y);
    // ctx.drawImage(sprites.trophy, trophy.x, trophy.y);
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    setFrame(counter++);
    draw(ctx);
    step();
    update();
  }, [frame]);

  class gameCharacter {
    constructor(x, y, width, height, color, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
      this.playerSpeed = 3;
    }
    moveEnemyVertically() {
      if (this.y > screenHeight - 90 || this.y < 40) {
        this.ySpeed = -this.ySpeed;
      }
      this.y += this.ySpeed;
    }
    moveEnemyHorizontally() {
      this.x += this.xSpeed;
    }
    movePlayerVertically() {
      if (this.y <= 0) {
        this.y = 0;
      } else if (this.y > screenHeight - 50) {
        this.y = screenHeight - 50;
      }
      this.y += this.ySpeed;
    }
    movePlayerHorizontally() {
      if (this.x > screenWidth - 50) {
        this.x = screenWidth - 50;
      } else if (this.x <= 0) {
        this.x = 0;
      }
      this.x += this.xSpeed;
    }
  }

  var player = new gameCharacter(
    50,
    225,
    width,
    height,
    "rgb(0, 0, 255)",
    0,
    0
  );
  var enemies = [
    new gameCharacter(
      player.x + 200,
      50,
      width,
      height,
      "rgb(0, 255, 0)",
      0,
      2
    ),
    new gameCharacter(
      player.x + 475,
      400,
      width,
      height,
      "rgb(0, 155, 0)",
      0,
      4
    ),
    new gameCharacter(
      player.x + 750,
      225,
      width,
      height,
      "rgb(0, 100, 0)",
      0,
      6
    ),
  ];
  var trophy = new gameCharacter(
    925,
    225,
    width,
    height,
    "rgb(0, 0, 155)",
    0,
    0
  );
  //   var sprites = {};
  //   var loadSprites = function () {
  //     sprites.player = new Image();
  //     sprites.player.src = "sprites/hermitCrab50x50.png";
  //     sprites.background = new Image();
  //     sprites.background.src = "sprites/beach.png";
  //     sprites.enemy = new Image();
  //     sprites.enemy.src = "sprites/bouncingSlime1.png";
  //     sprites.trophy = new Image();
  //     sprites.trophy.src = "sprites/poop.png";
  //   };

  document.onkeydown = function (event) {
    var keyPressed = event.keyCode;
    if (keyPressed == 39) {
      isRightKeyPressed = true;
      player.xSpeed = player.playerSpeed;
    } else if (keyPressed == 37) {
      player.xSpeed = -player.playerSpeed;
      isLeftKeyPressed = true;
    } else if (keyPressed == 38) {
      isUpKeyPressed = true;
      player.ySpeed = -player.playerSpeed;
    } else if (keyPressed == 40) {
      isDownKeyPressed = true;
      player.ySpeed = player.playerSpeed;
    }
  };

  document.onkeyup = function (event) {
    var keyUp = event.keyCode;
    if (keyUp == 39) {
      isRightKeyPressed = false;
      if (isLeftKeyPressed) {
        player.xSpeed = -player.playerSpeed;
      } else {
        player.xSpeed = 0;
      }
    }
    if (keyUp == 37) {
      isLeftKeyPressed = false;
      if (isRightKeyPressed) {
        player.xSpeed = player.playerSpeed;
      } else {
        player.xSpeed = 0;
      }
    }
    if (keyUp == 38) {
      isUpKeyPressed = false;
      if (isDownKeyPressed) {
        player.ySpeed = player.playerSpeed;
      } else {
        player.ySpeed = 0;
      }
    }
    if (keyUp == 40) {
      isDownKeyPressed = false;
      if (isUpKeyPressed) {
        player.ySpeed = -player.playerSpeed;
      } else {
        player.ySpeed = 0;
      }
    }
  };

  var checkCollision = function (rect1, rect2) {
    var xOverlap =
      Math.abs(rect1.x - rect2.x) <= Math.max(rect1.width, rect2.width);
    var yOverlap =
      Math.abs(rect1.y - rect2.y) <= Math.max(rect1.height, rect2.height);
    return xOverlap && yOverlap;
  };

  var update = function () {
    player.movePlayerHorizontally();
    player.movePlayerVertically();
    enemies.forEach(function (element) {
      if (checkCollision(player, element)) {
        endGameLogic("You lose!");
      }
      element.moveEnemyVertically();
    });
    if (checkCollision(player, trophy)) {
      endGameLogic("You won!");
    }
  };

  var endGameLogic = function (text) {
    isGameLive = false;
    alert(text);
    window.location = "";
  };

  var step = function () {
    if (isGameLive) {
      window.requestAnimationFrame(step);
    }
  };
  //   loadSprites();

  return (
    <div>
      <canvas ref={canvasRef} id="myCanvas" width="1000" height="500" />;
    </div>
  );
};

export default RoadCross;
