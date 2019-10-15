/**
 * @param {*} items to add in the beggining of the this
 * 
 * @returns {number} the hooray length after add the elements
 */
Hooray.prototype.unshift = function(){  
    debugger
    var itemsLen = arguments.length;
    var hoorLen = this.length;
    for(var i = 0; i< itemsLen; i++){
        this[hoorLen+i] = null
    }
    var newLen = this.length-1;
    for(var e = newLen; e >= 0; e--){
        this[e] = this[e-itemsLen]
        if(e === newLen-hoorLen){
        break
        }
    }
    for(var o = 0; o<itemsLen; o++){
            this[o] = arguments[o];
            this.length++;
        }

    return this;
}