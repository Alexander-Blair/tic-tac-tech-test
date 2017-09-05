(function(exports) {
  'use strict';

  function Field() {
    this._taken = false;
  }

  Field.prototype = {
    isTaken: function() {
      return this._taken;
    },
    take: function() {
      if(this.isTaken()) { return false; }
      this._taken = true;
      return true;
    }
  };

  exports.Field = Field;
})(this);
