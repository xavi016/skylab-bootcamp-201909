/**
 * Method test whether at least one element in the array pass the test. It returns a boolean expression.
 * @param {*} array The array to do the test.
 * @param {*} expression The function test provided.
 */

function some(array,expression){

    for (let i=0; i<array.length;i++){
        
        if (array[i] === expression){
            console.log(true)
            break
        }
        if (array[i] !== expression){
            console.log(false)
            break
        }
    }
}