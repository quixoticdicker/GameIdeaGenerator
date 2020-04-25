class Card {
  constructor(x, y, fill, stroke) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 150;
    this.initialX = x;
    this.initialY = y;

    this.offsetX = 0;
    this.offsetY = 0;

    this.fillColor = fill;
    this.strokeColor = stroke;
  };

  draw(c)
  {
    c.strokeStyle = this.strokeColor;
    c.fillStyle = this.fillColor;

    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.stroke();
    c.fill();
  };
  
  pointWithin(px, py)
  {
      if (px >= this.x && px <= (this.x + this.width) && py >= this.y && py <= (this.y + this.height))
      {
          return true;
      }
      return false;
  }
  
  startDragging(px, py)
  {
      // record offset of mouse to card origin
      this.offsetX = this.x - px;
      this.offsetY = this.y - py;
  }
  
  drag(px, py)
  {
      this.x = px + this.offsetX;
      this.y = py + this.offsetY;
  }
  
  update()
  {
    // this is where we control movement and interactivity
    this.draw();
  };
};