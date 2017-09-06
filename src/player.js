(function(exports) {

  function Player(symbol, fieldList) {
    this._symbol = symbol;
    this._fieldList = fieldList;
  }

  Player.prototype = {
    addField: function(line, field) {
      this._fieldList.add(line, field);
    },
    symbol: function() {
      return this._symbol;
    },
    fieldList: function() {
      return this._fieldList;
    }
  };

  exports.Player = Player;
})(this);
