describe("Player", function() {
  'use strict';

  var player, playerSymbol;

  playerSymbol = "X";
  player = new Player(playerSymbol);

  it("is initialized with its own symbol", function() {
    expect(player.symbol()).toEqual(playerSymbol);
  });
});
