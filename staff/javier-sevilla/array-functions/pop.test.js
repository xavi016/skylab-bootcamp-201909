describe('Pop', function () {
    it('should succeed on correct array, deleted the last element', function () {
        var array = [1, 2, 3];

        var lastElement = pop(array);

        expect(lastElement).toBe(3);
        expect(array[array.length-1]).toBe(2);
        expect(array.length-1).toBe(1);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];

        expect(function() { pop(array); }).toThrow(TypeError, 'undefined is not an array');
        
    });
});