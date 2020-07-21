const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var bg = "sprites/bg2.jpg";


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(10,300,500,20);
  ground = new box(0,390,10000,20);
  box2 = new target(250,200,50,70)
  box3 = new target(250,100,50,70);
  box4 = new target(250,0,50,70);


  wall = new box(790,0,5,50000);

  

   shooter = new paper(100,200,10);                                  
  chain1 = new SlingShot(shooter.body , {x : 100 , y : 200});

  
}

function draw() {
  background(bg);  
  Engine.update(engine);
box1.display2();

ground.display();
shooter.display();
chain1.display();
box2.display();
box3.display2();
box4.display3();
wall.display();
box2.score();
box3.score();
box4.score();
text(score,750,40);
if(score === 297){
  text("you win!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",400,200);
}
drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});

}

function keyPressed(){
  if(keyCode === 32){
     shooter.attach({x : 100 , y : 200});
     Matter.Body.setPosition(shooter.body, {x:100, y:200});
  }
}

function mouseReleased(){
  chain1.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      background(bg) ;
  }
  else{
    background("white");
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
