var speed1,speed2,speed3;
var weight1,weight2,weight3;
var bullet1,bullet2,bullet3;
var wall;
var thickness;
var deformation;
var damage;

function setup() {
  createCanvas(1200,400);
  
  thickness = random(20,80);
  speed1 = random(55,90);
  weight1 = random(400,1500);
  speed2 = random(223,321);
  weight2 = random(30,50);


  bullet1 = createSprite(40, 200, 80, 20);
  bullet1.shapeColor = "white";


  wall = createSprite(980,200,thickness,400);
  wall.shapeColor = "yellow";

  bullet1.velocityX = speed1;
  

}

function draw() {
  background(80,80,80);
  
bullet1.collide(wall);


if(hasCollided(bullet1,wall)){
// deformation for bullet1
deformation=0.5*weight1*speed1*speed1/22509
console.log(deformation);

if(deformation>100)
{
  bullet1.shapeColor= "red";
}

if(deformation<100 && deformation>20)
{
  bullet1.shapeColor= "green";
}

if(deformation<20)
{
  bullet1.shapeColor= "yellow";
}


// damage of wall 

damage = 0.5*speed2*weight2*speed2/thickness*thickness*thickness

if(damage<3000){
  wall.shapeColor = "green";
}

if(damage>3000){
  wall.shapeColor = "red";
}
}

else{
  bullet1.shapeColor = "white";
  wall.shapeColor = "yellow";
}

drawSprites();
}

function hasCollided(mv,sv){
  if(mv.x-sv.x < mv.width/2 + sv.width/2 && sv.x - mv.x < mv.width/2 + sv.width/2 ){
   return true
  }
  else{
    
  return false
  }
}





