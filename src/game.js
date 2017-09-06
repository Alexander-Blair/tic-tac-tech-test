(function(exports) {
  'use strict';

  function Game(board) {
    this._board = board;
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
