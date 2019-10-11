describe('findIndex', function() {
  var hooray = new Hooray(6, 7, 8, 9, 10)

  it('should return the fist index that satisfies the function', function() {
    var fn = function(x) { return x >= 7; };

    expect(hooray.findIndex(fn)).toBe(1);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should fail findIndexing in the array', function() {
    var fn = function(x) { return x > 11; };

    expect(hooray.findIndex(fn)).toBe(-1);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var expected = [6, 7, 8, 9, 10];
    var fn = function(x) { x > 5; };
    hooray.findIndex(fn);

    expect(hooray.length).toBe(expected.length);
    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(expected[i]);
  });

  it('should throw an error when others types different to function are passed', function() {
    expect(function() { hooray.findIndex([1, 2, 3]) }).toThrowError('1,2,3 is not a function');
    expect(function() { hooray.findIndex('hello') }).toThrowError('hello is not a function');
    expect(function() { hooray.findIndex(1) }).toThrowError('1 is not a function');
    expect(function() { hooray.findIndex(true) }).toThrowError('true is not a function');
  });
/*
  it('should throw an error when others types different to hooray are passed', function() {
    var fn = function(x) { x > 5; };
    var greeting = 'hello'

    expect(function() { greeting.findIndex(fn) }).toThrowError('Data type is not a hooray');
    expect(function() { findIndex(1, fn) }).toThrowError('1 is not an array');
  });*/
});