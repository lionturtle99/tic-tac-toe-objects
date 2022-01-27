[1][2][3]
[4][5][6]
[7][8][9]


a game object to store both the board and the players
a board constructor to store our players
a player constructor to store our players mark and id
a Board.prototype to store our player marks








### Describe Game(board);  
Test: "It should create an object with the correct properties."  

Code:  
let game = new Game(board)
Expected Output: Game{board: players:}


### Describe Player();  
Test: "It should create an object with the correct properties."  

Code:  
let player1 = new Player(id, name)
Expected Output: player1{id: name:}

### Describe Game.prototype.addPlayer();  
Test: "It should add an object with an id to the game object"  

Code:  
game.prototype.addPlayer(player) {
  this.player[mark] = player;
}
Expected Output: Game.player{player: X: player: O:}


### Describe Board();  
Test: "It should create an object with the correct properties."  

Code:  
let board = new board()
Expected Output: board{spot1: false, spot2: false, spot3: false......spot9:false}

### Describe Board.prototype.addMove("playerMark",spot);  
Test: "It should add a move to the board"  

Code:  
board.addMove("x",6);
board;
Expected Output: board{1: false, 2: false, 3: false, 4: false, 5: false, 6: "x", 7: false, 8: false, 9: false}

board.addMove("o",2);
board;
Expected Output: board{1: false, 2: "o", 3: false, 4: false, 5: false, 6: "x", 7: false, 8: false, 9: false}


### Describe Board.prototype.checkForWinner();  
Test: "It should loop through the key values of an object and use a switch conditional to check for a winner"  

Code:  
let result = board.checkForWinner("x")
Expected Output: x: 3,4,5