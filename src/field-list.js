(function(exports) {
  'use strict';

  function FieldList() {
    this._fields = [];
  }

  FieldList.prototype = {
    fields: function() {
      return this._fields;
    },
    add: function(line, field) {
      this._fields.push({ 'row': line, 'column': field });
    }
  };

  exports.FieldList = FieldList;
})(this);
