describe("Turn Counter", function() {
  var turnCounter;

  turnCounter = new TurnCounter();

  it("begins at turn 0", function() {
    expect(turnCounter.turnNumber()).toEqual(0);
  });

  describe("#increment", function() {
    it("can be incremented", function() {
      turnCounter.increment();
      expect(turnCounter.turnNumber()).toEqual(1);
    });
  });
});
