describe('findIndex', function() {
  it('should return the fist index that satisfies the function', function() {
    var array = [6, 7, 8, 9, 10];
    var fn = function(x) {
      return x >= 7;
    };

    expect(findIndex(array, fn)).toBe(1);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should fail findIndexing in the array', function() {
    var array = [3, 7, 8, 9, 10];
    var fn = function(x) {
      return x > 11;
    };

    expect(findIndex(array, fn)).toBe(-1);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should throw an error when others types different to array are passed', function() {
    var fn = function(x) {
      x > 5;
    };

    expect(function() { findIndex('hello', fn) }).toThrowError('hello is not an array');
    expect(function() { findIndex(1, fn) }).toThrowError('1 is not an array');
  });

  it('should not modify the original array', function() {
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];
    var fn = function(x) {
      x > 5;
    };
    findIndex(array, fn);

    expect(array.length).toBe(expected.length);
    for (var i = 0; i < expected.length; i++)
      expect(array[i]).toBe(expected[i]);
  });

  it('should throw an error when others types different to function are passed', function() {
    var array = [3, 7, 8, 9, 10];

    expect(function() { findIndex(array, [1, 2, 3]) }).toThrowError('1,2,3 is not a function');
    expect(function() { findIndex(array, 'hello') }).toThrowError('hello is not a function');
    expect(function() { findIndex(array, 1) }).toThrowError('1 is not a function');
    expect(function() { findIndex(array, true) }).toThrowError('true is not a function');
  });
});