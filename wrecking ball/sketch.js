const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1;
var ball;
var roper;
var box2,box3,box4,box5,box6,box7,box8,box9,box10;

function preload(){
  
}

function setup() {
  createCanvas(1080, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(900, 100, 70, 70);
  ball=new Ball(80,40,80,80);
  roper=new Rope(ball.body,{x:580,y:80});
  box2=new Box(900,100,70,70);
  box3=new Box(900,100,70,70);
  box4=new Box(900,100,70,70);
  box5=new Box(900,100,70,70);
  box6=new Box(750,100,70,70);
  box7=new Box(750,100,70,70);
  box8=new Box(750,100,70,70);
  box9=new Box(750,100,70,70);
  box10=new Box(750,100,70,70);
}

function draw() {
  background('#e9e9e9');
  Engine.update(engine);
  ground.display();
  
  

  box1.display();
  ball.display();
  roper.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


