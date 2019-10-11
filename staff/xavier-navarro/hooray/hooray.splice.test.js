describe('Hooray.prototype.splice', function() {
    it('should return a new hooray adding one element in the specific position', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');

        var result = months.splice(1, 0, 'Feb');

        expect(result === months).toBe(false);


        expect(months[1]).toBe('Feb');

        expected = ['Jan', 'Feb', 'March', 'April', 'June'];
        for (var i = 0; i < expected.length; i++)
            expect(months[i]).toBe(expected[i]);
    });
    it('should return a new hooray adding more than one elements in the specific position', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');

        var result = months.splice(1, 0, 'Feb','Dic');

        expect(result === months).toBe(false);
        expect(months[1],months[2]).toBe('Feb','Dic');

        expected = ['Jan', 'Feb','Dic', 'March', 'April', 'June'];
        for (var i = 0; i < expected.length; i++)
        expect(months[i]).toBe(expected[i]);
    });
    it('should return a new empty hooray if no parameters are included', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');

        var result = months.splice();

        expect(result === months).toBe(false);

        expect(result.length).toBe(0);
    });
    it('should return a new hooray with the elements eliminated from the original hooray', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
        var result = months.splice(1, 2);
        expect(result === months).toBe(false);
        expect(result.length).toBe(2);
        expect(result[0], result[1]).toBe('March', 'April');
        
        expected = ['Jan', 'Feb', 'Dec', 'March', 'April', 'June'];
        // for (var i = 0; i < expected.length; i++)
        // expect(months[i]).toBe(expected[i]);
        // expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // for (var i = 0; i < expected.length; i++)
        //     expect(result[i]).toBe(expected[i]);
    });
    // it('should return a new hooray with the values in from the beginning (no ending)', function() {
    //     var months = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

    //     var result = months.slice(2);

    //     expect(result === months).toBe(false);

    //     var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(months[i]).toBe(expected[i]);

    //     expected = [3, 4, 5, 6, 7, 8, 9];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(result[i]).toBe(expected[i]);
    // });

    // it('should return a new Hooray with the same values of the original hooray when no beginning and no ending', function() {
    //     var months = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

    //     var result = months.slice();

    //     expect(result === months).toBe(false);

    //     var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(months[i]).toBe(expected[i]);

    //     expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(result[i]).toBe(expected[i]);
    // });

    // it('should return a new hooray with the last values of the original hooray when beginning is negative and no ending', function() {
    //     var months = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

    //     var result = months.slice(-4);

    //     expect(result === months).toBe(false);

    //     var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(months[i]).toBe(expected[i]);

    //     expected = [6, 7, 8, 9];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(result[i]).toBe(expected[i]);
    // });

    // it('should return a new hooray with values of the original hooray from the beginning and ending, both negatives', function() {
    //     var months = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

    //     var result = months.slice(-7, -3);

    //     expect(result === months).toBe(false);

    //     var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(months[i]).toBe(expected[i]);

    //     expected = [3, 4, 5, 6];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(result[i]).toBe(expected[i]);
    // });

    // it('should return a new hooray with no values when the beginning and ending are both negatives and ending < beginning', function() {
    //     var months = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

    //     var result = months.slice(-3, -7);

    //     expect(result === months).toBe(false);

    //     var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     for (var i = 0; i < expected.length; i++)
    //         expect(months[i]).toBe(expected[i]);

    //     expect(result.length).toBe(0);
    // });

});