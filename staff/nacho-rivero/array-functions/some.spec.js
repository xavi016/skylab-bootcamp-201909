describe('some', function() {

    it('should throw an error on undefined array', function() {

      var array;
      var expression = function(a) { return a > 1 }

      expect(function() { some(array, expression); }).toThrowError(TypeError, 'undefined is not an array');

    });

    it('should return false on empty array received', function() {

      var array = [];
      var expression = function(a) { return a > 1 }

      expect(some(array, expression)).toBe(false);

    });

    it('should throw error when others types different to array are passed', function() {

      var expression = function(a) { return a > 1}

      expect(function() { some('Rocky', expression) }).toThrowError(TypeError, 'hello is not an array');
      expect(function() { some(123, expression) }).toThrowError(TypeError, '1 is not an array');

    });

    it('should throw error when others types different to function are passed', function() {

      var array = [1, 2, 3, 'aragorn', 'gimli', 'legolas'];

      expect(function() { some(array, 'Rambo') }).toThrowError(TypeError, 'hello is not a function');
      expect(function() { some(array, 123) }).toThrowError(TypeError, '1 is not a function');

    });
   });

   
   