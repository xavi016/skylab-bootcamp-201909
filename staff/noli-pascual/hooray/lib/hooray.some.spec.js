describe ("hooray.prototype.some", function(){
    it("Should return true if any of the hooray items accomplish the condition", function(){
        var hooray = new Hooray (1,4,5,53,23,37);
        function checkCondition(item) {
            return item > 5
        }
        var result = hooray.some(checkCondition);
    
        expect(result).toBe(true);

    });

    it ("Should return false if there are no matches between the hooray items with the condition given", function(){
        var hooray = new Hooray (1,4,5,53,23,37);
        function checkCondition(item) {
            return item > 55
        }

        var result = hooray.some(checkCondition);

        expect(result).toBe(false);

    });


    it ("Should return false if you give an empty hooray", function(){
        var hooray = new Hooray();
        function checkCondition(item) {
            return item > 55
        }

        var result = hooray.some(checkCondition);

        expect(result).toBe(false);

    });

    it("should return expression is not a function", function() {
        var hooray = new Hooray();
        var checkCondition;

        expect(function() { hooray.some(checkCondition); }).toThrowError(TypeError, "undefined is not a function");

    });

    
});