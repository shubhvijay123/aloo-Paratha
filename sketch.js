const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 620);



	engine = Engine.create();
	world = engine.world;


 


	//Engine.run(engine);
  


}

function draw() {
  rectMode(CENTER);
  background("0");
  Engine.update(engine);
 
 
 
}



