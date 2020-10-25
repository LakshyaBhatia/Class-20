var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,800);
  

  movingRect = createSprite(500,600,50,100);
  movingRect.shapeColor= "green";
  movingRect.debug = true;
  movingRect.velocityY = -5

  fixedRect= createSprite(500, 100, 100, 50);
  fixedRect.shapeColor = "green"
  fixedRect.debug = true;
   fixedRect.velocityY = 5

}

function draw() {
  background("tan");

   console.log(fixedRect.x - movingRect.x);
  
  
  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    
    
    ){
    movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";

   fixedRect.velocityY = -5;
   movingRect.velocityY = 5;
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  
  
  drawSprites();



}