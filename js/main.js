function Board () {
  this.spot1 = false;
  this.spot2 = false;
  this.spot3 = false;
  this.spot4 = false;
  this.spot5 = false;
  this.spot6 = false;
  this.spot7 = false;
  this.spot8 = false;
  this.spot9 = false;  
}

function Game (board) {
  this.board = board;
  this.players = {};
}

function Player(mark, name) {
  this.mark = mark;
  this.name = name;
}

Game.prototype.addPlayer = function(player)  {
  this.players[player.mark] = player;
}




let myBoard = new Board();
let myGame = new Game(myBoard);
let player1 = new Player("x","Liam");
let player2 = new Player("o","Daniel");
myGame.addPlayer(player1);
myGame.addPlayer(player2);

console.log(myBoard);
console.log(myGame);







