describe('fill', function() {
 // Happy path
 it('should receive an array and an item', function() {
   var array = [1, 2, 3];
   var item = 'a';
   var result = fill(array, item);
   for(var i = 0; i < result.length; i++) {
       expect(result[i]).toBe(item)
   }
 })
 it('should receive an array with an item and first index', function() {
/    var originalArray = [1, 2, 3, 4, 5];/
   var array = [1, 2, 3, 4, 5];
   var item = 'a';
   var indexIni = 1;
   var _result = [1, 'a', 'a', 'a', 'a'];
   fill(array, item, indexIni); // [1, 'a', 'a', 'a', 'a'];
   for(var i = 0; i < array.length; i++) { // for(var i in result)
       expect(array[i]).toBe(_result[i])
   }
 })
 it('should receive an array with an item, first index and final index', function() {
   var array = [1, 2, 3, 4, 5];
   var item = 'a';
   var indexIni = 1;
   var indexEnd = 4;
   var _result = [ 1, 'a', 'a', 'a', 5 ];
   var result = fill(array, item, indexIni, indexEnd) // [1, 'a', 'a', 'a', 5];
   result = JSON.stringify(result);
   expect(result).toBe(JSON.stringify([1, 'a', 'a', 'a', 5]));
 })
 it('should fail on non-received array', function() {
   var array;
   expect(function() { fill(array)}).toThrow(TypeError, 'undefined is not an array'); // mismo mensaje que en función fill()
 })
 it('should fail on receive a function as parameter', function() {
   var array = [1, 2, 3];
   var item = function(x) { return x + 2}
   expect(function() {fill(array, item)}).toThrow(TypeError, 'function should be a string or a number');
 })
})