const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1800, 600);
	ground =new Ground(900,300,1800,600);

	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
 

  ground.show();
 
  drawSprites();
 
}



