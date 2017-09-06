(function(exports) {
  'use strict';

  function TurnCounter() {
    this._turnNumber = 0;
  }

  TurnCounter.prototype = {
    turnNumber: function() {
      return this._turnNumber;
    },
    increment: function() {
      this._turnNumber++;
    }
  };

  exports.TurnCounter = TurnCounter;
})(this);
