describe ('Hooray.prototype.map', function () {
    it('should apply expression on every hooray item and save it on a new hooray', function () {
        var hooray = new Hooray (2,4,6);
        var expression = function (item) { return item << 2; }
        var result = hooray.map(expression);

        expect (hooray === result).toBe(false);

        for (i=0; i<result.length; i++)
            expect(result[i]).toBe(hooray[i]<<2);
    })

    it('should throw a TypeError when parameter is not a function', function () {

        var hooray = new Hooray (2,4,6);

        expect (function () { hooray.map(2)}).toThrow(TypeError,'2 is not a function');
        expect (function () { hooray.map("a")}).toThrow(TypeError,'a is not a function');
        expect (function () { hooray.map()}).toThrow(TypeError,'undefined is not a function');
    })
})