describe('unshift', function() {
  it('should add a single item to the first position of the array', function() {
    var array = ['a', 'b', 'c'];

    expect(unshift(array, 'd')).toBe(4);
    expect(array.length).toBe(4);
    expect(array[0]).toBe('d');
  });

  it('should add a multiple items to the first positions of the array', function() {
    var array = ['a', 'b', 'c'];

    expect(unshift(array, 'd', 'e', 'f')).toBe(6);
    expect(array.length).toBe(6);

    var chars = ['d', 'e', 'f', 'a', 'b', 'c'];
    for (var i = 0; i < array.length; i++)
      expect(array[i]).toBe(chars[i]);
  });

  it('should throw an error when others types different to array are passed', function() {

    expect(function() { unshift('hello') }).toThrowError('hello is not an array');
    expect(function() { unshift(1) }).toThrowError('1 is not an array');
  });

  it('should modify the original array', function() {
    var array = ['a', 'b', 'c'];
    unshift(array, 3, 5);

    var chars = [3, 5, 'a', 'b', 'c'];
    for (var i = 0; i < array.length; i++)
      expect(array[i]).toBe(chars[i]);
    expect(array.length).toBe(5);
  });

  it('should return the array length', function() {
    var array = ['a', 'b', 'c'];
    unshift(array, 3, 5);

    expect(array.length).toBe(5);
  });
});