describe('find', function(){

    it('should fail when no declared arguments', function(){
        var array;
        var value;

        expect(function(){ find(array, value); }).toThrowError(TypeError, 'array and value are undefined');
    });

    it('should fail if is not an array', function(){
        var array = 123;
        var value = 'aragorn';

        expect(function(){ find(array, value); }).toThrowError(TypeError, '123 is not an array');
    });

    it('should fail if is not an value', function(){
        var array = [1, 2, 3];
        var value;

        expect(function(){ find(array, value); }).toThrowError(TypeError, '123 is not an array');
    });

    it('should fail if the array is not defined', function(){
        var array;
        var value = 'gimli';

        expect(function(){ find(array, value); }).toThrowError(TypeError, 'array is not defined');
    });
    
})