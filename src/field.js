(function(exports) {
  'use strict';

  function Field() {
    this._taken = false;
    this._symbol = " ";
  }

  Field.prototype = {
    take: function(symbol) {
      if(this.isTaken()) { return false; }
      this.setSymbol(symbol);
      this._taken = true;
      return true;
    },
    setSymbol: function(symbol) {
      this._symbol = symbol;
    },
    symbol: function() {
      return this._symbol;
    },
    isTaken: function() {
      return this._taken;
    }
  };

  exports.Field = Field;
})(this);
