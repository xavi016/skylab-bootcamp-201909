describe ('indexOf', function () {


    it ('should return the first index where the item is found', function () {

        var numbers = [1,2,3,4,5,6,7,8,9];
        var search = 3;

        expect(indexOf(numbers,search)).toBe(2);
    })

    it ("should start searching from the end when a negative starting is sent", function () {

        var numbers = [1,2,3,4,5,6,7,8,9];
        var search = 7;
        var position = -5; 
        expect(indexOf(numbers,search, position)).toBe(6);
    })

    it ("should return -1 when Item is not found", function () {

        var numbers = [1,2,3,4,5,6,7,8,9];
        var search = 12;
        expect(indexOf(numbers,search)).toBe(-1);

    })

    it ('should return only first index where there is more than two equal values', function () {

        var numbers = [1,2,3,4,5,6,7,8,9,1];
        var search = 1;

        expect(indexOf(numbers,search)).toBe(0);
    })

    it ("should return -1 when Item's not found after a specific start", function () {

        var numbers = [1,2,3,4,5,6,7,8,9];
        var search = 3;
        var position
        
        expect(indexOf(numbers,search)).toBe(0);
    })

    it ("should return -1 when am empty hooray calls indexOf() or any item is scepecified", function () {

        var hooray = new Hooray ();
        expect(hooray.indexOf(5)).toBe(-1);

        hooray = new Hooray(1,2,3);
        expect(hooray.indexOf(5)).toBe(-1);
    })

    it ("should start searching at index 0 when a invalid starting is sent", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        expect(hooray.indexOf(3,"5")).toBe(2);
    })

    it ("shouldn't modify the original hooray", function () {

        var hooray = new Hooray (1,2,3,4);
        var test = new Hooray (1,2,3,4);


        var restult = hooray.indexOf(3);

        expect(hooray).toEqual(test);
    })*/
})

