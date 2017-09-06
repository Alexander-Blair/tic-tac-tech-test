describe("Field", function() {
  'use strict';

  var field;

  field = new Field();

  it("is created empty", function() {
    expect(field.isTaken()).toEqual(false);
  });

  describe("#take", function() {
    describe("successful take", function() {
      var result;

      beforeAll(function() {
        result = field.take();
      });

      it("returns true", function() {
        expect(result).toEqual(true);
      });

      it("updates taken status", function() {
        expect(field.isTaken()).toEqual(true);
      });
    });

    describe("unsuccessful take (field already taken)", function() {
      beforeEach(function() {
        field.take();
      });

      it("returns false", function() {
        expect(field.take()).toEqual(false);
      });
    });
  });
});
