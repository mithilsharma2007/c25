const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;// name spacing

var myWorld,myEngine;
var ground;
var b1,b2;
var backgroundimage
function preload(){
  backgroundimage=loadImage("sprites/bg.png")
}
function setup() {
  createCanvas(1200,400);
 myEngine=Engine.create();
  myWorld=myEngine.world; 
  
  //console.log(ground);
  ground=new Ground(600,height,1200,20)
  b1=new Box(700,320,70,70);
  b2=new Box(920,320,70,70);
  p1=new Pig(810,350)
  l1=new Log(810,260,300,PI/2)
  b3=new Box(700,240,70,70);
  b4=new Box(920,240,70,70); 
  p3=new Pig(810,220)
  l3=new Log(810,180,300,PI/2)
  b5=new Box(810,160,70,70); 
  l4=new Log(760,120,150,PI/7)
  l5=new Log(870,120,150,-PI/7)
  bird=new Bird(100,100)
}

function draw() {
  background(backgroundimage);
  Engine.update(myEngine); 
  ground.display();
  b1.display();
  b2.display();
  p1.display();
  l1.display();
  b3.display();
  b4.display();
  p3.display();
  l3.display();
  b5.display();
  l4.display();
  l5.display();
  bird.display();
}