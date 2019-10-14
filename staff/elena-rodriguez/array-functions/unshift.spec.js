describe ('unshift', function () {

    it('should add the sent item at beginning of the array', function () {
        var array = [2,4,6];
        var newItem = 1; 
        var result = unshift(array, newItem);

        expect(result === array).toBe(false);
        expect(result instanceof Array).toBe(true);
        
    });
    /*

    it('should add all items sent at beginning of the array', function () {
        var hooray = new Hooray (4,5);
        hooray.unshift(1,2,3);
        
        var test = new Hooray (1,2,3,4,5);
        
        expect(hooray).toEqual(test);
        
    });

    it('should increase length of array as some items sent', function () {
        var hooray = new Hooray (2,4,6);

        expect(hooray.unshift(1,2,3)).toBe(6);
    });

    it('should succesfully add item/s sent on an empty array is sent', function () {
        var hooray = new Hooray ();

        expect(hooray.unshift(1,2,3)).toBe(3);

        var test = new Hooray (1,2,3);
        
        expect(hooray).toEqual(test);      
    })
*/
});