var bullet, wall;
var speed, weight, thickness;
var deform;

function setup() {
  createCanvas(1600,400);

  speed = random(220,320);
  weight = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,200);
 
}

function draw() {
  background(0,0,0);

  bullet.velocityX = speed;

  wall.shapeColor = rgb(80,80,80);
  bullet.shapeColor = "white";

 // bullet.collide(wall);
 if(deformation(bullet, wall)){
  bullet.velocityX =0;
   deform = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
   if(deform<10){
    bullet.shapeColor = color(255,0,0);
    wall.shapeColor = color(255,0,0);
  }else if(deform>10){
    bullet.shapeColor = color(0,255,0);
    wall.shapeColor = color(0,255,0);
  }
 }

  drawSprites();
}

function deformation(a,b){
  bulletRightEdge = a.x+a.width;
  wallLeftEdge = b.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
}