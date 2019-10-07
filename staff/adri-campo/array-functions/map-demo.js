console.log("DEMO map")
var array = [5,10,20]
console.log("Should return an array affected by the function we have given")
var newArr = map(array, function(value){
    return value * 4
});
console.log(newArr)

