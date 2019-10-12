describe('concat', function() {
  it('should merge two arrays', function() {
    var hooray = new Hooray(1, 2, 3);
    var array2 = [4, 5, 6];
    var result = hooray.concat(array2);
    var expected = [1, 2, 3, 4, 5, 6];

    expect(hooray.length).not.toBe(6);
    expect(result).toEqual(expected);
  });

  it('should merge multiple arrays', function() {
   var hooray = new Hooray(1, 2, 3);
    var array2 = [4, 5, 6]
    var array3 = [7, 8, 9];
    var array4 = [10, 11, 12];
    var result = hooray.concat(array2, array3, array4);
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    expect(result.length).toBe(12);
    expect(result).toEqual(expected);
  });


  it('should not modify the original array', function() {
    var hooray = new Hooray(1, 2, 3, 5, 3);
    var array2 = ['a', 'b']
    var expected = [1, 2, 3, 5, 3, 'a', 'b'];
    var result = hooray.concat(array2);

    expect(result).toEqual(expected);
  });

  it('should work with empty arrays', function() {
    var array = [1, 2, 3];
    var array2 = [];
    var array3 = [];
    var expected = [1, 2, 3];
    var expected2 = [];
    var result = hooray.concat(array2);
    var result2 = hooray.concat(array2, array3);
    var result3 = hooray.concat(array2);

    expect(result.length).toBe(3);
    expect(result2.length).toBe(0);
    expect(result).toEqual(expected);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected2);
  });

  it('should work with different type of data passed as arguments, except the first that must be an array', function() {
    var hooray = new Hooray(1, 2, 3);
    var array = [1, 2, 3, 4];
    var string = 'hello';
    var number = 56;
    var boolean = true;
    var object = { 1: 'one' };
    var result = hooray.concat(string, number, boolean, object);
    var expected = [1, 2, 3, 4, 'hello', 56, true, { 1: 'one' }];

    expect(result).toEqual(expected);
  });
})