describe('unshift', function() {
    it('should add a single item', function() {
      var array = ['1','2','3'];
  
      expect(unshift(array,'4')).toBe(4);
      expect(array.length).toBe(4);
      expect(array[0]).toBe('4');
    });
  
  it('should add a multiple items', function() {
      var array = ['1','2','3'];
  
      expect(unshift(array,'4','5','6')).toBe(6);
      expect(array.length).toBe(6);
      var expected = ['4', '5', '6', '1', '2', '3'];
      expect(array).toEqual(expected);
    });
 
  it('should modify the original array', function() {
      var array = ['1', '2', '3'];
      unshift(array, 4, 5);
      var expected = [4, 5, '1', '2', '3'];

     expect(array).toEqual(expected);
     expect(array.length).toBe(5);
    });
  
    it('should return the array length', function() {
      var array = ['1', '2', '3'];
      unshift(array, 4, 5);
  
      expect(array.length).toBe(5);
    });
});
  