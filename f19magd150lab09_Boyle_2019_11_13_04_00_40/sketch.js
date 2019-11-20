var mirror1
var mirror2
var mySound //variables used for the images and sounds
var img
let reverb
function preLoad(){
	soundFormats('mp3', 'ogg', 'wav'); //to allow the sounds
	
}
function setup() {
    createCanvas (700,700)
    mirror1 = loadImage("Mirror 1.jpg");//all the images and sounds used
    img = loadImage('img.jpg');  //I drew that for the only purpose of this lab and regret not yoinking a stock image
    mySound = loadSound('FNAF Scream.mp3.mp3'); 
    mirror2 = loadImage("Mirror 2.jpg"); //credit to fnaf and CryptTV for the sound and image
    reverb = new p5.Reverb();
  mySound.disconnect();
  reverb.process(mySound, 3, 2);
}

function draw() {
  background(255);
  if (mouseIsPressed){mySound.setVolume(0.01); //whenever I click, 
 //It turns into those those halloween mirrors                    
  mySound.play();
  image(mirror2, 0, 0, width, height);  
  mirror2.filter(GRAY)// puts the crypt image on a grayscale
  } else
  { //otherwise it shows a regular mirror
  image(mirror1, 0, 0, width, height);
  tint(255,200); 
  image(img, 190, 160, 320,400);}
}