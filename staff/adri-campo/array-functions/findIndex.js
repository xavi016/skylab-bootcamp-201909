function checkCondition(item) {
    return item > 5 
}

function findIndex(array,expression){
    if(!(array instanceof Array)) throw TypeError("Cannot read property '0' of undefined");

    for (i=0; i<array.length;i++){
        if (checkCondition(array[i])){
            return i
        }
    } 
    return -1
    
};

var arrayNumbers = [1,4,5,53,23,37]
// var arrayNumbers = []

// for(var i = 0 ; i<10 ; i++){
//     var rnd = Math.floor(Math.random() * 10)+1; 
//     arrayNumbers[i] = rnd
// }

findIndex(arrayNumbers, checkCondition);


