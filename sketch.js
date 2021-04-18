
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper1,ground,bin1,bin2,bin3,binimg,binsprite,Slingshot1;

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
    paper1 = new paper(100,200);
    ground = new Ground(600,400,1200,10);

    bin1 = new bin(800,385,125,20);
	bin2 = new bin(745,315,20,160);
	bin3 = new bin(855,315,20,160);
	
  Slingshot1 = new SlingShot(paper1.body,{x: 200, y:200});
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  Engine.update(engine);

  paper1.display();
  ground.display();

  bin2.display();
  bin3.display();
  bin1.display();
  Slingshot1.display();

  textSize(20)
  fill("lightblue");
  
  text("Press UP arrow key to throw",500,100);
drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  Slingshot1.fly();
}