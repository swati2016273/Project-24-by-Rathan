
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1,dustbin2,dustbin3;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(1000,350,200,20);
	dustbin2 = new Dustbin(900,310,20,100);
	dustbin3 = new Dustbin(1100,310,20,100);
	ground = new Ground(0,370,2000,20,true);
     paper1 = new Paper(false);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
 
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed () {

if(keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:85,y:-45});

}
}



