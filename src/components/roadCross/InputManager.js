class InputManager {
  controls() {
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
  }
}
