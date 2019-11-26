let y = 800;


function setup() {
  createCanvas(800, 750); 
  frameRate(60);
  stroke(255,0,255)
}

function draw() {
  background(150, 255, 255); 
  
  if (mouseIsPressed) {
    fill (194, 138, 0);
    ellipse(410, 410, 410, 410);
    fill (244, 244, 88);
    ellipse(410, 410, 350, 350);
    fill (255, 75, 0);
    ellipse (420, 390, 45, 45);
    ellipse (325, 430, 45, 45);
    ellipse (460, 500, 45, 45);
    ellipse (420, 300, 45, 45);
    ellipse (560, 430, 45, 45);

    //pepperoni pizza//
} else {

  y = y - 1;
  if (y < 0) {
    y = width;
  }
  rect(25, y, height, y);
  //pizza scanner 9000//
}
  if (keyIsPressed === true){
  	fill (255, 55, 0);
  } else {
  	fill(55,150,225);
  }
  y = y - 1;
  if (y < 0) {
    y = width;
  }
  rect(25, y, height, y);

}