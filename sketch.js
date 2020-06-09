var canvas,database,backimage;
var gamestate=0;
var playercount;
var form,player,game;

function setup(){
  database=firebase.database();
  canvas =createCanvas(500,500);

    //console.log(database);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
 
}

