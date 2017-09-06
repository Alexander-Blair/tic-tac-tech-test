(function(exports) {

  function Player(symbol) {
    this._symbol = symbol;
  }

  Player.prototype = {
    symbol: function() {
      return this._symbol;
    }
  };

  exports.Player = Player;
})(this);
