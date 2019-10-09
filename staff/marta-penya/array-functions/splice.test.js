describe('splice', function (){
    it('should return a new array correctly', function(){
        var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        var result = splice(animals, 1, 1, 'grillo')

        expect(JSON.stringify(result)).toBe(JSON.stringify(['ant', 'grillo', 'camel', 'duck', 'elephant']))
    });

    it('should run an error to not a number', function(){
        
        expect(function() { splice(animals, 'a', 1, 'grillo'); }).toThrowError('a is not a number')
        expect(function() { splice(animals, 'a', 1, 'grillo'); }).toThrow(TypeError, 'a is not a number')
        try{
            splice(animals, 'a', 1, 'grillo'); }
        catch(error){
            expect(error.message).toBe('a is not a number')
        }
    })
})







