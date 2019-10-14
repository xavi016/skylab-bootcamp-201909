describe('unshift hooray', function () {
    it('should add an element in the beginning of the hooray', function () {
        var hor = new Hooray(4, 5, 6);
        hor.unshift(3);
        var expected = new Hooray(3,4,5,6);
        console.log(hor);
        expect(hor.length).toBe(4);
        //expect(hor).toEqual(expected);
    });
    /*
        it('should add two or more elements in the beginning of the array', function(){
            var ar1 = [4, 5, 6];
            unshift(ar1, 3, 4);
            expect(ar1.length).toBe(5);
        });
    
        it('should add two or more elements to an empty array', function(){
            var ar1 = [];
            unshift(ar1, 3, 4);
            expect(ar1.length).toBe(2);
        });
    
        it('should not add elements if have not elements', function(){
            var ar1 = [4, 5, 6];
            unshift(ar1);
            expect(ar1.length).toBe(3);
        });
        */
});