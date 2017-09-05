(function(exports) {
  'use strict';

  function FieldPrinter() {}

  FieldPrinter.prototype = {
    print: function(field) {
      return field.isTaken() ? '|X|' : '| |';
    }
  };

  exports.FieldPrinter = FieldPrinter;
})(this);
