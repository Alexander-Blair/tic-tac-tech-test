describe("Line", function() {
  'use strict';

  var line, defaultSize;

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

  defaultSize = 3;
  line = new Line(FieldMock, defaultSize);

  it("is created with a field array of specified length", function() {
    expect(line.fields().length).toEqual(defaultSize);
  });

  it("holds an array of field objects based on the constructor passed in", function() {
    for(var i = 0; i < defaultSize; i++) {
      expect(line.field(i) instanceof FieldMock).toBe(true);
    }
  });

  describe("#takeField", function() {
    beforeEach(function() {
      line.takeField(0);
    });
    it("calls take on the field", function() {
      expect(line.field(0).takeCallCount).toEqual(1);
    });
  });
});
