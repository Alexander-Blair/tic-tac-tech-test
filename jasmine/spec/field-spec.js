describe("Field", function() {
  var field;

  field = new Field();

  it("is created empty", function() {
    expect(field.isTaken()).toEqual(false);
  });

  it("successful take returns true", function() {
    expect(field.take()).toEqual(true);
  });

  it("take updates taken status", function() {
    expect(field.isTaken()).toEqual(true);
  });

  it("cannot be taken twice", function() {
    field.take();
    expect(field.take()).toEqual(false);
  });
});
