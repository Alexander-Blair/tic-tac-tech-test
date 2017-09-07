(function(exports) {
  'use strict';

  function Line(field, boardSize) {
    this._fields = generateLine(field, boardSize);
  }

  Line.prototype = {
    fields: function() {
      return this._fields;
    },
    field: function(fieldNumber) {
      return this.fields()[fieldNumber];
    },
    takeField: function(fieldNumber) {
      return this.field(fieldNumber).take();
    }
  };

  function generateLine(field, boardSize) {
    var line = [];
    for(var i = 0; i < boardSize; i++) {
      line.push(new field());
    }
    return line;
  }

  exports.Line = Line;
})(this);
