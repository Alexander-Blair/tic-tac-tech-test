(function(exports) {
  'use strict';

  function ScoreTracker(boardSize) {
    this._rows = {};
    this._columns = {};
    this._diag = 0;
    this._reverseDiag = 0;
    this._won = false;
    this._winScore = boardSize;
  }

  ScoreTracker.prototype = {
    hasWon: function() {
      return this._won;
    },
    add: function(row, column) {
      this.increment('_rows', row);
      this.increment('_columns', column);
      this.incrementDiagonals(row, column);
      this.updateWinStatus(row, column);
    },
    increment: function(property, number) {
      this[property][number] = ++this[property][number] || 1;
    },
    incrementDiagonals: function(row, column) {
      if(row === column) this._diag++;
      if(row + column === this._winScore - 1) {
        this._reverseDiag++;
      }
    },
    updateWinStatus: function(row, column) {
      if(this._rows[row] === this._winScore ||
         this._columns[column] === this._winScore ||
         this._diag === this._winScore ||
         this._reverseDiag === this._winScore)
       this._won = true;
    }
  };

  exports.ScoreTracker = ScoreTracker;
})(this);
