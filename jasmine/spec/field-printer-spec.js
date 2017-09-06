describe("Field Printer", function() {
  'use strict';

  var fieldPrinter, fieldMock;

  fieldMock = jasmine.createSpyObj('field', ['isTaken', 'symbol']);
  fieldPrinter = new FieldPrinter();

  describe("#print", function() {
    var symbol = "O";

    it("returns field's symbol with pipes either side", function() {
      fieldMock.symbol.and.returnValue(symbol);
      expect(fieldPrinter.print(fieldMock)).toEqual("|" + symbol + "|");
    });
  });
});
