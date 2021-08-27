var surfer,surferImg,path,pathImg,lground,rground
function preload(){
  //pre-load images
  surferImg=loadAnimation("Runner-1.png","Runner-2.png")
  pathImg=loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  lground=createSprite(10,200,10,400)
  rground=createSprite(390,200,10,400)
  path=createSprite(200,200)
  path.addImage(pathImg)
path.scale=1.3
surfer=createSprite(200,380)
surfer.scale=0.09
surfer.addAnimation("running",surferImg)
}

function draw() {
  background(0);
  path.velocityY=2
  if(path.y>400){
    path.y=0
  }
  surfer.collide(rground)
  surfer.collide(lground)
  surfer.x=mouseX
drawSprites()
}
