describe('unshift', function(){

    it('should insert an element in the beginning of the array', function(){
        var array = [4, 5, 6];
        unshift(array, 3);
        expect(array.length).toBe(4);
    });

    it('should insert two or more elements in the beginning of the array', function(){
        var array = [4, 5, 6];
        unshift(array, 3, 4);
        expect(array.length).toBe(5);
    });

    it('should insert two or more elements to an empty array', function(){
        var array = [];
        unshift(array, 3, 4);
        expect(array.length).toBe(2);
    });

    it('should not insert elements if not elements', function(){
        var array = [4, 5, 6];
        unshift(array);
        expect(array.length).toBe(3);
    });
});