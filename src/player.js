(function(exports) {

  function Player(symbol, scoreTracker) {
    this._symbol = symbol;
    this._scoreTracker = scoreTracker;
  }

  Player.prototype = {
    updateScore: function(line, field) {
      this._scoreTracker.add(line, field);
    },
    hasWon: function(winScore) {
      return this._scoreTracker.hasWon(winScore);
    },
    symbol: function() {
      return this._symbol;
    }
  };

  exports.Player = Player;
})(this);
