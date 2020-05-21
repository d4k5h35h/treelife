var r = 0;
var g = 230;
var b = 255;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  r = map(mouseX, 0, windowWidth, 0, 255);
  b = map(mouseX, 0, windowWidth, 255, 0);
  g = map(mouseY, 0,windowHeight, 0, 230);
  background(r, g, b);
  fill(255);
  circle(mouseX,mouseY,25);
}