(function(exports) {
  'use strict';

  function ScoreTracker(boardSize) {
    this._rowScores = {};
    this._columnScores = {};
    this._diagScore = 0;
    this._reverseDiagScore = 0;
    this._winScore = boardSize;
  }

  ScoreTracker.prototype = {
    hasWon: function(winScore) {
      if(this.scoresArray.includes(winScore)) return true;
    },
    add: function(row, column) {
      this.increment('_rowScores', row);
      this.increment('_columnScores', column);
      this.incrementDiagonals(row, column);
      this.updateScoresArray(row, column);
    },
    increment: function(property, number) {
      this[property][number] = ++this[property][number] || 1;
    },
    incrementDiagonals: function(row, column) {
      if(row === column) this._diagScore++;
      if(row + column === this._winScore - 1) {
        this._reverseDiagScore++;
      }
    },
    updateScoresArray: function(row, column) {
      this.scoresArray = [
        this._rowScores[row],
        this._columnScores[column],
        this._diagScore,
        this._reverseDiagScore
      ];
    }
  };

  exports.ScoreTracker = ScoreTracker;
})(this);
