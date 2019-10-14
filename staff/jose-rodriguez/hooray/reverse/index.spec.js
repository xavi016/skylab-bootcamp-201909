describe('Hooray.prototype.reverse', function () {
    it('should return the array reversed', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5, 6);

        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.reverse()).toEqual(new Horray(6, 5, 4, 3, 2, 1));
        expect(hooray.length).toBe(6);
    });

    it('should return false on no arguments', function () {
        var hooray = new Hooray(1, 2, 3);

        expect(hooray.includes()).toBe(false);
    });
})