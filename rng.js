class RNG
{
    constructor() {};

randomColor = () =>
{
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var color = 'rgba('+r+','+g+','+b+',1.0)';
  return color;
};

randomInt = (min, max) =>
{
    return Math.floor(min + Math.random() * (max - min));
};

};