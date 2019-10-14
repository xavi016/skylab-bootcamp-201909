describe('Hooray.prototype.join', function(){  
    it('Should succeed the operation, returning a new string by joining all of the elements in an array separated by empty string or a specified separator string', function(){
        var hooray = new Hooray (1, 2, 3, 4);
        var expected = ("1234");
        var result = hooray.join('');

        expect(result).toEqual(expected);
    });
    
    it('Should succeed the operation, returning a new string by joining all of the elements in an array separated with a specified speartor ,in this case ' , function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var result = hooray.join(', ');
        var expected = ("1, 2, 3, 4") 
        
        expect(result).toEqual(expected);
    });

    it('Should succeed the operation, returning the same string by joining all of the elements in an array with non-specify command', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var result = hooray.join();
        var expected = "1,2,3,4";
        
        expect(result).toEqual(expected);
    }); 

    it('Should succeed the operation, the type of result should be string if we dont introduce any command', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var result = hooray.join();
        var expected = typeof hooray;

        expect(typeof result).toEqual(typeof expected);
    }); 

    
    it('should succeed the operation, returning the same array´s values but in string introducing undefined as separator', function () { 
        var hooray = new Hooray(1, 2, 3, 4);
        var result = hooray.join(undefined);
        var expected = "1,2,3,4"

        expect(result).toEqual(expected); 
    });
});