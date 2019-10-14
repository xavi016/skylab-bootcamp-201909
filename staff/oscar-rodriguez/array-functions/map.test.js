describe ('MAP', function () {
    it('should apply expression on every array item and save it on a new array', function () {
        var array = [2,4,6];
        var expression = function (item) { return item << 2; }
        var result = map (array, expression);

        expect (array === result).toBe(false);

        for (i=0; i<result.length; i++)
            expect(result[i]).toBe(array[i]<<2);

    })

    it('should throw a TypeError when first parameter is not an array', function () {
        
        var expression = function (item) { return item << 2; }

        expect (function () { map(2,expression)}).toThrow(TypeError,'2 is not an array');
        expect (function () { map("a",expression)}).toThrow(TypeError,'a is not an array');
        expect (function () { map()}).toThrow(TypeError,'undefined is not an array');

    })

    it('should throw a TypeError when second parameter is not a function', function () {
        var array = [1,2,3,4];
        expect (function () { map(array,2)}).toThrow(TypeError,'2 is not a function');
        expect (function () { map(array,"a")}).toThrow(TypeError,'a is not a function');
        expect (function () { map(array)}).toThrow(TypeError,'undefined is not a function');
    })
})