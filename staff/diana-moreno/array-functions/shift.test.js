describe('shift', function() {
  it('should remove the first element of the array', function() {
    var array = ['a', 'b', 'c'];

    expect(shift(array)).toBe('a');
    expect(array.length).toBe(2);
    expect(array[array.length - 1]).toBe('c');
    expect(array[array.length - 2]).toBe('b');
  });

  it('should return undefined when an empty array is passed', function() {
    var array = [];

    expect(shift(array)).toBe(undefined);
  });

  it('should throw an error when others types different to array are passed', function() {

    expect(function() { shift('hello') }).toThrowError('hello is not an array');
    expect(function() { shift(1) }).toThrowError('1 is not an array');
  });

  it('should modify the original array', function() {
    var array = ['a', 'b', 'c'];
    shift(array);

    expect(array.toString()).toBe('b,c');
  });
});