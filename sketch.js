var paper,rect1,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

    ground=new Ground(600,390,1200,20);
    rect1=new Dustbin(900,370,200,20);
    
    paper=new Paper(200,200,20,20);

}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  rect1.display();
  paper.display();

  drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-17});
		
	}
	

}
