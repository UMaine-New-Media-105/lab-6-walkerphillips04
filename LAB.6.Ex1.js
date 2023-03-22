let x;
let speedX;
let y;
let speedY;
let StarX;
let StarY;

function setup() {
  createCanvas(400, 400);
  
  y = 100;
  x = 100;
  StarY = random(-5, 200);
  StarX = random(-5, 200);
  notEaten = true
  speedX = 5;
  speedY = 5;
}

function draw() {
  background(220);
  drawStar(StarX, StarY);
  drawFace(x, y);
  x = x + speedX;
  y = y + speedY;
  d = dist(x, y, StarX, StarY);
  
  if (x > 360 || x < 0) {
    speedX = speedX * -1;
  }

  if (y > 360 || y < 1) {
    speedY = speedY * -1;
 
if (d<300){
 drawFace(notEaten = false)  
} 
  }

function drawFace(x, y) {
  push();
  translate(x, y);
  fill(255, 220, 165);
  strokeWeight(2);
  stroke(0);
  ellipse(25, 25, 40, 40);
  fill(0);
  noStroke();
  ellipse(18, 20, 5, 5);
  ellipse(32, 20, 5, 5);

  noFill();
  strokeWeight(3);
  stroke(2);
  fill("black");
  arc(25, 35, 15, 10, 4, 3.9);
  }
  pop();

  if (notEaten == false){
   ellipse(18, 20, 7, 0);
    ellipse(32, 20, 7, 0);
 // } else {
 //   ellipse(18, 20, 5, 5);
 //   ellipse(32, 20, 5, 5);
  }
}
function keyPressed() {
  if (keyCode === DOWN_ARROW || keyCode === UP_ARROW) {
    speedY = speedY * -1;
  }
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    speedX = speedX * -1;
  }
}

function drawStar(x, y) {
  push();
  translate(x, y);
  //scale(size)
  fill("red");
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < 9; i++) {
    let angle = (i * TWO_PI) / 8;
    let x = sin(angle) * 10;
    let y = cos(angle) * 10;
    vertex(x, y);
    angle += TWO_PI / 10;
    x = sin(angle) * 20;
    y = cos(angle) * 20;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}
