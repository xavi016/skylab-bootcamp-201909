describe('reverse', function() {
  it('should invert the order of the elements in the array', function() {
    var array = ['a', 'b', 'c', 'd'];
    var expected = ['d', 'c', 'b', 'a'];
    reverse(array);

    expect(array.length).toBe(4);
    expect(array).toEqual(expected);
  });

  it('should modify the original array', function() {
    var array = ['a', 'b', 'c'];
    var array = ['a', 'b', 'c', 'd'];
    var expected = ['d', 'c', 'b', 'a'];
    reverse(array);

    expect(array).toEqual(expected);
  });

  it('should throw an error when others types different to array are passed', function() {

    expect(function() { reverse('hello') }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { reverse(1) }).toThrowError(TypeError, '1 is not an array');
  });

});