(function(exports) {
  'use strict';

  var numberOfLines = 3;

  function Board(line, field) {
    this._lines = generateBoard(line, field);
  }

  Board.prototype = {
    lines: function() {
      return this._lines;
    },
    line: function(lineNumber) {
      return this._lines[lineNumber];
    },
    takeField: function(lineNumber, fieldNumber) {
      return this.line(lineNumber).takeField(fieldNumber);
    }
  };

  function generateBoard(line, field) {
    var board = [];
    for(var i = 0; i < numberOfLines; i++) {
      board.push(new line(field));
    }
    return board;
  }

  exports.Board = Board;
})(this);