/**
 * Look for an element & returns the first index (if not found > return -1)
 * 
 * @param {array} The array to be searched with element
 * @param {element} element 
 * @param {index} number 
 */

    var arrayNumbers = [1,2,3,4,5]

    function indexOf(array, item , expression){
        for (var i = 0; i < array.length; i++){
            if (expression(array[i],item)){
                return i
            }
        }
        return -1
    }
        

    function findNumber(itemArray,item){
       return itemArray === item
    }
        

    // function findNumber(itemArray,item){
    //    if (itemArray === item){
    //        return true
    //    }  else {
    //        return false
    //    }
    // }
    
    indexOf(arrayNumbers , 2 , findNumber)