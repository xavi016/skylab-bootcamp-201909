describe('Hooray.prototype.map', function () {
    it('should return a new Hooray with the elements of the original hooray evaluated by an expression', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5);
        var add = function (x) { return x + 5 }
        var hooray2 = hooray.map(add);
        var result = new Hooray(6, 7, 8, 9, 10);

        expect(hooray2).toEqual(result);
    })
})