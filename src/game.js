(function(exports) {
  'use strict';

  function Game(board, players, turnCounter) {
    this._board = board;
    this._players = players;
    this._turnCounter = turnCounter;
  }

  Game.prototype = {
    board: function() {
      return this._board;
    },
    player: function(number) {
      return this._players[number];
    },
    play: function(lineNumber, fieldNumber) {
      var symbol = this.currentPlayer().symbol();
      if(this.board().takeField(lineNumber, fieldNumber, symbol)) {
        this.currentPlayer().addField(lineNumber, fieldNumber);
        this._turnCounter.increment();
      }
    },
    isOver: function() {
      var turnNumber = this._turnCounter.turnNumber();

      if(turnNumber < 5) {
        return false;
      } else if(turnNumber > 8) {
        return true;
      }
    },
    currentPlayer: function() {
      var playerNumber = isEven(this._turnCounter.turnNumber()) ? 0 : 1;
      return this.player(playerNumber);
    }
  };

  function isEven(n) {
    return n % 2 == 0;
  }

  exports.Game = Game;
})(this);
