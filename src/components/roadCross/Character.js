class Character {
  constructor(
    x,
    y,
    width,
    height,
    color,
    xSpeed,
    ySpeed,
    screenWidth,
    screenHeight
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.playerSpeed = 3;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
  }
  moveEnemyVertically() {
    if (this.y > this.screenHeight - 90 || this.y < 40) {
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
    } else if (this.y > this.screenHeight - 50) {
      this.y = this.screenHeight - 50;
    }
    this.y += this.ySpeed;
  }
  movePlayerHorizontally() {
    if (this.x > this.screenWidth - 50) {
      this.x = this.screenWidth - 50;
    } else if (this.x <= 0) {
      this.x = 0;
    }
    this.x += this.xSpeed;
  }
}

export default Character;
