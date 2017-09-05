describe("Field", function() {
  'use strict';

  var field;

  field = new Field();

  it("is created empty", function() {
    expect(field.isTaken()).toEqual(false);
  });

  describe("#take", function() {
    it("successful take returns true", function() {
      expect(field.take()).toEqual(true);
    });

    it("take updates taken status", function() {
      expect(field.isTaken()).toEqual(true);
    });

    it("returns false if a field is already taken", function() {
      expect(field.take()).toEqual(false);
    });
  });
});
