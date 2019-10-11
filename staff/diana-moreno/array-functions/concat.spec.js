describe('concat', function() {
  it('should merge two arrays', function() {
    var array = [1, 2, 3];
    var array2 = [4, 5, 6]
    var result = concat(array, array2);
    var expected = [1, 2, 3, 4, 5, 6];

    expect(result.length).toBe(6);
    expect(result).toEqual(expected);
  });

  it('should merge multiple arrays', function() {
    var array = [1, 2, 3];
    var array2 = [4, 5, 6]
    var array3 = [7, 8, 9];
    var array4 = [10, 11, 12];
    var result = concat(array, array2, array3, array4);
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    expect(result.length).toBe(12);
    expect(result).toEqual(expected);
  });

  it('should not modify the original array', function() {
    var array = [1, 2, 3, 5, 3];
    var array2 = ['a', 'b']
    var expected = [1, 2, 3, 5, 3, 'a', 'b'];
    var result = concat(array, array2);

    expect(result).toEqual(expected);
  });

  it('should work with empty arrays', function() {
    var array = [1, 2, 3];
    var array2 = [];
    var array3 = [];
    var expected = [1, 2, 3];
    var expected2 = [];
    var result = concat(array, array2);
    var result2 = concat(array2, array3);

    expect(result.length).toBe(3);
    expect(result2.length).toBe(0);
    expect(result).toEqual(expected);
    expect(result2).toEqual(expected2);

  });

  it('should fail on different type to array passed', function() {
    var array = [1, 2, 3];

    expect(function() { concat('hello', array) }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { concat(array, 1); }).toThrowError(TypeError, '1 is not an array');
    expect(function() { concat(array, true); }).toThrowError(TypeError, 'true is not an array');
  });
})