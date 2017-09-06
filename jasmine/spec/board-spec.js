describe("Board", function() {
  'use strict';

  var board, randomLine, randomField;

  function LineMock() {
    this.takeFieldCallCount = 0;
  }

  LineMock.prototype = {
    takeField: function(fieldNumber) {
      this.takeFieldCallCount++;
      this.takeFieldArgument = fieldNumber;
    },
    isFull: function() { return false; }
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
    it("informs a line to take a specific field", function() {
      randomLine = randomBetween(0, 2);
      randomField = randomBetween(0, 2);
      board.takeField(randomLine, randomField);
      expect(board.line(randomLine).takeFieldArgument).toEqual(randomField);
    });
  });

  describe("#isFull", function() {
    it("checks if the board has fields to take", function() {
      expect(board.isFull()).not.toBe(true);
    });

    it("returns true when the board is full", function() {
      LineMock.prototype.isFull = function() {
        return true;
      };
      expect(board.isFull()).toBe(true);
    });
  });
});
