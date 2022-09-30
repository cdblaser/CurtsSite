class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  pressButton(canvas) {
    window.addEventListener("mousedown", (e) => {
      if (
        this.x <= e.clientX &&
        e.clientX <= this.x + this.width &&
        this.y <= e.pageY
      )
        console.log("hello");
    });
  }
}

export default Button;
