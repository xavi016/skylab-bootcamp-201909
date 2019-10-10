describe('slice', function() {
  it('should return a new array with the values in the given limits', function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = slice(numbers, 3, 7);
    var expected = [4, 5, 6];

    for (var i in expected)
      expect(result[i]).toBe(expected[i])

    expect(result === numbers).toBe(false);
    expect(result === numbers).toBe(false);
    expect(result instanceof Array).toBe(true);
  })

  it('should fail on first parameter non-array', function() {
    expect(function() { slice('hola'); }).toThrowError('Data type is not an array');
/*    expect(function() { slice(true); }).toThrow('true is not an array');
    expect(function() { slice(1); }).toThrow('1 is not an array');
    expect(function() { slice('a'); }).toThrow('a is not an array');*/
  })
})