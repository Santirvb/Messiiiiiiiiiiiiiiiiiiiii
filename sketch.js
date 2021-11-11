var Messi;
function setup() {
  createCanvas(400,400);
 Messi = createSprite(200,150,10,10);

}


function draw() 
{
  background(30);
  
  if(keyIsDown(RIGHT_ARROW)){
  Messi.position.x = Messi.position.x+5;
  
  }
  if(keyIsDown(LEFT_ARROW)){
  Messi.position.x = Messi.position.x-5;
  
  }
  if(keyDown(UP_ARROW)){
  Messi.position.y = Messi.position.y-5;
  }
  if(keyDown(DOWN_ARROW)){
  Messi.position.y = Messi.position.y-5;
  }


  drawSprites();
}



