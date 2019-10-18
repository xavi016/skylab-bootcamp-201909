describe('concat', function () {
    it('should hjvdjf', function () {
        var array1 = [1, 2, 3, 4];
        var array2 = [1, 2, 3, 4];
        var result = [1, 2, 3, 4, 1, 2, 3, 4];

        var newArray = concat(array1, array2);

        expect(newArray).toBe(result);

        for (var i = 0; i < newArray.length; i++) {
            expect(newArray[i]).toBe(result[i]);

            
        }
    }, function(error) {
        expect(error).toBe(undefined);
    })
})
