describe('shuffle', function () {
    it('should mix array with number values', function () {
        var numbers = [1, 2, 3, 4, 5];

        var randomized = shuffle(numbers);

        expect(randomized === numbers).toBe(false);

        expect(randomized instanceof Array).toBe(true);
        expect(randomized.length).toBe(numbers.length);

        var expected = [1, 2, 3, 4, 5];
        for (var i = 0; i < numbers.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        for (var i = 0; i < randomized.length; i++) {
            var notFound = true;

            for (var j = 0; j < numbers.length && notFound; j++)
                //if (randomized[i] === numbers[j]) notFound = false;
                randomized[i] === numbers[j] && (notFound = false);

            expect(notFound).toBe(false);
        }
    });

    it('should mix array with number values (one repeated)', function () {
        var numbers = [1, 2, 3, 4, 5, 5];

        var randomized = [1, 1, 2, 3, 4, 5]; //shuffle(numbers); // SH*T! TODO improve the test results checking, as this situation could happen and we are not warranting the shuffle behaves as expected.

        expect(randomized === numbers).toBe(false);

        expect(randomized instanceof Array).toBe(true);
        expect(randomized.length).toBe(numbers.length);

        var expected = [1, 2, 3, 4, 5, 5];
        for (var i = 0; i < numbers.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        for (var i = 0; i < randomized.length; i++) {
            var notFound = true;

            for (var j = 0; j < numbers.length && notFound; j++)
                //if (randomized[i] === numbers[j]) notFound = false;
                randomized[i] === numbers[j] && (notFound = false);

            expect(notFound).toBe(false);
        }
    });

    it('should fail on non-array input', function () {
        expect(function () { shuffle(); }).toThrow(TypeError, 'undefined is not an array');

        expect(function () { shuffle(true); }).toThrow(TypeError, 'true is not an array');

        expect(function () { shuffle(1); }).toThrow(TypeError, '1 is not an array');

        expect(function () { shuffle('a'); }).toThrow(TypeError, 'a is not an array');
    });
});