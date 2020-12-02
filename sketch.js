mn = minute();
sc = seconds();
hr = hour();
function setup() {
  createCanvas(800,800);
}

function draw() {
  background(0,0,2);  
  let scAngle = map( 400, 400, 50, 50);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  fill(255,38,41);
  ellipse(width/2, height/2,50, 50);
 

  drawSprites();
}