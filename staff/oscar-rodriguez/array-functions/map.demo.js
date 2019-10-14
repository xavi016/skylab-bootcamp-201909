console.log ("\n *** MAP DeMO ***");
var array = ["A", "B", "C", "D"];

console.log("Our Array is: "+array);


console.log("\nThis should create a new array converting each item to LowerCase");
var newArray = map (array, function (item) {
    return item.toLowerCase();
});
console.log("Array: "+array);
console.log("newArray: "+newArray);

console.log("\nThis should create a new array with the pow2 of each item");
var numbers = [2,4,6,8];
var pow2 = map (numbers, function (item) { 
    return item << 2;
});
console.log("Numbers Array: "+numbers);
console.log("Pow 2 array: "+pow2);