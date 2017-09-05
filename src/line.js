(function(exports) {
  'use strict';

  var numberOfFields = 3;

  function Line(field) {
    this._fields = generateLine(field);
  }

  Line.prototype = {
    fields: function() {
      return this._fields;
    }
  };

  function generateLine(field) {
    var line = [];
    for(var i = 0; i < numberOfFields; i++) {
      line.push(new field());
    }
    return line;
  }

  exports.Line = Line;
})(this);
