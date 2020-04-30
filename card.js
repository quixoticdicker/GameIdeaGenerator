class Card {
  constructor(x, y, fill, stroke, deckName, cardName, width, height, border, c) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.borderWidth = border;
    this.initialX = x;
    this.initialY = y;

    this.offsetX = 0;
    this.offsetY = 0;

    this.fillColor = fill;
    this.strokeColor = stroke;

    this.faceDown = true;

    this.deckName = deckName;
    this.cardName = cardName;

    this.cornerRound = this.borderWidth;

    var textSize = 25;
    c.font = `${textSize}px Helvetica`;
    while (c.measureText(deckName).width > this.width - (2 * this.borderWidth))
    {
      textSize = textSize - 1;
      c.font = `${textSize}px Helvetica`;
    }
    this.deckTextSize = textSize;

    textSize = 25;
    c.font = `${textSize}px Helvetica`;
    while (c.measureText(cardName).width > this.width - (2 * this.borderWidth))
    {
      textSize = textSize - 1;
      c.font = `${textSize}px Helvetica`;
    }
    this.cardTextSize = textSize;
  }

  draw(c)
  {
    var cornerRound = this.cornerRound;
    if (this.faceDown)
    {
      c.fillStyle = this.strokeColor;
      this.drawBorder(c, cornerRound);
      c.fillStyle = this.fillColor;
      this.drawFill(c, cornerRound);
      c.fillStyle = this.strokeColor;
      this.drawTextAtCenter(c, this.deckName, this.deckTextSize);
    }
    else
    {
      c.fillStyle = this.fillColor;
      this.drawBorder(c, cornerRound);
      c.fillStyle = this.strokeColor;
      this.drawFill(c, cornerRound);
      c.fillStyle = this.fillColor;
      this.drawTextAtCenter(c, this.cardName, this.cardTextSize);
    }
  }

  drawBorder(c, cornerRound)
  {
    c.beginPath();
    var modWid = this.width - (2 * cornerRound);
    var modHei = this.height - (2 * cornerRound);
    var borderStr = `M ${this.x} ${this.y} m 0 ${cornerRound} a ${cornerRound} ${cornerRound} 0 0 1 ${cornerRound} -${cornerRound} h ${modWid} a ${cornerRound} ${cornerRound} 0 0 1 ${cornerRound} ${cornerRound} v ${modHei} a ${cornerRound} ${cornerRound} 0 0 1 -${cornerRound} ${cornerRound} h -${modWid} a ${cornerRound} ${cornerRound} 0 0 1 -${cornerRound} -${cornerRound} v -${modHei}`;
    var path = new Path2D(borderStr);
    c.fill(path);
  }

  drawFill(c, cornerRound)
  {
    var modWid = this.width - (2 * cornerRound);
    var modHei = this.height - (2 * cornerRound);
    var fillStr = `M ${this.x} ${this.y} m ${cornerRound} ${cornerRound} h ${modWid} v ${modHei} h -${modWid} v -${modHei}`;
    var path = new Path2D(fillStr);
    c.fill(path);
  }
  
  drawTextAtCenter(c, text, size)
  {
    c.font = `${size}px Helvetica`;
    c.textAlign = "center";
    c.fillText(text, this.x + (this.width / 2), this.y + (this.height / 2));
  }

  
  flip()
  {
    this.faceDown = !this.faceDown;
  }
  
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
      this.faceDown = false;
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