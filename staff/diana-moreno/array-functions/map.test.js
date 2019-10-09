describe('map', function() {
  it('should work correctly', function() {
    var array = [1, 2, 3, 4];
    var fn = function(x) {
      return x * 2;
    };
    var fn2 = function(x) {
      return x * 3;
    };
    var result = map(array, fn);
    var result2 = map(array, fn2);

    for (var i = 0; i < result.length; i++)
      expect(result2[i]).toBe(array[i] * 3);

  });

  if ('should not modify the original array', function() {
      var array = [1, 2, 3, 4];
      var fn = function(x) { return x * 2; };
      map(array, fn);

      expect(array.toString()).toBe('1,2,3,4');
    })

    it('should fail on empty array',
      function() {
        var array = [];
        var fn = function(x) { return x * 2; };
        // 3 maneras diferentes de hacer lo mismo
        expect(function() { map(array, fn); }).toThrow(Error, 'Array is empty');
        //expect(function() { map(array, fn); }).toThrowError('Array is empty');
        /* try {
              map(array, fn)
            } catch(error) {debugger
              expect(error.message).toBe('Array is empty') //mismo mensaje que en map
            }*/
      });

  it('should fail on non-function expression', function() {
    var array = [1, 2, 3];

    expect(function() { map(array, [1, 2]) }).toThrowError('type is not a function');
    expect(function() { map(array, true); }).toThrowError('type is not a function');
    expect(function() { map(array, 1); }).toThrowError('type is not a function');
  });

  it('should fail on different type to array passed', function() {
    var fn = function(x) { return x * 2; };

    expect(function() { map('hello', fn) }).toThrowError('type is not an array');
    expect(function() { map(1, true); }).toThrowError('type is not an array');
    expect(function() { map(true, 1); }).toThrowError('type is not an array');
  });
})