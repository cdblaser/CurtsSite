class InputManager {
  keyPresses = [false, false, false, false];

  movePlayer(updatePlayer, playerSpeed) {
    document.onkeydown = (e) => {
      var key = e.keyCode;
      if (key == 39) {
        updatePlayer(playerSpeed, 0);
        this.keyPresses[0] = true;
      } else if (key == 37) {
        updatePlayer(-playerSpeed, 0);
        this.keyPresses[1] = true;
      } else if (key == 38) {
        updatePlayer(0, -playerSpeed);
        this.keyPresses[2] = true;
      } else if (key == 40) {
        updatePlayer(0, playerSpeed);
        this.keyPresses[3] = true;
      }
    };
  }

  // stopPlayer(updatePlayer,) {
  //   document.onkeyup = (e) => {
  //     var key = e.keyCode;
  //     if (key == 39) {
  //       this.keyPresses[0] = false;
  //       if (this.keyPresses[1]) {
  //         updatePlayer(, 0);
  //       } else {
  //         updatePlayer(0, 0);
  //       }
  //     }
  //     if (key == 37) {
  //       this.keyPresses[1] = false;
  //       if (this.keyPresses[0]) {
  //         updatePlayer, 0);
  //       } else {
  //         updatePlayer(0, 0);
  //       }
  //     }
  //     if (key == 38) {
  //       this.keyPresses[2] = false;
  //       if (this.keyPresses[3]) {
  //         updatePlayer(0,);
  //       } else {
  //         updatePlayer(0, 0);
  //       }
  //     }
  //     if (key == 40) {
  //       this.keyPresses[3] = false;
  //       if (this.keyPresses[2]) {
  //         updatePlayer(0, );
  //       } else {
  //         updatePlayer(0, 0);
  //         console.log("helo");
  //       }
  //     }
  //   };
  // }
}

export default InputManager;