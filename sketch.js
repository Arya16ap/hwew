var iphone;
var game;
var player,computer,ball;
var gameState = "lvl1";
function setup() {
  createCanvas(800,400);
  var iphone = createSprite(400,200,800,400);
  iphone.shapeColor = "black";

  var game = createSprite(100,50,50,50);
  game.shapeColor = "red";

  var player = createSprite(200,200,50,50);
  player.visible = false;

  var computer = createSprite(100,200,50,50);
  computer.visible = false;

  var ball = createSprite(200,100,50,50);
  ball.visible = false;
}

function draw() {
  background(255,255,255); 

  if(gameState === "lvl1"){
    
  }
  
      if(mouseIsPressed(game)){
        gameState = "lvl2";
        background("white");
        game.visible = false;
      player.visible = true;
      computer.visible = true;
      ball.visible = true;
      }
    if(gameState === "lvl2"){
      
    }

  
  
    
  
drawSprites();
}