console.log('DEMO join');

var array = ["cat", "dog", "rat"];
console.log(array);

console.log('should join the items with comma');
console.log(join(array, '')); // 
console.log(array); // [catdograt]

console.log('should join with the item');
console.log(join(array, '-')); // 
console.log(array); // [cat, dog, rat]