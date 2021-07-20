var cityIMG,city,theifIMG,theif,copIMG,cop,carIMG,car,redheartIMG,heart,greyheartIMG
var carGroup,car1


function preload()
{
	cityIMG=loadImage("images /pixlr-bg-result.png");
	theifIMG=loadImage("images /theif.gif");
	copIMG=loadImage("images /cop.gif")
	carIMG=loadImage("images /car .gif")
	redheartIMG=loadImage("images /redheart.png")
	greyheartIMG=loadImage("images /greyheart.png")
}

function setup() {
	createCanvas(1200, 800);
	rectMode(CENTER);
	

	city=createSprite(width/2, height/2, width,height);
	city.addImage(cityIMG)
	city.scale=4

	theif=createSprite(width/2, 500, 10,10);
	theif.addImage(theifIMG)
	theif.setCollider("rectangle", )
	theif.scale=0.5

	cop=createSprite(20,500 ,10,10)
	cop.addImage(copIMG)
	cop.scale=0.5

	carGroup= new Group();



//	groundSprite=createSprite(width/2, height-15, width,10);
//	groundSprite.shapeColor=color(255)


	
	

	//Create a Ground
	


	
  
}


function draw() {
 
  background("white");
 
  //countinuase cars coming after a certain intervel
  spawnCars();
  //the theif should go up and down the road 
  if(keyDown(UP_ARROW) && theif.y>500 ){
theif.y-=5 
  }
  if(keyDown(DOWN_ARROW) && theif.y<700 ){
	theif.y+=5 
	  }
  // limit the movement on y axis between 500 and 750
  // the cop will follow the theif's Y axis 

cop.y = theif.y
  //once theif gets hit by the car the cop will move one step ahead 
  if(carGroup.isTouching(theif)){
	cop.x=cop.x +300
	
}
  // theif will have three lifes and once hit the life will reduce 

  drawSprites();
  
 
}

function keyPressed() {
	/*if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x+=20;
		Matter.Body.translate(packageBody,{x:20,y:0});
	}
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x-=20;
		Matter.Body.translate(packageBody,{x:-20,y:0});
	}

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }*/
}
function spawnCars(){
	if(frameCount % 240 === 0){
	car=createSprite(1200,Math.round(random(500,700)))
	car.addImage(carIMG);
	car.scale=0.2
	car.velocityX= -5
	car.lifetime=240;
	car.setCollider("rectangle", -100,0,20,10,-45)
	car.debug=true ;
	carGroup.add(car)
}
}



