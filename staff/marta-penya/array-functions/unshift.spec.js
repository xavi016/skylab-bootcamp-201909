describe('unshift', function(){
    it('should add an element in the beginning of the array', function(){
        var array = [4, 5, 6];

        result = unshift(array, 3);

        expect(result).toEqual(array);

        expect(result.length).toBe(4);
    });

    // it('should add two or more elements in the beginning of the array', function(){
    //     var array = [4, 5, 6];
    //     unshift(array, 3, 4);
    //     expect(array.length).toBe(5);
    // });

    // it('should add two or more elements to an empty array', function(){
    //     var array = [];
    //     unshift(array, 3, 4);
    //     expect(array.length).toBe(2);
    // });

    // it('should not add elements if have not elements', function(){
    //     var array = [4, 5, 6];
    //     unshift(array);
    //     expect(array.length).toBe(3);
    // });
});