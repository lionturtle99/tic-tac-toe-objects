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
  this.activePlayer = "x";
}

function Player(mark, name) {
  this.mark = mark;
  this.name = name;
}

Game.prototype.addPlayer = function(player)  {
  this.players[player.mark] = player;
}



Board.prototype.checkForWinner = function(currentPlayer) {
  console.log("current player is " + currentPlayer);
  for (const spot in myBoard) {
    if (myBoard.hasOwnProperty(spot)) {
      //console.log(spot + ": " + myBoard[spot]);

      switch (spot) {
        case "spot1": 
          if (myBoard["spot1"] === currentPlayer && myBoard["spot2"] === currentPlayer && myBoard["spot3"] === currentPlayer) {
            return currentPlayer + ": 1,2,3";
            break;
          } else if (myBoard["spot1"] === currentPlayer && myBoard["spot4"] === currentPlayer && myBoard["spot7"] === currentPlayer) {
            return currentPlayer + ": 1,4,7";
            break;
          } else if (myBoard["spot1"] === currentPlayer && myBoard["spot5"] === currentPlayer && myBoard["spot9"] === currentPlayer) {
            return currentPlayer + ": 1,5,9";
            break;
          }
        case "spot2":
          if (myBoard["spot2"] === currentPlayer && myBoard["spot5"] === currentPlayer && myBoard["spot8"] === currentPlayer) {
            return currentPlayer + ": 2,5,8";
            break;
          }
        case "spot3":
          if (myBoard["spot3"] === currentPlayer && myBoard["spot6"] === currentPlayer && myBoard["spot9"] === currentPlayer) {
            return currentPlayer + ": 3,6,9";
            break;
          } else if (myBoard["spot3"] === currentPlayer && myBoard["spot5"] === currentPlayer && myBoard["spot7"] === currentPlayer) {
            return currentPlayer + ": 3,5,7";
            break;
          }
        case "spot4":
          if (myBoard["spot4"] === currentPlayer && myBoard["spot5"] === currentPlayer && myBoard["spot6"] === currentPlayer) {
            return currentPlayer + ": 4,5,6";
            break;
          }
        case "spot7":
          if (myBoard["spot7"] === currentPlayer && myBoard["spot8"] === currentPlayer && myBoard["spot9"] === currentPlayer) {
            return currentPlayer + ": 7,8,9";
            break;
          }
        default: 
          return false;
          break;
      }
    }
  }  
}

// Board.prototype.noOneWins = function() {
//   for (const spot in myBoard) {
//     if (myBoard.hasOwnProperty(spot)) {
//       if (myBoard[spot] === false) {
//         return false;
//       } else{
//         return true;
//       }
//     }
//   }
// }



let myBoard = new Board();
let myGame = new Game(myBoard);
let player1 = new Player("x","Liam");
let player2 = new Player("o","Daniel");
myGame.addPlayer(player1);
myGame.addPlayer(player2);

myBoard.checkForWinner("x");
myBoard.checkForWinner("o");


$(document).ready(function () {
  for (let i = 1; i <= 9; i++) {
    $("#spot-" + i).on("click", function() {
      if (myGame.activePlayer === "x") {
        if (myBoard["spot" + i] === false) {
          $("#spot-" + i + "-mark").html("x");
          myBoard["spot" + i] = "x";
          myBoard.checkForWinner(myGame.activePlayer);
          if ((myBoard.checkForWinner(myGame.activePlayer)) !== false) {
            $("#mark").html(myGame.activePlayer);
            $("#board").fadeOut(500);
            $(".result").fadeIn(500);
            $(".result").fadeOut(5000, function() {
              location.reload(true);
            });
          }
          myGame.activePlayer = "o"; //switch player
        } else {
        alert("Someone has already taken this spot")
        }
      } else { //if player is o
        if (myBoard["spot" + i] === false) {
          $("#spot-" + i + "-mark").html("o");
          myBoard["spot" + i] = "o";
          myBoard.checkForWinner(myGame.activePlayer); 
          if ((myBoard.checkForWinner(myGame.activePlayer)) !== false) {
            $("#mark").html(myGame.activePlayer);
            $("#board").fadeOut(500);
            $(".result").fadeIn(500);
            $(".result").fadeOut(5000, function() {
              location.reload(true);
            });

          }
          myGame.activePlayer = "x";
        } else {
          alert("Someone has already taken this spot")
        }
      }
      // if (myBoard.noOneWins() === true) {
      //   alert("No one wins");
      //   setTimeout(location.reload(true), 5000);
      // }
    });
  }
});