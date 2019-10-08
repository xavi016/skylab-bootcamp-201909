describe('map', function() {
	it('should return a new Array with the numbers of the first array multiplied for 2', function() {
        var numbers = [1,2,3];
        var result = [];
        var multiplicate = function (number) {
            return number * 2;
         };
    

         map(numbers, multiplicate);

        expect(result).toBe([2, 4, 6]);
    }, function(error) {
        expect(error).toBe(undefined);
    });  


    it('should return a new Array with the square root of the initial array numbers', function() {
        var numbers = [1, 2, 3];
        var result = [];
        var squareRoot = function (num) {
            return Math.sqrt(num);};

        map(numbers, squareRoot);

        expect(result).toBe([1, 1.4142135623730951, 1.7320508075688772]);
    }, function(error) {
        expect(error).toBe(undefined);
    });      
});