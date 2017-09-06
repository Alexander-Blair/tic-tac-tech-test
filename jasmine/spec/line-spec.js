describe("Line", function() {
  'use strict';

  var line;

  function FieldMock() {
    this.takeCallCount = 0;
  }

  FieldMock.prototype = {
    take: function() {
      this.takeCallCount++;
    },
    isTaken: function() {
      return false;
    }
  };

  line = new Line(FieldMock);

  it("is created with a field array of length 3", function() {
    expect(line.fields().length).toEqual(3);
  });

  it("holds an array of field objects based on the constructor passed in", function() {
    for(var i = 0; i < 3; i++) {
      expect(line.field(i) instanceof FieldMock).toBe(true);
    }
  });

  describe("#takeField", function() {
    it("informs a field object that it has been taken", function() {
      line.takeField(0);
      expect(line.field(0).takeCallCount).toEqual(1);
    });
  });

  describe("#isFull", function() {
    describe("checks whether all fields are taken", function() {
      it("does not return true if not all fields are taken", function() {
        expect(line.isFull()).not.toEqual(true);
      });

      it("returns true if all fields are taken", function() {
        FieldMock.prototype.isTaken = function() {
          return true;
        };
        expect(line.isFull()).toEqual(true);
      });
    });
  });
});
