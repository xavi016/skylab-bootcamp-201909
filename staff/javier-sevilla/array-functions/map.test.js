describe('Map', function () {
    it('should succeed on correct array and expression, adding all numbers', function () {
        var numbers = [1, 2, 3];
        var multiply = function(number) { return number * 2; };

        var result = map(numbers, multiply);

        expect(result[0]).toBe(2);
        expect(result[1]).toBe(4);
        expect(result[2]).toBe(6);
    });

    it('should succeed on correct array and expression, concatenating all numbers', function () {
        var numbers = [1, 2, 3];
        var boleana = function(number) { return number < 2; };

        var result = map(numbers, boleana);

        expect(result[0]).toBe(true);
        expect(result[1]).toBe(false);
        expect(result[2]).toBe(false);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { map(array, expression); }).toThrow(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { map(array, expression); }).toThrow(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function () { map(array, undefined); }).toThrow(TypeError, 'undefined is not a function');
        expect(function() { map(array, true); }).toThrowError('true is not a function');
        expect(function() { map(array, 1); }).toThrowError('1 is not a function');
    });
});