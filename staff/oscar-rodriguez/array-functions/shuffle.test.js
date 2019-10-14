describe ('SHUFFLE', function () {

    it ('should return an array with the same items, but disordered', function () {
        var numbers = [1,2,3,4,5,6];
        var disorderd = [];

        for (i=0; i<disorderd.length; i++){
            var not_found = true;
            for (j=0; j < numbers.length && not_found; j++)
                disordered[i] === numers[j] && (not_found = flase);


/*          expect(numbers.includes(disorderd[i])).toBe(true);
            numbers.slice(i,1);
 */        }
    })


    it ('should throw an error if array is not sent', function () {
        expect (function () { shuffle(1); }).toThrow(TypeError,'1 is not an array')
    })

    it ('should throw an error if array is not empty', function () {
        expect (function () { shuffle([]); }).toThrowError("Can't randomize an empty array");
    })
    
})