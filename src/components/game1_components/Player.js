class Player {
  constructor(x, y, width, height, speed, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
  }

  move(xDistance, yDistance) {
    this.x += xDistance;
    this.y += yDistance;
  }
}

export default Player;
