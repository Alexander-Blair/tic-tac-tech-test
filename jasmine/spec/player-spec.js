describe("Player", function() {
  'use strict';

  var player, playerSymbol, mockScoreTracker;

  mockScoreTracker = jasmine.createSpyObj('scoreTracker', ['hasWon', 'add']);
  playerSymbol = "X";
  player = new Player(playerSymbol, mockScoreTracker);

  it("is initialized with its own symbol", function() {
    expect(player.symbol()).toEqual(playerSymbol);
  });

  describe("#updateScore", function() {
    var randomLine, randomField;

    randomLine = randomBetween(0, 2);
    randomField = randomBetween(0, 2);

    it("asks the field list to store a field reference", function() {
      player.updateScore(randomLine, randomField);
      expect(mockScoreTracker.add).toHaveBeenCalledWith(randomLine, randomField);
    });
  });
});
