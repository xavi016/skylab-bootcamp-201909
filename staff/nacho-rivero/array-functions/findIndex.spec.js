describe('findIndex', function(){
    
    it('should fail when no declared arguments', function(){
        var array;
        var expression;

        expect(function(){ find(array, expression); }).toThrowError(TypeError, 'array and expression are undefined');
    });

    it('should fail if is not an array', function(){
        var array = 123;
        var expression = function(a) { a > 1; };

        expect(function(){ find(array, expression); }).toThrowError(TypeError, '123 is not an array');
    });

    it('should fail if is not an expression', function(){
        var array = [1, 2, 3];
        var expression = 123;;

        expect(function(){ find(array, expression); }).toThrowError(TypeError, '123 is not an array');
    });

    it('should fail if the array is not defined', function(){
        var array;
        var expression = function(a) { a > 1; };

        expect(function(){ find(array, expression); }).toThrowError(TypeError, 'array is not defined');
    });

    it(' is not a function', function(){
        var array = [1, 2, 3];
        var expression;
        
        expect(function(){ find(array, expression); }).toThrowError(TypeError, 'expression is not defined');
    });

})