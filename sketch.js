var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survialTime=0;

function preload(){
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
   //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x) 
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
}

function draw() {
  
  createCanvas(450,400)
  background(255);
 
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

    if(keyDown("space")&& monkey.y > 200 ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 1;
  
    monkey.collide(ground);   
  
  spawnObstacles();
  spawnbanana();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
 
  stroke("black");
  textSize(20);
  fill("black");
  survialTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survialTime, 100, 50);
  drawSprites();
  
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(450,330,10,40);
   obstacle.velocityX = -4
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.lifetime = 100;
   obstacleGroup.add(obstacle);
   }
 }

function spawnbanana(){
 if (frameCount % 80 === 0){
   var banana = createSprite(450,200,10,40);
   banana.y = Math.round(random(120,200));
   banana.velocityX = -4
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.lifetime = 100;
   bananaGroup.add(banana);
   }
 }