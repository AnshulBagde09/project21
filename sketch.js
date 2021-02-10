var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50,10,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80)

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);  


  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
    defor=(0.5*weight*speed*speed)/22500;

  if(defor<100){
    bullet.shapeColor="green";
  }
  else if(defor>100&&defor<180){
    bullet.shapeColor="yellow";
  }
  else if(defor>180){
    bullet.shapeColor="red";
  }
   
  } 
  
  drawSprites();
}