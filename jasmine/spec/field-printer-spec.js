describe("Field Printer", function() {
  'use strict';

  var fieldPrinter, fieldMock;

  fieldMock = jasmine.createSpyObj('field', ['isTaken']);
  fieldPrinter = new FieldPrinter();

  describe("#print", function() {
    it("returns an X if a field has been taken", function() {
      fieldMock.isTaken.and.returnValue(true);
      expect(fieldPrinter.print(fieldMock)).toEqual('X');
    });
    it("returns a string with one space if a field has not been taken", function() {
      fieldMock.isTaken.and.returnValue(false);
      expect(fieldPrinter.print(fieldMock)).toEqual(' ');
    });
  });
});
