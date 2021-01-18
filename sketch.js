
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boy, boyImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function preload()
{
  boyImg = loadImage("boy.png");
  treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

  
 

	ground = new Ground(500, 690, 1000, 20);

  stone = new Stone(140, 500, 55, 55);

  mango1 = new Mango(690, 400, 50);
  mango2 = new Mango(780, 350, 50);
  mango3 = new Mango(730, 250, 50);
  mango4 = new Mango(700, 310, 50);
  mango5 = new Mango(760, 270, 50);
  mango6 = new Mango(850, 280, 50);
  mango7 = new Mango(820, 350, 50);
  mango8 = new Mango(890, 400, 50);
  mango9 = new Mango(790, 300, 50);
  mango10 = new Mango(720, 350, 50);
  mango11 = new Mango(760, 410, 50);


  slingShot = new Slingshot(stone.body,{x:130,y:540});

  
   
  boy = createSprite(200,600,100,100);
  boy.addAnimation("boy", boyImg);
  boy.scale = 0.125;

  tree = createSprite(780, 450, 350, 600);
  tree.addImage(treeImg);
  tree.scale = 0.40

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);

  drawSprites();
 
  
  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  

  slingShot.display();




  
}


function mouseDragged(){
 Body.setPosition(stone.body, {x:mouseX, y:mouseY});
  
}

function mouseReleased(){
  slingShot.fly();
}

function detectCollision(lstone, lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r){

    Body.setStatic(lmango.body, false);
  }
}

function keyPressed() {
  if(keyCode === 32){
    Body.setPosition(stone.body, {x:235, y:420});
    slingShot.attach(stone.body);
  }
}

