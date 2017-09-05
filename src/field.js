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
      this._taken = true;
    }
  };

  exports.Field = Field;
})(this);
