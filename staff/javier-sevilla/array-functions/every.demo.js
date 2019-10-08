console.log('DEMO every');

var numbers = [1, 2, 3];

console.log('should create a table applying the expression');

var boleano = every(numbers, function(currentValue) { return currentValue < 5; });

console.log(boleano);

var func = function(currentValue) { return currentValue * 5; };
console.log(func);

