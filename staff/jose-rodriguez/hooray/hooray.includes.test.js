describe('Hooray.prototype.includes', function () {
    it('should evaluates a hooray with a expression', function () {
        var hooray = new Hooray('a', 'b', 'c');

        expect(hooray.push('d')).toBe(4);
        expect(hooray.length).toBe(4);
        expect(hooray[hooray.length - 1]).toBe('d');

        var chars = ['a', 'b', 'c', 'd'];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars[i]);
    });
});