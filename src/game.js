(function(exports) {
  'use strict';

  function Game(board, players, turnCounter) {
    this._board = board;
    this._players = players;
    this._turnCounter = turnCounter;
  }

  Game.prototype = {
    play: function(lineNumber, fieldNumber) {
      if(this.gameOver()) { return "Game Over!"; }
      if(this._board.takeField(lineNumber, fieldNumber)) {
        return this.processTurn(lineNumber, fieldNumber);
      } else { return "This field is taken"; }
    },
    processTurn: function(lineNumber, fieldNumber) {
      this.currentPlayer().updateScore(lineNumber, fieldNumber);
      this.checkIfGameOver();
      if(this.gameOver()) { return this.endGameMessage(); }
      this._turnCounter.increment();
    },
    checkIfGameOver: function() {
      if(this.currentPlayer().hasWon(this._board.size()) || this.boardComplete()) {
        this._gameOver = true;
      }
    },
    gameOver: function() {
      return this._gameOver;
    },
    boardComplete: function() {
      return this._turnCounter.turnNumber() >= this._board.totalFields() - 1;
    },
    currentPlayer: function() {
      var playerNumber = isEven(this._turnCounter.turnNumber()) ? 0 : 1;
      return this._players[playerNumber];
    },
    endGameMessage: function() {
      if(this.currentPlayer().hasWon(this._board.size())) {
        return "Player " + this.currentPlayer().symbol() + " is the winner!";
      } else { return "Nobody wins!"; }
    }
  };

  function isEven(n) {
    return n % 2 == 0;
  }

  exports.Game = Game;
})(this);
