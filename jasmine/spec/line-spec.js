describe("Line", function() {
  'use strict';

  var line;

  function FieldMock() {
    this.takeCallCount = 0;
  }

  FieldMock.prototype = {
    take: function(symbol) {
      this.takeCallCount++;
      this.takeArgument = symbol;
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
    var symbol = "X";

    beforeEach(function() {
      line.takeField(0, symbol);
    });
    it("calls take on the field", function() {
      expect(line.field(0).takeCallCount).toEqual(1);
    });

    it("passes through a symbol as an argument", function() {
      expect(line.field(0).takeArgument).toEqual(symbol);
    });
  });
});
