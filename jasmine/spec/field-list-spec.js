describe("Field List", function() {
  var fieldList;

  fieldList = new FieldList();

  it("is created with an empty fields array", function() {
    expect(fieldList.fields()).toEqual([]);
  });

  describe("#add", function() {
    var randomLine, randomField;

    randomLine = randomBetween(0, 2);
    randomField = randomBetween(0, 2);

    beforeEach(function() {
      fieldList.add(randomLine, randomField);
    });

    it("adds a reference to a field on a line to the array", function() {
      expect(fieldList.fields()[0]).toEqual({ 'row': randomLine, 'column': randomField });
    });
  });
});
