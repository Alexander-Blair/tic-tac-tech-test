(function(exports) {
  'use strict';

  function LinePrinter(fieldPrinter) {
    this._fieldPrinter = fieldPrinter;
  }

  LinePrinter.prototype = {
    printLine: function(line) {
      var lineString = '';
      var self = this;
      line.fields().forEach(function(field) {
        lineString += self.printField(field);
      });
      return lineString;
    },
    printField: function(field) {
      return this._fieldPrinter.print(field);
    }
  };

  exports.LinePrinter = LinePrinter;
})(this);
