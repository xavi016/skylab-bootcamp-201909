describe('join', function(){
    
    it('Should succeed returning a new string by joining all of the elements in an array separated by empty string or a specified separator', function(){

        var arr = [1, 2, 3, 4];
        var result;
        var expected;

        expected = ("1234");
        result = join(arr, '');

        expect(result).toEqual(expected);
    });
    
    it('Should succeed the operation, returning a new string by joining all of the elements with a separator ","' , function() {
        
        var arr = [1, 2, 3, 4];
        var result;
        var expected;

        result = join(arr, ',');
        expected = "1,2,3,4";
        
        expect(result).toEqual(expected);
    });

     
    it('Should succeed the operation, returning the same string by joining all of the elements in an array with non-specify command', function() {
        var arr = [1, 2, 3, 4];
        var result;
        var expected;

        result = join(arr);
        expected = "1,2,3,4";
        
        expect(result).toEqual(expected);
    }); 

    it('Should succeed the operation, the type of result should be string', function() {
        var arr = [1, 2, 3, 4];
        var result;
        var expected;
        
        result = join(arr);
        expected = typeof arr;

        expect(typeof result).toEqual(typeof expected);
    }); 

    
    it('should succeed the operation, returning the same array´s values but in string introducing undefined as separator', function () {
        var arr = [1, 2, 3, 4];
        var result;
        var expected;
        
        result = join(arr, undefined);
        expected = "1,2,3,4"

        expect(result).toEqual(expected); 

    });

    it('should fail on first parameter non-array', function () {
        expect(function () { join(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { join(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { join(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { join('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
    
});