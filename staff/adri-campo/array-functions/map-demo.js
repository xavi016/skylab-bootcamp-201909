console.log("DEMO map")
var array = [5,10,20]
console.log("Should return an array affected by the function we have given")
var newArr = map(array, function(value){
    return value * 4
});
console.log(newArr)

console.log('CASE should throw type error on no expresion');
try {
    forEach([]);
}
catch(error){
console.log(error.message)
console.log("type error: " + (error instanceof TypeError));
}