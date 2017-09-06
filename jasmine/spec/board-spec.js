describe("Board", function() {
  'use strict';

  var board;

  function LineMock() {}

  LineMock.prototype = {
    takeField: function(fieldNumber) {
      this.takeFieldArguments = fieldNumber;
    }
  };

  board = new Board(LineMock);

  it("is created with a line array of length 3", function() {
    expect(board.lines().length).toEqual(3);
  });

  it("holds an array of line objects based on the constructor passed in", function() {
    for(var i = 0; i < 3; i++) {
      expect(board.line(i) instanceof LineMock).toBe(true);
    }
  });

  describe("#takeField", function() {
    it("asks line object to call takeField with field number and symbol", function() {
      var randomLine, randomField;

      randomLine = randomBetween(0, 2);
      randomField = randomBetween(0, 2);

      board.takeField(randomLine, randomField);
      expect(board.line(randomLine).takeFieldArguments)
        .toEqual(randomField);
    });
  });
});
