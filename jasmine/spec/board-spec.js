describe("Board", function() {
  'use strict';

  var board, defaultSize, fieldMock;

  function LineMock() {}

  LineMock.prototype = {
    takeField: function(fieldNumber) {
      this.takeFieldArguments = fieldNumber;
    }
  };

  fieldMock = {};
  defaultSize = 3;
  board = new Board(LineMock, fieldMock, defaultSize);

  it("is created with a line array of defined length", function() {
    expect(board.lines().length).toEqual(defaultSize);
  });

  it("holds an array of line objects based on the constructor passed in", function() {
    for(var i = 0; i < defaultSize; i++) {
      expect(board.line(i) instanceof LineMock).toBe(true);
    }
  });

  describe("#takeField", function() {
    it("asks line object to call takeField with field number and symbol", function() {
      var randomLine, randomField;

      randomLine = randomBetween(0, defaultSize - 1);
      randomField = randomBetween(0, defaultSize - 1);

      board.takeField(randomLine, randomField);
      expect(board.line(randomLine).takeFieldArguments)
        .toEqual(randomField);
    });
  });
});
