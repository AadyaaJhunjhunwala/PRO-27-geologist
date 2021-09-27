
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer , iron, sand,rubber, stone, plane

function preload()
{
	
}

function setup () {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

iron= new Iron(33,28)
hammer= new Hammer(45,56)
stone= new Stone(15,88)
rubber= new Rubber (120,300,80)
sand= new Sand(126,350,90)
plane= new Plane(400,700)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("beige");
  
rubber.display()
stone.display()
sand.display()
iron.display()
hammer.display()


  drawSprites();
 
}



