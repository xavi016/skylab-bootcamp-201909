describe('concat', function() {
  it('should merge two arrays', function() {
    var array = [1, 2, 3];
    var array2 = [4, 5, 6]
    let result = concat(array, array2);
    let expected = [1, 2, 3, 4, 5, 6];

    expect(result.length).toBe(6);
    for (var i = 0; i < result.length; i++)
      expect(result[i]).toBe(expected[i]);
  });

  it('should merge multiple arrays', function() {
    var array = [1, 2, 3];
    var array2 = [4, 5, 6]
    var array3 = [7, 8, 9];
    var array4 = [10, 11, 12];

    let result = concat(array, array2, array3, array4);
    let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    expect(result.length).toBe(12);
    for (var i = 0; i < result.length; i++)
      expect(result[i]).toBe(expected[i]);
  });

  it('should not modify the original array', function() {
    var array = [1, 2, 3, 5, 3];
    var array2 = ['a', 'b']
    var expected = [1, 2, 3, 5, 3, 'a', 'b'];
    let result = concat(array);

  for (var i = 0; i < result.length; i++)
      expect(result[i]).toBe(expected[i]);
  });

  it('should work with empty arrays', function() {
    var array = [1, 2, 3];
    var array2 = [];
    var array3 = [];
    let expected = [1, 2, 3];
    let result = concat(array, array2);
    let result2 = concat(array2, array3);

    expect(result.length).toBe(3);
    for (var i = 0; i < result.length; i++)
      expect(result[i]).toBe(expected[i]);
    expect(result2.length).toBe(0);
  });

  it('should fail on different type to array passed', function() {
    var array = [1, 2, 3];

    expect(function() { concat('hello', array) }).toThrowError('hello is not an array');
    expect(function() { concat(array, 1); }).toThrowError('1 is not an array');
    expect(function() { concat(array, true); }).toThrowError('true is not an array');
  });
})