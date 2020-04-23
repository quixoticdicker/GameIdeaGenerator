class Card {
  constructor(x, y, fill, stroke) {
    this.x = x;
    this.y = y;
    this.initialX = x;
    this.initialY = y;


    this.fillColor = fill;
    this.strokeColor = stroke;
  };

  draw = (c) =>
  {
    c.strokeStyle = this.strokeColor;
    c.fillStyle = this.fillColor;

    c.beginPath();
    c.rect(this.x, this.y, 100, 150);
    c.stroke();
    c.fill();
  };
  
  update = () =>
  {
    // this is where we control movement and interactivity
    this.draw();
  };
};