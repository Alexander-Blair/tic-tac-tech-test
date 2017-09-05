describe("Game", function() {
  'use strict';

  var game, mockBoard, randomLine, randomField;

  mockBoard = jasmine.createSpyObj('board', ['takeField']);
  game = new Game(mockBoard);

  it("is created with a board", function() {
    expect(game.board()).toEqual(mockBoard);
  });

  describe("#takeField", function() {
    it("can ask the board to take a specific field", function() {
      randomLine = randomBetween(0, 2);
      randomField = randomBetween(0, 2);
      game.takeField(randomLine, randomField);
      expect(mockBoard.takeField).toHaveBeenCalledWith(randomLine, randomField);
    });
  });
});
