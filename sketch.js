
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;	

	//Create the Bodies Here.
	var ball_options = {
			isStatic :false,
			restitution : 0.3,
			friction : 0 ,
			
	}

	ball = Bodies.circle(200,750,25,ball_options);
	World.add(world,ball);

	ground = new Ground(800, 790, 1600, 20);
	leftSide = new Ground(1100, 750, 20, 250);
	rightSide = new Ground(1400, 750, 20, 250);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  push()
  fill("yellow")
  ellipse(ball.position.x, ball.position.y, 50, 50);
  pop()

  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:-0.08});
	}
}


