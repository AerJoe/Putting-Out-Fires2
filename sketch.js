var f1, f2
var background, backgroundimg

var backgroundimg
var firefighter
var firefighterimg
var fire1
var fire1img
function preload() {
backgroundimg=loadImage("background.jpg")
firefighterimg = loadImage("firefighter.png")
fire1img = loadImage("fireSheet.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight); 
  firefighter=createSprite(windowWidth/10-120,windowHeight-105,100,200);
  firefighter.addImage(firefighterimg)
  firefighter.scale = 0.2
  /*f2 = createSprite(400, 200, 50, 50);
  f2.addImage(f1)*/
  drawSprites()
}

function draw() {
  background(backgroundimg);
  spawnFire()
  drawSprites()
}

function spawnFire() {
  if(frameCount % 60 === 0) {
    fire1 = createSprite(windowWidth/2,windowHeight/2)
    fire1.addImage(fire1img)
    fire1.y = Math.round(random(100,300))
    fire1.x = Math.round(random(700,100))
    fire1.depth=firefighter.depth
  }
}