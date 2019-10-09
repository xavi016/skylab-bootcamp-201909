/**
 * create a new array with all the elements that accomplish the condition of the function given. 
 * 
 * @param {Array} array
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {Array} newArr with the items of the first array that accomplished the test. 
 * */


function filter(array,expression) { 
    var newArr = [];
        for (i = 0; i < array.length; i++) {
        if(expression(array[i])) {
        newArr[newArr.length] = array[i]
        }
    }
    return newArr;
}


