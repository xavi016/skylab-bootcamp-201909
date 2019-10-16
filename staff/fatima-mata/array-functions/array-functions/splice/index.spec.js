describe('splice', function() {
    it('should modify the array with the values in the given limits', function() {
      var nums = [1, 2, 3, 4, 5, 6, 7];
      var result = splice(nums, 5, 5);
  
      expect(result).not.toEqual(nums);
      expect(result).toBeInstanceOf(Array);
      expect(nums.length).not.toBe(8);
    });

    it('should cut the array starting at indexIni to specified final', function() {
        var nums = [1, 2, 3, 4, 5, 6, 7];
        var result = splice(nums, 3, 2);
        var expected = [6, 7];
        var array = [1, 2, 3, 4, 5, 6,7];
    
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(7);
        expect(nums).toEqual(array);
        expect(result).toEqual(expected);
      });
     /*
      it('should return an empty array if indexIni is longer than the array length', function() {
        var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var result = splice(nums, 20);
        var expected = [];
    
        expect(result).toEqual(expected);
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(expected.length);
        expect(result).toEqual(expected);
      });
    /*
      it('should set deleteCount to array length if the provided value is longer', function() {
        var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var result = splice(nums, 3, 20);
        var array = [1, 2, 3];
        var expected = [4, 5, 6, 7, 8, 9, 10];
    
        expect(result).toEqual(expected);
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(7);
        expect(result.length).toBe(expected.length);
      });*/
});