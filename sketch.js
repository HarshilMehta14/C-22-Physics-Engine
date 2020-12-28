const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine, myWorld, box, ground, ball;

function setup() {
  createCanvas(600,600);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  box = Bodies.rectangle(280,280,50,50);

  World.add(myWorld,box);
  
  var option = {
    isStatic : true
  }
  ground = Bodies.rectangle(300,590,600,20,option);

  World.add(myWorld,ground);

  var ball_option = {
    restitution : 1
  }
  ball = Bodies.circle(400,280,25,ball_option);

  World.add(myWorld,ball);
  console.log(box);
}

function draw() {
  background(0);  
  
  Engine.update(myEngine);
  rectMode(CENTER);

  rect (box.position.x,box.position.y,50,50);
  rect (ground.position.x,ground.position.y,600,20);

  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,25,25);
}