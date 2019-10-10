describe('slice', function (){
    it('should return a new array with the values int he given', function(){
        var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        var j=2
        var result = slice(animals, 2, 4)
        for(var i=0; i<result.length; i++){
            expect(result[i]).toBe(animals[j]); 
            ++j;   
        } 
        expect(result.length).toBe(2)
    });
    it('should return a new array with the values from the begining (no end)', function(){
        var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
           
        var result = slice(animals, 2);
        expect(result === animals).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = ['camel', 'duck', 'elephant'];
        for(var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]);
    });
    it('should run an error to an empty array', function(){
        var animals = [];
        expect(function() { slice(animals, 2, 4); }).toThrowError('array is empty')
        expect(function() { slice(animals, 2, 4); }).toThrow(ReferenceError, 'array is empty')
        try{
            slice(animals, 2, 4); }
        catch(error){
            expect(error.message).toBe('array is empty')
        }
    })
})