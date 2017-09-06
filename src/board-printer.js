(function(exports) {

  function BoardPrinter(board, linePrinter) {
    this._board = board;
    this._linePrinter = linePrinter;
  }

  BoardPrinter.prototype = {
    printBoard: function() {
      var toReturn = "\n";
      var self = this;
      this._board.lines().forEach(function(line) {
        toReturn += self.printLine(line);
      });
      return toReturn;
    },
    printLine: function(line) {
      return this._linePrinter.printLine(line) + "\n";
    }
  };
  exports.BoardPrinter = BoardPrinter;
})(this);
