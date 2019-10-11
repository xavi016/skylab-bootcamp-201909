describe('Hooray.prototype.findIndex', function () {

    it('should return the index number of the first item that returns true to the condition', function () {
        function checkCondition(item) {
            return item > 5
        };
        
        var numbers = new Hooray (1, 4, 5, 53, 23, 37);
        var result = numbers.findIndex(checkCondition);

        expect(result).toBe(3);

    });

    it('should return -1 if there is no match', function () {        
        function checkConditionNoMatch(item) {
            return item > 55
        };
        var numbers = new Hooray (1, 4, 5, 53, 23, 37);
        var result = numbers.findIndex(checkConditionNoMatch);

        expect(result).toBe(-1);

    });    

    it('should return -1 if the hooray is empty', function () {
        function checkCondition(item) {
        return item > 5
        };

        var numbers = new Hooray();
        var result = numbers.findIndex(checkCondition);
    
        expect(result).toBe(-1);

    });   

    // ERRORES

    it('should fail if hooray is NOT an hooray', function () {
        function checkCondition(item) {
            return item > 5
            };
    
        var numbers = new Hooray;//= [1, 4, 5, 53, 23, 37];
        var result = numbers.findIndex(checkCondition);
        
        expect( function() { findIndex();}).toThrow(TypeError, "hooray is not defined");

    });  

});