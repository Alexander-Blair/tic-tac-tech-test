describe("Line Printer", function() {
  'use strict';

  var linePrinter, mockFieldPrinter, mockLine;

  mockLine = jasmine.createSpyObj('line', ['fields']);
  mockFieldPrinter = jasmine.createSpyObj('fieldPrinter', ['print']);
  linePrinter = new LinePrinter(mockFieldPrinter);

  describe("#print", function() {
    var mockLineFields, expectedString;

    expectedString = "|X||X||X|";
    mockLineFields = [{},{},{}];
    mockLine.fields.and.returnValue(mockLineFields);
    mockFieldPrinter.print.and.returnValue("|X|");

    it("asks the field printer to return the field as a string", function() {
      linePrinter.printLine(mockLine);
      expect(mockFieldPrinter.print.calls.count()).toEqual(mockLineFields.length);
    });

    it("returns the line as a string", function() {
      expect(linePrinter.printLine(mockLine)).toEqual(expectedString);
    });
  });
});
