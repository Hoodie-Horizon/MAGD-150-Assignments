var x = 157;
var y = 560;
var w = 120;
var h = 120;

var a = 500
var b = 500
var c = 115
var d = 115

function setup() {
  createCanvas(700, 700);
  j=100
  p=height/2
  background(225)
  stroke(0)
  noFill();
}

function draw() {
  background(180);
  rect(50,50,600,425)
  ellipse(x,y,w,h);
  rect(a,b,c,d);
  fill(0)
  text("A TV is a TV no matter how blocky", 275, 550)


  push();
  fill(0);
  s = "Option A"; //fast moving circle and rectangle//
  text(s, 130, 565);
  pop();
fill(255)
  if(mouseIsPressed){
    if(mouseX>x&& mouseX <x+w && mouseY>y && mouseY <y+h){
     ellipse(j,p,50,50);
  j++
  if(j+50>width){
    j=+50
  }

      
    }
  }
  push();
  fill(0);
  s = "Option B"; 
  //slow moving rectangle//
  text(s, 533, 565);
  pop();
  fill(255)
  if(mouseIsPressed){
    if(mouseX>x&& mouseX <a+b && mouseY>b && mouseY <b+d){
     rect(j,p,50,50);
  j++
  if(j+50>width){
    j=-+50
  }

      
    }
  }
  

}