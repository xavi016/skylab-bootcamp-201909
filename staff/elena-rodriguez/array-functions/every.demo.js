console.log('DEMO every');


console.log('should return true because all the numbers are smaller than 7');
var array = [1,2,3,4];
console.log(array)

function smallerThan(number) {
    return number < 7;
}
console.log(array.every(smallerThan))


console.log('should return false beacuse there is a number that is equal or bigger than 7');
var array = [1,2,3,9];
console.log(array);
function smallerThan(number) {
    return number < 7;
}
console.log(array.every(smallerThan))