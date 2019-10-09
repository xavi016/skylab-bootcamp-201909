console.log('DEMO every');

var numbers = [1, 2, 3, 7];

console.log('should create a table applying the expression');
var boleano = every(numbers, function(currentValue) { return currentValue < 8; });
console.log(boleano);

console.log('CASE should throw a type error when there are no parameters');
try {
    every();
} catch(error) {
    console.log(error.message);
}

console.log('CASE should throw type error when expression is not a function');
try {
    every(numbers, 22);
} catch(error) {
    console.log(error.message);
}

