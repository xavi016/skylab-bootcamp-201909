/**
 * 
 * @param {*} array 
 * @param {*} expression 
 */


function checkCondition (item){
    return item < 25

}

function filter(array, expression){
    var newArray = [];

    for (i=0; i<array.length;i++){
        if (expression(array[i])){
            newArray[newArray.length] = array[i]
        }
    } 
    return newArray
    
};

var arrayNumbers = [1,4,5,53,23,37]

console.log(filter(arrayNumbers, checkCondition));
