var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage;
var pink_balloonImage ,blue_balloonImage, backgroundImage,pinkBalloon,blueBalloon,greenBalloon;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage=loadImage("pink_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2){
 
      pinkBalloon();
    }
    else if (select_balloon == 3){
greenBalloon();
      

    } 
    else {
 blueBalloon();
      
    }
    }
  
  
  drawSprites();
  }


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
}

function greenBalloon() {
  //write code for spwaning green balloons
  greenBalloon=createSprite(20,250,30,30);
  greenBalloon.addImage(green_balloonImage);
  greenBalloon.velocityX=3;
  greenBalloon.lifetime=150;
  greenBalloon.scale=0.5;

}

function pinkBalloon() {
  //write code for spwaning pink balloons
  pinkBalloon = createSprite(20,270,30,30);
  pinkBalloon.addImage(pink_balloonImage);
  pinkBalloon.velocityX = 3;
  pinkBalloon.lifetime = 150;
  pinkBalloon.scale = 0.1;
}
