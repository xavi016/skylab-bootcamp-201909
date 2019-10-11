describe('push', function() {
  it('should push a single item', function() {
    var array = ['a', 'b', 'c'];

    expect(push(array, 'd')).toBe(4);
    expect(array.length).toBe(4);
    expect(array[array.length - 1]).toBe('d');

    var chars = ['a', 'b', 'c', ]
  });

  it('should push multiple items', function() {
    var array = ['a', 'b', 'c'];

    expect(push(array, 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
    expect(array.length).toBe(11);

    var chars = ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    for (var i = 3; i < array.length; i++)
      expect(array[i]).toBe(chars[i - 3]);
  });
  it('should throw an error when others types different to array are passed', function() {

    expect(function() { push('hello') }).toThrowError('hello is not an array');
    expect(function() { push(1) }).toThrowError('1 is not an array');
  });

  it('should modify the original array', function() {
    var array = ['a', 'b', 'c'];
    push(array, 3, 5);

    expect(array.toString()).toBe('a,b,c,3,5');
  });

  it('should return the array length', function() {
    var array = ['a', 'b', 'c'];
    push(array, 3, 5);

    expect(array.length).toBe(5);
  });
});