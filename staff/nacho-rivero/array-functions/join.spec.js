describe('join', function() {

    it('should throw error on undefined array', function() {

      var array;
      var separator = ',';
      expect(function() { join(array, separator); }).toThrowError(TypeError, 'undefined is not an array');

    });

    it('should fail on different type to array passed', function() {
    
      var separator = ',';
      expect(function() { join('Darth Maul', separator); }).toThrowError(TypeError, 'Darth Maul is not an array');
      expect(function() { join(123, separator); }).toThrowError(TypeError, '123 is not an array');

    });

    it('should fail on function passed as separator', function() {
      
      var array = [1, 2, 3, 'aragorn', 'gimli', 'legolas'];
      var space = function(a) { return a + ' ' }
      expect(function() { join(array, space) }).toThrowError(TypeError, 'separator cannot be a function');

    })

   })
   
   
   