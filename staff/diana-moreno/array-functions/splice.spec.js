describe('splice', function() {
  it('should modify the array with the values in the given limits', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = splice(nums, 4, 4); // [5, 6, 7, 8];

    expect(result).toEqual(nums);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(nums.length);
    expect(nums.length).toBe(4);
  });

  it('should cut the array starting at indexIni to specified final', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = splice(nums, 4, 3);
    var expected = [5, 6, 7];

    expect(result).toEqual(nums);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(nums.length);
    expect(result.length).toBe(3);
    expect(nums).toEqual(expected);
  });

  it('should cut the array starting at indexIni, if not end given, the end is the final of the array', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = splice(nums, 4);
    var expected = [5, 6, 7, 8, 9, 10];

    expect(result).toEqual(nums);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(nums.length);
    expect(result.length).toBe(6);
    expect(nums).toEqual(expected);
  });

  it('should not cut the array when specified an item, but if deleteCount is equal to 0, should put the items at indexIni, after the others', function() {
    var months = ['Jan', 'March', 'April', 'June'];
    var result = splice(months, 1, 0, 'Feb');
    var expected = ['Jan', 'Feb', 'March', 'April', 'June'];

    expect(result).toEqual(months);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(months.length);
    expect(result.length).toBe(5);
    expect(months).toEqual(expected);
  });

  it('should replace as many elements as specified in deleteCount at indexIni by items, an then, put the rest', function() {
    var months = ['Jan', 'Feb', 'March', 'April', 'June'];
    var result = splice(months, 4, 1, 'May');
    var expected = ['Jan', 'Feb', 'March', 'April', 'May'];

    expect(result).toEqual(months);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(months.length);
    expect(result.length).toBe(5);
    expect(months).toEqual(expected);
  });

  it('should work replacin for multiple items', function() {
    var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
    var result = splice(myFish, 0, 2, 'parrot', 'anemone', 'blue');
    var expected = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];

    expect(result).toEqual(myFish);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(myFish.length);
    expect(result.length).toBe(5);
    expect(myFish).toEqual(expected);
  })

  it('it should return en empty array if receives an empty array', function() {
    var empty = [];
    var result = splice(array, 2);
    var expected = [];

    expect(result).toEqual(empty);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(empty.length);
    expect(result.length).toBe(0);
    expect(empty).toEqual(expected);
  })

  it('should fail on first parameter non-array', function() {
    expect(function() { splice(); }).toThrowError(TypeError, 'undefined is not an array');

    expect(function() { splice(true); }).toThrowError(TypeError, 'true is not an array');

    expect(function() { splice(1); }).toThrowError(TypeError, '1 is not an array');

    expect(function() { splice('a'); }).toThrowError(TypeError, 'a is not an array');
  });
});
