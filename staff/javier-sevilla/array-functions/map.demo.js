console.log('DEMO map');

var numbers = [1, 2, 3];

console.log('CASE should create a table applying the expression');
var number2 = map(numbers, function(number) { return number * 2; });
console.log(number2);

console.log('CASE should throw a type error when there are no parameters');
try {
    map();
} catch(error) {
    console.log(error.message);
    // console.log('type error: ' (error instanceof TypeError))
}

console.log('CASE should throw type error when expression is not a function');
try {
    map(numbers, 22);
} catch(error) {
    console.log(error.message);
    // console.log('type error: ' (error instanceof TypeError))
}

