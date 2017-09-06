describe("Player", function() {
  'use strict';

  var player, playerSymbol, mockFieldList;

  mockFieldList = jasmine.createSpyObj('fieldList', ['fields', 'add']);
  playerSymbol = "X";
  player = new Player(playerSymbol, mockFieldList);

  it("is initialized with its own symbol", function() {
    expect(player.symbol()).toEqual(playerSymbol);
  });

  it("is initialized with its own field list", function() {
    expect(player.fieldList()).toEqual(mockFieldList);
  });

  describe("#addField", function() {
    var randomLine, randomField;

    randomLine = randomBetween(0, 2);
    randomField = randomBetween(0, 2);

    it("asks the field list to store a field reference", function() {
      player.addField(randomLine, randomField);
      expect(mockFieldList.add).toHaveBeenCalledWith(randomLine, randomField);
    });
  });
});
