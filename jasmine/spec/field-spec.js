describe("Field", function() {
  var field;

  field = new Field();

  it("is created empty", function() {
    expect(field.isTaken()).toEqual(false);
  });
  it("can be taken by a player", function() {
    field.take();
    expect(field.isTaken()).toEqual(true);
  });
});
