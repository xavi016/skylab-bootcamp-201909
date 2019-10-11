describe('includes', function() {
  it('should find the item searched', function() {
    var array = [6, 7, 8, 9, 10];

    expect(includes(array, 8)).toBe(true);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should fail finding the item in the array', function() {
    var array = [3, 7, 8, 9, 10];

    expect(includes(array, false)).toBe(false);
    expect(includes(array, 1)).toBe(false);
    expect(array.length).toBe(5);
    expect(array[array.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];
    includes(array, 6);

    expect(array.length).toBe(expected.length);
    expect(array).toEqual(expected);
  });

  it('should return a boolean', function() {
    var array = [6, 7, 8, 9, 10];
    var result = includes(array, 7);

    expect(result).toBe(true);

    var result2 = includes(array, 2);
    expect(result2).toBe(false);
  });

  it('should throw an error when others types different to array are passed', function() {

    expect(function() { includes('hello', 2) }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { includes(1, 2) }).toThrowError(TypeError, '1 is not an array');
  });

  it('should throw an error when others types different to string or number are passed as item', function() {
    var array = [6, 7, 8, 9, 10];

    expect(function() { includes(array, [2, 5]) }).toThrowError(TypeError, '2,5 is not a number, boolean or a string');
  });
});