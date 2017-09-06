(function(exports) {
  'use strict';

  function FieldPrinter() {}

  FieldPrinter.prototype = {
    print: function(field) {
      return "|" + field.symbol() + "|";
    }
  };

  exports.FieldPrinter = FieldPrinter;
})(this);
