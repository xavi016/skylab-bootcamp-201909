describe('map', function () {
    it('should succeed on correct new array and expression, adding all numbers', function () {
        var numbers = [1, 2, 3];
        var result = [];
        var addTwo = function (number) { return number + 2};

        result = map (numbers, addTwo);

        expect(result).toBe([3, 4, 5]);
    });


    it('should succeed on correct new array and expression, doing the square root of each number', function () {
        var numbers = [1, 2, 3];
        var result = [];
        var sqrRoot = function (number) { return Math.sqrt(number); };

        map (numbers, sqrRoot);

        expect(result).toBe([1, 1.4142135623730951, 1.7320508075688772]);
    });

    

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { map (array, expression); }).toThrow(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { map (array, expression); }).toThrow(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function() { map (array, undefined); }).toThrow(TypeError, 'undefined is not a function');
        expect(function() { map (array, true); }).toThrowError('true is not a function');
        expect(function() { map (array, 1); }).toThrowError('1 is not a function');
    });
});

