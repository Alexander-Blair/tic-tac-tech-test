describe("Score Tracker", function() {
  var scoreTracker;

  function reset() {
    scoreTracker._rows = {};
    scoreTracker._columns = {};
    scoreTracker._diag = 0;
    scoreTracker._reverseDiag = 0;
  }

  scoreTracker = new ScoreTracker(3);

  describe("#add", function() {
    describe("incrementing row and column", function() {
      var randomRow, randomColumn;

      randomRow = randomBetween(0, 2);
      randomColumn = randomBetween(0, 2);

      beforeAll(function() {
        scoreTracker.add(randomRow, randomColumn);
      });

      afterAll(function() { reset(); });

      it("increments the score for the row", function() {
        expect(scoreTracker._rows[randomRow]).toEqual(1);
      });

      it("increments the score for the column", function() {
        expect(scoreTracker._columns[randomColumn]).toEqual(1);
      });
    });

    describe("incrementing diagonal", function() {
      var randomDiag = randomBetween(0, 2);

      beforeAll(function() {
        scoreTracker.add(randomDiag, randomDiag);
      });

      afterAll(function() { reset(); });

      it("increments the score for field on diagonal", function() {
        expect(scoreTracker._diag).toEqual(1);
      });
    });

    describe("incrementing reverse diagonal", function() {
      var randomDiag = randomBetween(0, 2);

      beforeEach(function() {
        scoreTracker.add(randomDiag, 2 - randomDiag);
      });

      afterAll(function() { reset(); });

      it("increments the score for field on diagonal", function() {
        expect(scoreTracker._reverseDiag).toEqual(1);
      });
    });
  });
  describe("#updateWinStatus", function() {
    var randomNumber = randomBetween(0, 2);

    beforeEach(function() { reset(); });

    it("does not update win status if no line has reached winning score", function() {
      scoreTracker.updateWinStatus(randomNumber, randomNumber);
      expect(scoreTracker.hasWon()).not.toBe(true);
    });

    it("updates win status if a row has reached winning score", function() {
      scoreTracker._rows[randomNumber] = 3;

      scoreTracker.updateWinStatus(randomNumber, randomNumber);
      expect(scoreTracker.hasWon()).toBe(true);
    });

    it("updates win status if a column has reached winning score", function() {
      scoreTracker._columns[randomNumber] = 3;

      scoreTracker.updateWinStatus(randomNumber, randomNumber);
      expect(scoreTracker.hasWon()).toBe(true);
    });

    it("updates win status if diagonal has reached winning score", function() {
      scoreTracker._diag = 3;

      scoreTracker.updateWinStatus(randomNumber, randomNumber);
      expect(scoreTracker.hasWon()).toBe(true);
    });
  });
});
