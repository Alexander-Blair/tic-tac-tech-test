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
    currentPlayer: function() {
      var playerNumber = isEven(this._turnCounter.turnNumber()) ? 0 : 1;
      return this.player(playerNumber);
    },
    play: function(lineNumber, fieldNumber) {
      if(this.isOver()) { return "Game Over!"; }
      if(this.board().takeField(lineNumber, fieldNumber)) {
        this.processTurn(lineNumber, fieldNumber);
      } else { return "This field is taken"; }
      if(this.isOver()) { return "Player " + this._winner.symbol() + " is the winner!"; }
    },
    processTurn: function(lineNumber, fieldNumber) {
      this.currentPlayer().updateScore(lineNumber, fieldNumber);
      this.checkIfOver();
      this._turnCounter.increment();
    },
    checkIfOver: function() {
      if(this._turnCounter.turnNumber() >= 8 || this.currentPlayer().hasWon()) {
        this._winner = this.currentPlayer();
        this._gameOver = true;
      }
    },
    isOver: function() {
      return this._gameOver;
    }
  };

  function isEven(n) {
    return n % 2 == 0;
  }

  exports.Game = Game;
})(this);
