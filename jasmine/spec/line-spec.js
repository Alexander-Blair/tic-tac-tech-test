describe("Line", function() {
  'use strict';

  var line;

  function FieldMock() {
    this.takeCallCount = 0;
  }

  FieldMock.prototype = {
    take: function() {
      this.takeCallCount++;
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

  it("informs a field object that it has been taken", function() {
    line.takeField(0);
    expect(line.field(0).takeCallCount).toEqual(1);
  });
});
