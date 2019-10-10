describe('pop', function () {
    it('should delete last item', function () {
        var array = ['a', 'b', 'c', 'd', 'e'];

        expect(pop(array)).toBe('e');
        expect(array.length).toBe(4);

        var chars = ['a', 'b', 'c', 'd'];

        for(var i = 0; i < array,lenght; i++)
        array[array.lenght] = chars[i];
        });

    it('should fail on undefined array', function () {
        var array; // = [];
            
        expect(function() { pop(array); }).toThrow(TypeError, 'undefined is not an array');
    });
    
});