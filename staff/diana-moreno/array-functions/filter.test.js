describe('filter', function() {
  it('should work correctly and no modify the original array', function() {
    var array = [1, 2, 3, 4];
    var fn = function(x) {
      return x > 2;
    };
    var expected = [3, 4]

    var result = filter(array, fn);

    for (var i = 0; i < result.length; i++)
      expect(result[i]).toBe(expected[i]);

  });

  it('should return an empty array if receive an empty array',
    function() {
      var array = [];
      var fn = function(x) { return x * 2; };
      let result = filter(array).length

      expect(result).toBe(0);
    });

  it('should fail on non-function expression', function() {
    var array = [1, 2, 3];

    expect(function() { filter(array, [1, 2]) }).toThrowError('1,2 is not a function');
    expect(function() { filter(array, true); }).toThrowError('true is not a function');
    expect(function() { filter(array, 1); }).toThrowError('1 is not a function');
  });

  it('should fail on different type to array passed', function() {
    var fn = function(x) { return x * 2; };

    expect(function() { filter('hello', fn) }).toThrowError('hello is not an array');
    expect(function() { filter(1, fn); }).toThrowError('1 is not an array');
    expect(function() { filter(true, fn); }).toThrowError('true is not an array');
  });
})