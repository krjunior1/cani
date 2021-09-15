const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ninja, ninjaAttack, ninjaRun, ninjaDead, ninjaIdle, ninjaJump, ninjaWalk;
var knight;
var bg, bgImg, ground, engine, world;
var edges, edges;

function preload(){
bgImg = loadImage ("sprites/BG.png");
//ninjaWalk = loadAnimation ("R1.png, R2.png, R3.png, R4.png, R5.png, R6.png, R7.png, R8.png, R9.png, R10.png");
}

function setup(){
createCanvas (1365, 600);
engine = Engine.create();
world = engine.world;
ninja = createSprite (300, 500, 50, 50);
edges = createEdgeSprites();
ground = new Ground (700, height, 1400, 20);
}

function draw (){
background(bgImg);
Engine.update(engine);
ground.display();
ninja.display();
drawSprites();
}