describe('Hooray.prototype.unshift', function(){
    it('should add an element in the beginning of the array', function(){
        var hooray = new Hooray(4, 5, 6);
        hooray.unshift(9);
        expect(hooray.length).toBe(4);
    });

    it('should add two or more elements in the beginning of the array', function(){
        var hooray = new Hooray(4, 5, 6);
        hooray.unshift(3, 4);
        expect(hooray.length).toBe(5);
    });

    it('should add two or more elements to an empty array', function(){
        var hooray = new Hooray;
        hooray.unshift(3, 4);
        expect(hooray.length).toBe(2);
    });

    it('should not add elements if have not elements', function(){
        var hooray = new Hooray(4, 5, 6);
        hooray.unshift();
        expect(hooray.length).toBe(3);
    });
});