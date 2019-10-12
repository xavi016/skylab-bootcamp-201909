describe('pop', function() {

    it('should throw an error when others types different to array are passed', function() {

      var string = 'pippin';
      var number = 123;

      expect(function() { pop(string); }).toThrowError(TypeError, 'pippin is not an array');
      expect(function() { pop(number); }).toThrowError(TypeError, '1 is not an array');

    });

    it('should fail on undefined array', function() {

      var array;
      var array = [];

      expect(function() { pop(array); }).toThrowError(TypeError, 'undefined is not an array');
      expect(function() { pop(array); }).toThrowError(undefined, 'undefined is not an array');
      
    });
   });