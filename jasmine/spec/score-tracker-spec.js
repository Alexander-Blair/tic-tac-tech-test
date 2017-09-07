describe("Score Tracker", function() {
  var scoreTracker, defaultBoardSize;

  function reset() {
    scoreTracker._rowScores = {};
    scoreTracker._columnScores = {};
    scoreTracker._diagScore = 0;
    scoreTracker._reverseDiagScore = 0;
  }

  defaultBoardSize = 3;

  scoreTracker = new ScoreTracker(defaultBoardSize);

  describe("#add", function() {
    describe("incrementing row and column", function() {
      var randomRow, randomColumn;

      randomRow = randomBetween(0, defaultBoardSize - 1);
      randomColumn = randomBetween(0, defaultBoardSize - 1);

      beforeAll(function() {
        scoreTracker.add(randomRow, randomColumn);
      });

      afterAll(function() { reset(); });

      it("increments the score for the row", function() {
        expect(scoreTracker._rowScores[randomRow]).toEqual(1);
      });

      it("increments the score for the column", function() {
        expect(scoreTracker._columnScores[randomColumn]).toEqual(1);
      });
    });

    describe("incrementing diagonal", function() {
      var randomDiag = randomBetween(0, defaultBoardSize - 1);

      beforeAll(function() {
        scoreTracker.add(randomDiag, randomDiag);
      });

      afterAll(function() { reset(); });

      it("increments the score for field on diagonal", function() {
        expect(scoreTracker._diagScore).toEqual(1);
      });
    });

    describe("incrementing reverse diagonal", function() {
      var randomDiag = randomBetween(0, defaultBoardSize - 1);

      beforeEach(function() {
        scoreTracker.add(randomDiag, (defaultBoardSize - 1) - randomDiag);
      });

      afterAll(function() { reset(); });

      it("increments the score for field on diagonal", function() {
        expect(scoreTracker._reverseDiagScore).toEqual(1);
      });
    });
  });
  describe("#hasWon", function() {
    var randomNumber = randomBetween(0, defaultBoardSize - 1);

    beforeEach(function() { reset(); });

    it("does not update win status if no line has reached winning score", function() {
      scoreTracker.add(randomNumber, randomNumber);
      expect(scoreTracker.hasWon(defaultBoardSize)).not.toBe(true);
    });

    it("returns true if a row has reached winning score", function() {
      scoreTracker._rowScores[randomNumber] = defaultBoardSize - 1;

      scoreTracker.add(randomNumber, randomNumber);
      expect(scoreTracker.hasWon(defaultBoardSize)).toBe(true);
    });

    it("updates win status if a column has reached winning score", function() {
      scoreTracker._columnScores[randomNumber] = defaultBoardSize - 1;

      scoreTracker.add(randomNumber, randomNumber);
      expect(scoreTracker.hasWon(defaultBoardSize)).toBe(true);
    });

    it("updates win status if diagonal has reached winning score", function() {
      scoreTracker._diagScore = defaultBoardSize - 1;

      scoreTracker.add(randomNumber, randomNumber);
      expect(scoreTracker.hasWon(defaultBoardSize)).toBe(true);
    });
  });
});
