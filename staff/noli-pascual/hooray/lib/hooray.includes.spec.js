describe('Hooray.prototype.includes', function () {
    it('should find the past arguments in the hooray elements (5 is the argument)', function () {

        var hooray = new Hooray(1, 2, 3, 4, 5);

        var finded = hooray.includes(5);

        expect(finded).toBe(true);
        expect(hooray.length).toBe(5);
               
    });

    it('should find the past arguments in the hooray elements(multiple argument)', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5);

        var finded = hooray.includes(5,2,3);

        expect(finded).toBe(true);
        expect(hooray.length).toBe(5);
         
    });

    it('should not find the past arguments in the hooray elements(one argument)', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5);

        var finded = hooray.includes(7);

        expect(finded).toBe(false);
        expect(hooray.length).toBe(5);
               
    });

    it('should not find the past arguments in the hooray elements(multiple argument)', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5);

        var finded = hooray.includes(1,2,3,7);

        expect(finded).toBe(false);
        expect(hooray.length).toBe(5);
               
    });

});