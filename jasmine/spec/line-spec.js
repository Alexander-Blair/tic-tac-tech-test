describe("Line", function() {
  var line;

  function FieldMock() {}

  line = new Line(FieldMock);

  it("is created with a field array of length 3", function() {
    expect(line.fields().length).toEqual(3);
  });

  it("holds an array of field objects based on the constructor passed in", function() {
    for(var i = 0; i < 3; i++) {
      expect(line.fields()[i] instanceof FieldMock).toBe(true);
    }
  });
});
