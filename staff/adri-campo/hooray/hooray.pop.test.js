describe ('Hooray.prototype.pop', function (){
    ​
        it('should delete the last item on the array and return the deleted item', function () {
            var items = new Hooray (1,2,3,4);
    ​
            expect(items.pop()).toBe(4);
    ​
            var test = new Hooray (1,2,3);
            for (var i=0; i<items.length; i++) {
                expect(items[i]).toBe(test[i]);
            }
        });
    ​
        it('should return undefined on an empty array', function (){
            var empty = new Hooray ();
    ​
            expect(empty.pop()).toBe(undefined);
        })
    ​
    })