var database;
var position;
var canvas,gameState = 0;
var playerCount,backgroundIMG;
var form,game,player;


function setup(){
  
  createCanvas(400,400);
  database = firebase.database();
  console.log(database);
  
  game = new Game();
  game.getstate();
  game.start();
}

function draw(){
  background("white");
  
    // drawSprites();
  
}
