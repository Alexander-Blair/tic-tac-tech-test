(function(exports) {
  'use strict';

  function Field() {
    this._taken = false;
  }

  Field.prototype = {
    take: function() {
      if(this.isTaken()) { return false; }
      this._taken = true;
      return true;
    },
    isTaken: function() {
      return this._taken;
    }
  };

  exports.Field = Field;
})(this);
