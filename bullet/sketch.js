var bullet,wall;
var speed,weight,thickness




function setup(){
  createCanvas(800,400);

  speed=random(55,90)
weight=random(400,1500)
thickness=random(22,83)
  bullet=createSprite(50,200,70,20)
  wall=createSprite(500,200,thickness,height/2)



} 

function draw() {
  background(255,255,255);  
 
 bullet.velocityX=speed
 
 if(wall.x-bullet.x<(bullet.width+wall.width)/2){

bullet.velocityX=0
var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
if(damage>10){

  bullet.shapeColor=color(255,0,0)
}
if(damage<10){

  bullet.shapeColor=color(230,230,0)
}


 }
  
  drawSprites();

}