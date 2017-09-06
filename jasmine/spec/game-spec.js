describe("Game", function() {
  'use strict';

  var game, mockBoard, mockPlayerOne, mockPlayerTwo, mockPlayers, mockTurnCounter;

  mockPlayerOne = jasmine.createSpyObj('player', ['symbol']);
  mockPlayerTwo = jasmine.createSpyObj('player', ['symbol']);
  mockPlayers = { 0: mockPlayerOne, 1: mockPlayerTwo };
  mockTurnCounter = jasmine.createSpyObj('turnCounter', ['turnNumber', 'increment']);
  mockBoard = jasmine.createSpyObj('board', ['takeField', 'isFull']);
  game = new Game(mockBoard, mockPlayers, mockTurnCounter);

  it("is created with a board", function() {
    expect(game.board()).toEqual(mockBoard);
  });

  describe("#player", function() {
    var randomPlayerNumber = randomBetween(0, 1);

    it("returns player based on the number passed in", function() {
      expect(game.player(randomPlayerNumber))
        .toEqual(mockPlayers[randomPlayerNumber]);
    });
  });

  describe("#currentPlayer", function() {
    var randomEvenNumber, randomOddNumber;

    randomEvenNumber = randomBetween(0, 4) * 2;
    it("returns first player if turn number is even", function() {
      mockTurnCounter.turnNumber.and.returnValue(randomEvenNumber);
      expect(game.currentPlayer()).toEqual(mockPlayerOne);
    });

    randomOddNumber = randomEvenNumber + 1;
    it("returns second player if turn number is odd", function() {
      mockTurnCounter.turnNumber.and.returnValue(randomOddNumber);
      expect(game.currentPlayer()).toEqual(mockPlayerTwo);
    });
  });

  describe("#play", function() {
    var randomLine, randomField;

    randomLine = randomBetween(0, 2);
    randomField = randomBetween(0, 2);

    it("can ask the board to take a specific field", function() {
      var randomEvenNumber = randomBetween(0, 4) * 2;

      game.play(randomLine, randomField);
      expect(mockBoard.takeField)
        .toHaveBeenCalledWith(randomLine, randomField, mockPlayerOne.symbol());
    });

    it("asks the turn counter to move to the next round", function() {
      mockBoard.takeField.and.returnValue(true);
      game.play(randomLine, randomField);
      expect(mockTurnCounter.increment).toHaveBeenCalled();
    });
  });

  describe("#isOver", function() {
    it("game is not over when turn number is less than 9", function() {
      var randomNumberBelowNine = randomBetween(0, 8);

      mockTurnCounter.turnNumber.and.returnValue(randomNumberBelowNine);
      expect(game.isOver()).toEqual(false);
    });

    it("game is over when ninth turn has been completed", function() {
      mockTurnCounter.turnNumber.and.returnValue(9);
      expect(game.isOver()).toEqual(true);
    });
  });
});
