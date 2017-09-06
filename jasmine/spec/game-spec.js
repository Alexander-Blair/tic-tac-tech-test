describe("Game", function() {
  'use strict';

  var game, mockBoard, mockPlayers, mockTurnCounter;

  mockPlayers = { 0: {}, 1: {} };
  mockTurnCounter = jasmine.createSpyObj('turnCounter', ['turnNumber', 'increment']);
  mockBoard = jasmine.createSpyObj('board', ['takeField', 'isFull']);
  game = new Game(mockBoard, mockPlayers, mockTurnCounter);

  it("is created with a board", function() {
    expect(game.board()).toEqual(mockBoard);
  });

  describe("#player", function() {
    var randomPlayerNumber = randomBetween(0, 1);
    
    it("returns a player object", function() {
      expect(game.player(randomPlayerNumber))
        .toEqual(mockPlayers[randomPlayerNumber]);
    });
  });

  describe("#currentPlayer", function() {
    var randomEvenNumber, randomOddNumber;

    randomEvenNumber = randomBetween(0, 4) * 2;
    it("returns first player if turn is even", function() {
      mockTurnCounter.turnNumber.and.returnValue(randomEvenNumber);
      expect(game.currentPlayer()).toEqual(mockPlayers[0]);
    });

    randomOddNumber = randomEvenNumber + 1;
    it("returns second player if turn is even", function() {
      mockTurnCounter.turnNumber.and.returnValue(randomOddNumber);
      expect(game.currentPlayer()).toEqual(mockPlayers[1]);
    });
  });

  describe("#play", function() {
    var randomLine, randomField;

    randomLine = randomBetween(0, 2);
    randomField = randomBetween(0, 2);

    it("can ask the board to take a specific field", function() {
      game.play(randomLine, randomField);
      expect(mockBoard.takeField).toHaveBeenCalledWith(randomLine, randomField);
    });

    it("asks the turn counter to move to the next round", function() {
      mockBoard.takeField.and.returnValue(true);
      game.play(randomLine, randomField);
      expect(mockTurnCounter.increment).toHaveBeenCalled();
    });
  });

  describe("#isOver", function() {
    it("game is over when the board is full", function() {
      mockBoard.isFull.and.returnValue(true);
      expect(game.isOver()).toEqual(true);
    });
  });
});
