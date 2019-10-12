describe ('Hooray.prototype.findIndex', function () {


    it ('should return the index of the first item that acomplish the expression sent', function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var expression = function (i) { return (i===0)};

        expect(hooray.findIndex(expression)).tobe(9);
    })

    it ("should return -1 when Item's not found", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var expression = function (i) { return (i<0)};

        expect(hooray.findIndex(expression)).tobe(-1);
    })


    it ("should return -1 when am empty hooray calls findIndex()", function () {

        var hooray = new Hooray ();
        var expression = function (i) { return (i<0)};

        expect(hooray.findIndex(expression)).tobe(-1);
    })


    it ("shouldn't modify the original hooray", function () {

        var hooray = new Hooray (1,2,3,4);
        var test = new Hooray (1,2,3,4);

        var expression = function (i) { return (i<0)};

        expect(hooray).toEqual(test);
    })
})

