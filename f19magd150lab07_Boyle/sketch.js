let fish = []; //I have no idea how to Make the fish look like
               //Fish so this'll be an Array of square fish

function setup() {
  createCanvas(800, 700);

  for (let i = 2; i < 20; i++) {
    fish.push(new TheySwimming());
  }
}

function draw() {
  background(75,115,255);
 
  fill(130,80,10)
  rect(0,650,800,75)

  fill(10,150,10);
  rect(200,300,50,350) //all of this is just for an unmoving regular
  rect(400,200,20,450) //background for an underwater nature background
  rect(700,375,60,275)

  fill(150,150,150)
  ellipse(300,650,75,25)
  fill(100,100,100)
  ellipse(500,675,75,25)
  fill(120,120,120)
  ellipse(720,665,75,25)


  for (let i = 0; i < fish.length; i++) {
    fish[i].move();
    fish[i].display();
  }
}


class TheySwimming {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(20, 35);
    this.speed = 1;
    this.c = color(random(200), random(200), random(200));
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(this.c);
    rect(this.x, this.y, this.diameter, this.diameter);
  }
}
