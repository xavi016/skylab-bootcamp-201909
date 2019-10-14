describe('reverse', function(){

    it('Should succeed reversing array', function(){
        var array = [1, 2, 3, 4];
        var result;
        var expected;

        expected = [4, 3, 2, 1];
        result = reverse(array);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(4);
    });

    it('should return an empty array', function () {
        var array = [1, 2, 3, 4];
        var result;
        var expected;
        
        array = [];
        expected = [];
        result = reverse(array);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(0);
    });

    it('should fail on non-array input', function () {
        expect(function () { reverse(); }).toThrowError(TypeError, 'undefined is not an array');
    
        expect(function () { reverse(true); }).toThrowError(TypeError, 'true is not an array');
    
        expect(function () { reverse(1); }).toThrowError(TypeError, '1 is not an array');
    
        expect(function () { reverse('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
}); 