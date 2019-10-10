describe('fill', function() {
  // Happy path
  it('should receive an array and an item', function() {
    var array = [1, 2, 3];
    var item = 'a';
    fill(array, item);

    for (var i = 0; i < array.length; i++) {
      expect(array[i]).toBe(item);
    };
  });

  it('should modify the original array', function() {
    var array = [1, 2, 3];
    var item = 'a';
    var _result = ['a', 'a', 'a']
    fill(array, item);

    for (var i = 0; i < array.length; i++) {
      expect(array[i]).toBe(_result[i]);
    };
  });

  it('should receive an array with an item and first index', function() {
    var array = [1, 2, 3, 4, 5];
    var item = 'a';
    var indexIni = 1;
    var _result = [1, 'a', 'a', 'a', 'a'];
    fill(array, item, indexIni); // [1, 'a', 'a', 'a', 'a'];

    for (var i = 0; i < array.length; i++) {
      expect(array[i]).toBe(_result[i]);
    };
  });

  it('should receive an array with an item, first index and final index', function() {
    var array = [1, 2, 3, 4, 5];
    var item = 'a';
    var indexIni = 1;
    var indexEnd = 4;
    var _result = [1, 'a', 'a', 'a', 5];
    var result = fill(array, item, indexIni, indexEnd); // [1, 'a', 'a', 'a', 5];

    for (var i = 0; i < array.length; i++) {
      expect(array[i]).toBe(_result[i]);
    };
    //expect(JSON.stringify(result)).toBe(JSON.stringify([1, 'a', 'a', 'a', 5]));
    // Es mejor iterar, no utilizar .toString()
  });

  it('should fail on non-received array', function() {
    var array;

    expect(function() { fill(array) }).toThrow(TypeError, 'undefined is not an array'); // mismo mensaje que en función fill()
  });

  it('should fail on receive a non-string or number', function() {
    var array = [1, 2, 3];
    var fn = function(x) { return x + 2 }

    expect(function() { fill(array, fn) }).toThrow(TypeError, 'function is not a string or a number');
    expect(function() { fill(array, [1, 2, 3]) }).toThrow(TypeError, 'array is not a string or a number');
    expect(function() { fill(array, false) }).toThrow(TypeError, 'boolean is not a string or a number');
  });

  it('should fail on receive a non-number for index', function() {
    var array = [1, 2, 3];
    var item = 'a';
    var fn = function(x) { return x + 2 };

    expect(function() { fill(array, 'a', fn) }).toThrow(TypeError, 'index should be a number');
    expect(function() { fill(array, 'a', [1, 2, 3]) }).toThrow(TypeError, 'index should be a number');
    expect(function() { fill(array, 'a', true) }).toThrow(TypeError, 'index should be a number');
    expect(function() { fill(array, 'a', 1, 'hello') }).toThrow(TypeError, 'index should be a number');
  });
})