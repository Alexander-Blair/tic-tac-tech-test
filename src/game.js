(function(exports) {
  'use strict';

  function Game(board, playerOne, playerTwo) {
    this._board = board;
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  Game.prototype = {
    board: function() {
      return this._board;
    },
    takeField: function(lineNumber, fieldNumber) {
      return this.board().takeField(lineNumber, fieldNumber);
    },
    isOver: function() {
      return this._board.isFull();
    }
  };

  exports.Game = Game;
})(this);
