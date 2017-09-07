(function(exports) {
  'use strict';

  function Board(line, field, size) {
    this._lines = generateBoard(line, field, size);
    this._size = size;
  }

  Board.prototype = {
    takeField: function(lineNumber, fieldNumber) {
      return this.line(lineNumber).takeField(fieldNumber);
    },
    line: function(lineNumber) {
      return this.lines()[lineNumber];
    },
    lines: function() {
      return this._lines;
    },
    size: function() {
      return this._size;
    },
    totalFields: function() {
      return Math.pow(this.size(), 2);
    }
  };

  function generateBoard(line, field, size) {
    var board = [];
    for(var i = 0; i < size; i++) {
      board.push(new line(field, size));
    }
    return board;
  }

  exports.Board = Board;
})(this);
