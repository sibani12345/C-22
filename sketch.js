const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var world,engine;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  //world is my engine's world
  world = engine.world;

  var options = {
    isStatic : true,
  }

  ground = Bodies.rectangle(200, 390, 400, 20,options);
  World.add(world,ground);

  var option1 = {
    restitution : 1.0,
  }


  ball = Bodies.circle(200, 200,25,option1);
  World.add(world,ball);


  console.log(ground);
}

function draw() {

  background("black"); 
  Engine.update(engine); 
 rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,50,50);

}
