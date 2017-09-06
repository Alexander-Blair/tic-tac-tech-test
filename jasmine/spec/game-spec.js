describe("Game", function() {
  'use strict';

  var game, mockBoard, mockPlayerOne, mockPlayerTwo, mockPlayers, mockTurnCounter;

  mockPlayerOne = jasmine.createSpyObj('player', ['symbol', 'updateScore', 'hasWon']);
  mockPlayerTwo = jasmine.createSpyObj('player', ['symbol', 'updateScore', 'hasWon']);
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

    beforeAll(function() {
      mockTurnCounter.turnNumber.and.returnValue(0);
      mockBoard.takeField.and.returnValue(true);
      game.play(randomLine, randomField);
    });

    it("can ask the board to take a specific field", function() {
      var randomEvenNumber = randomBetween(0, 4) * 2;

      expect(mockBoard.takeField)
      .toHaveBeenCalledWith(randomLine, randomField);
    });

    it("asks the current player to call add field function", function() {
      expect(mockPlayerOne.updateScore)
      .toHaveBeenCalledWith(randomLine, randomField);
    });

    it("asks the turn counter to move to the next round", function() {
      expect(mockTurnCounter.increment).toHaveBeenCalled();
    });
    it("gives a win message if a player has won", function() {
      mockPlayerOne.hasWon.and.returnValue(true);
      mockPlayerOne.symbol.and.returnValue("X");
      expect(game.play()).toEqual("Player X is the winner!");
    });
  });

  describe("#isOver", function() {
    beforeEach(function() {
      game._gameOver = false;
    });

    it("returns false if no player has won", function() {
      mockPlayerOne.hasWon.and.returnValue(false);
      expect(game.isOver()).toEqual(false);
    });

    it("returns true if a player has won", function() {
      mockTurnCounter.turnNumber.and.returnValue(0);
      mockPlayerOne.hasWon.and.returnValue(true);
      game.checkIfOver();
      expect(game.isOver()).toEqual(true);
    });

    it("returns true when ninth turn has been completed", function() {
      mockTurnCounter.turnNumber.and.returnValue(9);
      game.checkIfOver();
      expect(game.isOver()).toEqual(true);
    });
  });
});
