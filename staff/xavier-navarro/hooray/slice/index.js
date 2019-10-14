/**
 * SLICE
 * Copies a part of the hooray wthin a new hooray starting from the beginning to end
 *  (end not include). The origal hooray will not be modified.
 * 
 * @param {Number} begin Index for starting position.
 * @param {Number} end Index for the last position.
 * 
 * @returns {Hooray} New hooray with the extracted values.
 */
Hooray.prototype.slice = function(begin, end) { 
    //if (typeof end === 'undefined') end = array.length;
    var result = []; // {}; // WTF?

    begin = begin || 0;
    begin = begin < 0? this.length + begin : begin;
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    //result.length = end - begin; // WTF?
    
    return result;
};