describe('map', function () {
    it('should succeed on correct array and expression, adding all numbers', function () {
        var numbers = [1, 2, 3];
        var result = [];
        var add = function (number) {return number + 2};

        map (numbers, add);

        expect(result).toBe([3, 4, 5]);
    });


    // hemos hecho hasta aqui
    it('should succeed on correct array and expression, concatenating all numbers', function () {
        var numbers = [1, 2, 3];
        var result = '';
        var concatenate = function (number) { result += number; };

        map (numbers, concatenate);

        expect(result).toBe('123');
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

