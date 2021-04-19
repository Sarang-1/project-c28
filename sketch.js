
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper1,ground,bin1,bin2,bin3,binimg,binsprite,Launcher1;

function preload()
{
	binimg = loadImage("images/dustbin.png")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

  binsprite = createSprite(800,315,50,50);
  binsprite.addImage(binimg);
  binsprite.scale=0.5;

	//Create the Bodies Here.
    paper1 = new paper(150,200);
    ground = new Ground(600,400,1200,10);

    bin1 = new bin(800,395,125,10);
	bin2 = new bin(735,315,10,160);
	bin3 = new bin(865,315,10,160);
	
  Launcher1 = new Launcher(paper1.body,{x: 200, y:170});
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  Engine.update(engine);

  paper1.display();
  ground.display();
Launcher1.display();
  
  

  
drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  Launcher1.fly();
}