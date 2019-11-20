function setup() {
  createCanvas(700,700);
}

function draw() {
  background(0);
 


 createShip();
 createAliens();
 attack();

}
function createShip(){
	//This one makes the ship in the game and uses translates
	//to make the side of the ship.
fill(25, 200, 25)
triangle(310, 680, 330, 640, 350, 680);
rect(300, 660, 25, 25); 
translate(0, 0);
rect(335,660,25,25)
}

function attack(){
	//this is so it looks like the ship is attacking the big alien 
	//by using if else statements
	if(mouseIsPressed){
		
		fill(25, 200, 25)
		rect(440, 400, 30, 60)
		rect(440,600,30,60)
	}else{
		fill (175, 35, 35);
		rect(375,400,150,50) //evil guy >:[
		ellipse (450, 400, 100, 100)
	}

}

function createAliens(){
	//This part is to create the 'aliens' by using different
	//shapes, scale, rotations to simulate their movement and
	//colors.


fill(200,40,200);
rotate(QUARTER_PI/80.00);

ellipse(10,20,30,30);
ellipse(80,20,30,30);
ellipse(155,20,30,30);
ellipse(230,20,30,30);
ellipse(300,20,30,30);   //first line with big ellipses
ellipse(375,20,30,30);
ellipse(445,20,30,30);
ellipse(515,20,30,30);
ellipse(580,20,30,30);
ellipse(650,20,30,30);

fill(20,20,200)

rect(10,70,30,30);
rect(80,70,30,30);
rect(155,70,30,30);
rect(230,70,30,30);
rect(300,70,30,30);  
rect(375,70,30,30);    //second line with big rectangles
rect(445,70,30,30);
rect(515,70,30,30);
rect(580,70,30,30);
rect(650,70,30,30);

fill(75,75,255);

ellipse(20,160,30,30);
ellipse(95,160,30,30);
ellipse(165,160,30,30);
ellipse(240,160,30,30);
ellipse(310,160,30,30);
ellipse(385,160,30,30);  //third line with big ellipse
ellipse(460,160,30,30);
ellipse(530,160,30,30);
ellipse(595,160,30,30);
ellipse(665,160,30,30);



scale(.80)

fill(200,40,200);
rotate(PI/80.00);
ellipse(55,35,30,30);
ellipse(145,35,30,30);
ellipse(240,35,30,30);
ellipse(330,35,30,30);
ellipse(420,35,30,30);
ellipse(510,35,30,30); //first line with small ellipse
ellipse(600,35,30,30);
ellipse(685,35,30,30);
ellipse(770,35,30,30);
ellipse(855,35,30,30);

fill(20,20,200)

rect(55,90,30,30);
rect(145,90,30,30);
rect(240,90,30,30);
rect(330,90,30,30);
rect(420,90,30,30);
rect(510,90,30,30);   //second line with small rectangles
rect(600,90,30,30);
rect(685,90,30,30);
rect(770,90,30,30);
rect(855,90,30,30);

fill(75,75,255);

rect(55,200,30,30);
rect(145,200,30,30);
rect(240,200,30,30);
rect(330,200,30,30);
rect(420,200,30,30);
rect(510,200,30,30); //third line with small rectangles
rect(600,200,30,30);
rect(685,200,30,30);
rect(770,200,30,30);
rect(855,200,30,30);


}
