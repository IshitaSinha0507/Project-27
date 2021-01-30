
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   roof = new Roof(750,100,550,50);

   bob1 = new Bob(750,600,40,40);
   bob2 = new Bob(670,600,40,40);
   bob3 = new Bob(830,600,40,40);
   bob4 = new Bob(910,600,40,40);
   bob5 = new Bob(590,600,40,40);

   rope1 = new Rope(bob1.body, roof.body, -5*2,0);
   rope2 = new Rope(bob2.body, roof.body, -45*2,0);
   rope3 = new Rope(bob3.body, roof.body, 35*2,0);
   rope4 = new Rope(bob4.body, roof.body, 75*2,0);
   rope5 = new Rope(bob5.body, roof.body, -80*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}