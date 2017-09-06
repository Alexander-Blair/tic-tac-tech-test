describe("Board Printer", function() {
  var boardPrinter, mockLinePrinter, mockBoard;

  mockBoard = jasmine.createSpyObj('board', ['lines']);
  mockLinePrinter = jasmine.createSpyObj('linePrinter', ['printLine']);
  boardPrinter = new BoardPrinter(mockBoard, mockLinePrinter);

  describe("#print", function() {
    var mockBoardFields, expectedString, mockPrintedLine;

    mockBoardLines = [{},{},{}];
    mockPrintedLine = "|X||X||X|";

    mockBoard.lines.and.returnValue(mockBoardLines);
    mockLinePrinter.printLine.and.returnValue(mockPrintedLine);

    expectedString = ("\n" + mockPrintedLine).repeat(3) + "\n";

    it("asks the line printer to print all the lines", function() {
      boardPrinter.printBoard();
      expect(mockLinePrinter.printLine.calls.count()).toEqual(mockBoardLines.length);
    });

    it("prints a string of the whole board", function() {
      expect(boardPrinter.printBoard()).toEqual(expectedString);
    });
  });
});
