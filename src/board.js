(function(exports) {
  'use strict';

  var numberOfLines = 3;

  function Board(line, field) {
    this._lines = generateBoard(line, field);
  }

  Board.prototype = {
    line: function(lineNumber) {
      return this.lines()[lineNumber];
    },
    lines: function() {
      return this._lines;
    },
    takeField: function(lineNumber, fieldNumber) {
      return this.line(lineNumber).takeField(fieldNumber);
    },
    isFull: function() {
      if(this.lineStatusArray().includes(false)) {
        return false;
      } else { return true; }
    },
    lineStatusArray: function() {
      return this.lines().map(function(line) {
        return line.isFull();
      });
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
