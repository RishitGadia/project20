
var speed,weight,car,wall;

function setup() {
  createCanvas(1600,400);
speed=random(50,100)
weight=random(400,1000)
car=createSprite(50,200,50,50);
wall=createSprite(1500,200,50,150);
car.velocityX=speed;
car.shapeColor="green";
wall.shapeColor="red";

}

function draw() {
  background(0);
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=(0.5*speed*speed*weight)/22500;
    if(deformation>180){
      car.shapeColor="orange";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation<100 ){
      car.shapeColor="white";
    }
  }  
  drawSprites();
}