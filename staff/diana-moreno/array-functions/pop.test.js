/*console.log('DEMO pop');

var array = [1, 2, 3];

console.log('should remove the last element of the array and return the element');
console.log(pop(array)); // 3

console.log('should modify the original array')
console.log(array); // [1, 2]

console.log('CASE should return undefined on empty array');
console.log(pop()) // undefined

console.log('CASE should throw type error on argument different to array');
try {
  pop('hello')
  console.log('this will not print')
} catch (error) {
  console.log(error.message) // Uncaught TypeError: hello is not a function
  //debugger
}
*/
describe('pop', function() {
  it('should return the item deleted', function() {
    var array = ['a', 'b', 'c'];

    expect(pop(array)).toBe('c');
    expect(array.length).toBe(2);
    expect(array[array.length - 1]).toBe('b');
    expect(array[array.length - 2]).toBe('a');
  });

  it('should return undefined when an empty array is passed', function() {
    var array = [];

    expect(pop(array)).toBe(undefined);
  }, function(error) {
    expect(error).toBe(!undefined);
  });

  it('should throw an error when others types different to array are passed', function() {
    var string = 'hello'
    var number = 'number'

    try {
      pop(string);
    } catch (error) {
      expect(error.message).toBe('Data type is not Array');
    }

    try {
      pop(number);
    } catch (error) {
      expect(error.message).toBe('Data type is not Array');
    }
  })
});