describe('shift', function () {
    
    it('should eliminate first item of the array given and return it', function() {
        var array = ['Pol', 'Jordi', 'Noa'];

        var result = array.shift();

        expect(result).toBe('Pol');

        expect(array.length).toBe(2);

    })

    it('should fail on non array as parameter', function() {
      
        var array;
        expect(function() { shift(array)}).toThrowError('undefined is not an array');
        
    })
});

