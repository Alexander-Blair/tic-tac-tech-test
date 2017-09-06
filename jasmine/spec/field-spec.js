describe("Field", function() {
  'use strict';

  var field;

  field = new Field();

  it("is created empty", function() {
    expect(field.isTaken()).toEqual(false);
  });

  describe("#take", function() {
    var symbol = "X";

    beforeEach(function() {
      spyOn(field, 'setSymbol');
      field.setSymbol.and.stub();
    });
    describe("successful take", function() {
      var result;

      it("calls setSymbol function", function() {
        result = field.take();
        expect(field.setSymbol.calls.count()).toEqual(1);
      });

      it("returns true", function() {
        expect(result).toEqual(true);
      });

      it("updates taken status", function() {
        expect(field.isTaken()).toEqual(true);
      });
    });

    describe("unsuccessful take (field already taken)", function() {
      var result;

      beforeEach(function() {
        field.take();
      });

      it("doesn't call setSymbol function", function() {
        result = field.take();
        expect(field.setSymbol.calls.count()).toEqual(0);
      });

      it("returns false", function() {
        expect(result).toEqual(false);
      });
    });
  });
  describe("#setSymbol", function() {
    var symbol = "X";

    beforeEach(function() {
      field.setSymbol(symbol);
    });
    it("sets the field's symbol to the value passed in", function() {
      expect(field.symbol()).toEqual(symbol);
    });
  });
});
