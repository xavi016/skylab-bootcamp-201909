function slice(array, bgin, end){

    result = [];

    for (var i = begin; i < end; i++)
        result[i - begin] = array[i];
        
    return result;
};