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
      this.board().takeField(lineNumber, fieldNumber);
    }
  };

  exports.Game = Game;
})(this);
