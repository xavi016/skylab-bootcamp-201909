/**
 * Copies a part of the hooray within a new array starting from beginning
 *  to end (end not included). The original array will not be modified.
 * 
 * @param {number} begin Index for starting position 
 * 
 * @param {number} end Indez for ending position 
 * 
 * @returns {Hooray} New hooray with the extracted values 
 */



Hooray.prototype.slice = function(begin, end) {
	
    var result = []; 

    begin = begin || 0;
    begin = begin < 0? this.length + begin : begin;
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    
    return result;
}