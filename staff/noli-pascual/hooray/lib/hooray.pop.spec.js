describe('pop hooray', function () {
    it('should deletes the last item from the hooray and return the deleted element', function () {
        var horay = new Hooray(1, 2, 3, 4, 5);
        var result = horay.pop();
        var expected = new Hooray(1, 2, 3, 4);

        expect(horay.length).toBe(4);
        expect(result).toBe(5);
        expect(horay).toEqual(expected);
    });

    it('should returns an empty hooray if the hooray length at the beginning is 1', function () {
        var horay = new Hooray(1);
        var result = horay.pop();
        var expected = new Hooray();

        expect(horay.length).toBe(0);
        expect(result).toBe(1);
        expect(horay).toEqual(expected);
    });

    it('should returns undefined if the hooray is empty', function () {
        var horay = new Hooray();
        var result = horay.pop();
        var expected = new Hooray();

        expect(result).toBeUndefined();
        expect(horay).toEqual(expected);
    });    
});