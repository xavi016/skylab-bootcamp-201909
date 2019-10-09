describe('Push', function () {
    it('should succeed on correct array and arguments, adding one elements', function () {
        var array = [1, 2, 3];

        var lengthArr = push(array, 4);

        expect(lengthArr).toBe(4);
    });

    it('should succeed on correct array and expression, adding multiple elements', function () {
        var array = [1, 2, 3];

        var lengthArr = push(array, 4, 5, 6);

        expect(lengthArr).toBe(6);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var arg;

        expect(function() { forEach(array, arg); }).toThrow(TypeError, 'undefined is not an array');
        
    });
});

