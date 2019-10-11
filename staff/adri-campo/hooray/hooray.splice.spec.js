describe('Hooray.prototype.splice', function() {
    it('should return a new hooray adding one element in the specific position', function() {
​
        var months = new Hooray('Jan', 'March', 'April', 'June');
        
        var result = months.splice(1, 0, 'Feb');
​
        expect(result).not.toBe(months);
        
        expect(months[1]).toBe('Feb');
​
        expect(months).toContain('Jan', 'Feb', 'March', 'April', 'June'); 
​
        
    });
​
    it('should return a new hooray adding more than one element in the specific position', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
    
        var result = months.splice(1, 0, 'Feb', 'Dec');
​
        expect(result).not.toBe(months);
        
        expect(months).toContain('Feb', 'Dec');
​
        expect(months).toContain('Jan', 'Feb', 'Dec', 'March', 'April', 'June'); 
    });
​
    it('should return a new empty hooray if no parameters are included', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
​
        var result = months.splice();
​
        expect(result).not.toBe(months);
        
        expect(result.length).toBe(0);
    });
​
    it('should return a new hooray with the elements eliminated from the original hooray', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
​
        var result = months.splice(1, 2);
​
        expect(result).not.toBe(months);
​
        expect(result.length).toBe(2);
​
​
        expect(result[0], result[1]).toBe('March', 'April');
        
        expect(result).toBe('Jan', 'Feb', 'Dec', 'March', 'April', 'June')
​
    });
​
    /*it('should return a new hooray with the last values of the original hooray when beginning is negative and no ending', function() {
        var months = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
​
        var result = months.slice(-4);
​
        expect(result === months).toBe(false);
        
        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(months[i]).toBe(expected[i]);
​
        expected = [6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]);
    });
​
    it('should return a new hooray with values of the original hooray from the beginning and ending, both negatives', function() {
        var months = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
​
        var result = months.slice(-7, -3);
​
        expect(result === months).toBe(false);
        
​
        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(months[i]).toBe(expected[i]);
​
        expected = [3, 4, 5, 6];
        for (var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]);
    });
​
    it('should return a new hooray with no values when the beginning and ending are both negatives and ending < beginning', function() {
        var months = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
​
        var result = months.slice(-3, -7);
​
        expect(result === months).toBe(false);
        
​
        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(months[i]).toBe(expected[i]);
​
        expect(result.length).toBe(0);
    }); */
});