describe ('MAP', function () {

    it('should throw a TypeError when first parameter is not an array', function () {
        var array = 2;

        expect (function () { map(array,function (item) { 
            return item << 2;
        })}).toThrow(TypeError,array + 'is not an array');
    })

    it('should throw a TypeError when second parameter is not a function', function () {
        var array = [1,2,3,4];

        expect (function () {map(array,"3")}).toThrow(TypeError,expression + ' is not a function');
    })
})