(function(exports) {
  'use strict';

  function Game(board, players, turnCounter) {
    this._board = board;
    this._players = players;
    this._turnCounter = turnCounter;
    this._gameOver = false;
  }

  Game.prototype = {
    board: function() {
      return this._board;
    },
    player: function(number) {
      return this._players[number];
    },
    play: function(lineNumber, fieldNumber) {
      if(this.isOver()) { return "Game Over!"; }
      var symbol = this.currentPlayer().symbol();

      if(this.board().takeField(lineNumber, fieldNumber, symbol)) {
        return this.processTurn(lineNumber, fieldNumber);
      } else { return "This field is taken"; }
    },
    processTurn: function(lineNumber, fieldNumber) {
      this.currentPlayer().updateScore(lineNumber, fieldNumber);
      this.checkIfOver();
      this._turnCounter.increment();
      if(this.isOver()) { return "Player " + this._winner.symbol() + " is the winner!"; }
    },
    checkIfOver: function() {
      var turnNumber = this._turnCounter.turnNumber();
      if(turnNumber >= 8 || this.currentPlayer().hasWon()) {
        this._winner = this.currentPlayer();
        this._gameOver = true;
      }
    },
    isOver: function() {
      return this._gameOver;
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
