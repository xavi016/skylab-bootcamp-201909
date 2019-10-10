describe('map', function () {
    it('should succeed on correct new array and expression, adding two to all numbers', function () {
        var numbers = [1, 2, 3, 4];
        var addTwo = function (number) { return number + 2};
        var result = map(numbers, addTwo);
        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = [3, 4, 5, 6];
        for (var i = 0; i < expected.length; i++)
        expect(addTwo(numbers[i])).toBe(expected[i]);
    });

    


    it('should succeed on correct new array and expression, doing the square root of each number', function () {
        var numbers = [1, 2, 3, 4, 5];
        var sqrRoot = function (number) { return Math.sqrt(number);};
        var result = map(numbers, sqrRoot);

        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = [1, 1.4142135623730951, 1.7320508075688772];
        for (var i = 0; i < expected.length; i++)
        expect(sqrRoot(numbers[i])).toBe(expected[i]);
    
    });

    // HASTA AQUÍ ESTÁ BIENN!!!! :):):) !!!!

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

